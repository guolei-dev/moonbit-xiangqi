import assert from 'node:assert/strict';
import fs from 'node:fs';
import {spawn} from 'node:child_process';
import {setTimeout as delay} from 'node:timers/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {position,legal,perft,search_game} from '../web/engine.mjs';
const binary=process.env.XIANGQI_REFERENCE;if(!binary)throw Error('Set XIANGQI_REFERENCE to official Fairy-Stockfish 14 largeboard binary');
const digest=createHash('sha256').update(fs.readFileSync(binary)).digest('hex');
assert.equal(digest,'c9a88647985e12120cff34324bf9200ba2f3ddb50f3b33c4c47f44e14c0af20c');
class Peer {
 constructor(exe,args=[]){this.lines=[];this.error='';this.child=spawn(exe,args,{windowsHide:true,stdio:['pipe','pipe','pipe']});let pending='';
 this.child.on('error',e=>this.error+=e.message);this.child.stderr.on('data',b=>this.error+=b);
 this.child.stdout.on('data',b=>{pending+=b;let at;while((at=pending.indexOf('\n'))>=0){this.lines.push(pending.slice(0,at).trim());pending=pending.slice(at+1)}});}
 async ask(command,pattern){const start=this.lines.length;this.child.stdin.write(command+'\n');const deadline=Date.now()+15000;
 while(Date.now()<deadline){const lines=this.lines.slice(start);const found=lines.find(l=>pattern.test(l));if(found)return {line:found,lines};if(this.child.exitCode!==null||this.error)throw Error(this.error+' '+lines.join('\n'));await delay(3)}throw Error('Reference timeout: '+command);}
 close(){this.child.stdin.end('quit\n');this.child.kill();}
}
const toNative=m=>m.replace(/([a-i])(\d)/g,(_,f,r)=>f+(Number(r)+1));
const fromNative=m=>m.replace(/([a-i])(10|[1-9])/g,(_,f,r)=>f+(Number(r)-1));
const nativeCommand=cmd=>{const [head,moves]=cmd.split(' moves ');return head+(head.startsWith('position fen ')&&head.split(/\s+/).length===4?' - - 0 1':'')+(moves?' moves '+moves.split(' ').map(toNative).join(' '):'')};
const reference=new Peer(binary),local=new Peer(process.execPath,[fileURLToPath(new URL('./engine.mjs',import.meta.url))]);
const rows=[],games=[],adjudication=[];
try {
 const handshake=await reference.ask('uci',/^uciok$/);assert(handshake.lines.some(l=>l.includes('Fairy-Stockfish 14')));
 await reference.ask('setoption name UCI_Variant value xiangqi\nsetoption name Use NNUE value false\nisready',/^readyok$/);
 await local.ask('uci\nisready',/^readyok$/);
 async function inspect(command,depth=1){
  const response=await reference.ask(nativeCommand(command)+'\nd\ngo perft '+depth,/^Nodes searched: /);
  const referenceFen=response.lines.find(l=>l.startsWith('Fen: ')).slice(5).split(' ').slice(0,2).join(' ');
  const moves=response.lines.filter(l=>/^[a-i](?:10|[1-9])[a-i](?:10|[1-9]): \d+$/.test(l)).map(l=>fromNative(l.split(':')[0])).sort();
  const fen=position(command);assert.equal(fen,referenceFen,command);const actual=legal(fen).split(' ').filter(Boolean).sort();assert.deepEqual(actual,moves,command);
  const nodes=Number(response.line.split(':')[1]);assert.equal(Number(perft(fen,depth)),nodes,command);
  const row={command,fen,depth,referenceMoves:moves,referenceNodes:nodes,matched:true};rows.push(row);return row;
 }
 let state=20260921;const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state};
 for(let walk=0;walk<4;walk++){
  const moves=[];
  for(let ply=0;ply<32;ply++){
   const row=await inspect('position startpos'+(moves.length?' moves '+moves.join(' '):''),ply%8===0?2:1);
   if(!row.referenceMoves.length)break;
   moves.push(row.referenceMoves[random()%row.referenceMoves.length]);
  }
 }
 for(const fen of ['1rbaka2R/5r3/6n2/2p1p1p2/4P1bP1/PpC3Bc1/1nPR2P2/2N2AN2/1c2K1p2/2BAC4 w',
  '4kcP1N/8n/3rb4/9/9/9/9/3p1A3/4K4/5CB2 w','4k4/3R1R3/9/9/4P4/9/9/9/9/4K4 b',
  '4k4/9/9/9/4p4/9/9/9/r8/R3K4 w'])await inspect('position fen '+fen,2);
 for(const localRed of [true,false]){
  const moves=[],turns=[];let terminal=null;
  for(let ply=0;ply<24;ply++){
   const command='position startpos'+(moves.length?' moves '+moves.join(' '):'');const row=await inspect(command);
   if(!row.referenceMoves.length){terminal='no-legal-moves';break}
   const localTurn=(ply%2===0)===localRed;
   const response=await (localTurn?local:reference).ask((localTurn?command:nativeCommand(command))+'\ngo depth 2 nodes 5000',/^bestmove /);
   const raw=response.line.split(' ')[1],move=localTurn?raw:fromNative(raw);
   if(raw==='0000'||raw==='(none)'){assert(localTurn&&response.lines.some(l=>l.startsWith('info string result ')));terminal=response.lines.find(l=>l.startsWith('info string result '));break}
   assert(row.referenceMoves.includes(move),JSON.stringify({command,localTurn,response}));moves.push(move);turns.push({side:localTurn?'local':'reference',move,info:response.lines.filter(l=>l.startsWith('info '))});
  }
  assert(moves.length>=8);games.push({localRed,moves,turns,terminal,scope:'24-ply capped interaction, depth 2 and 5000 nodes per turn. No strength/Elo conclusion.'});
 }
 const fixtures=[
  ['position startpos','b0c2 b9c7 c2b0 c7b9','draw-repetition'],
  ['position fen 4k4/3R5/9/9/4p4/9/9/9/9/4K4 w','d8e8 e9d9 e8d8 d9e9','red-loses-perpetual-check'],
  ['position fen 4k4/9/9/9/9/4P4/9/9/3r5/4K4 b','d1e1 e0d0 e1d1 d0e0','black-loses-perpetual-check']];
 for(const [base,cycle,status] of fixtures){
  const command=base+' moves '+cycle+' '+cycle;
  // UCI intentionally does not adjudicate optional root endings in this engine.
  // XBoard exposes the native result directly; do not infer a result from a search score.
  const arbiter=new Peer(binary);let response;
  try {
   await arbiter.ask('xboard\nprotover 2',/^feature done=1$/);
   const setup='variant xiangqi\nforce\n'+(base.startsWith('position fen ')?'setboard '+base.slice(13)+' - - 0 1\n':'');
   response=await arbiter.ask(setup+(cycle+' '+cycle).split(' ').map(m=>'usermove '+m).join('\n')+'\ngo',/^(1\/2-1\/2|1-0|0-1) /);
   const expected=status==='draw-repetition'?'1/2-1/2':status.startsWith('red-')?'0-1':'1-0';
   assert(response.line.startsWith(expected+' '),response.line);
   assert(!response.lines.some(l=>l.startsWith('Illegal move')||l.startsWith('Error')),response.lines.join('\n'));
  }finally{arbiter.close()}
  const actual=await local.ask(command+'\ngo depth 2',/^bestmove /);assert.equal(actual.line,'bestmove 0000');assert(actual.lines.includes('info string result '+status));
  const info=[];assert.equal(search_game(command,2,1000,()=>false,l=>info.push(l)),'bestmove 0000');
  adjudication.push({command,status,referenceProtocol:'xboard',reference:response.lines,actual:actual.lines,matchedResult:true});
 }
 const report={utc:new Date().toISOString(),reference:'Official Fairy-Stockfish 14 largeboard, classical evaluation',binarySHA256:digest,
  binaryURL:'https://github.com/fairy-stockfish/Fairy-Stockfish/releases/download/fairy_sf_14/fairy-stockfish-largeboard_x86-64-bmi2.exe',
  engineSHA256:createHash('sha256').update(fs.readFileSync(new URL('../web/engine.mjs',import.meta.url))).digest('hex'),
  positions:rows.length,perftDepth2:rows.filter(r=>r.depth===2).length,rows,games,adjudication,
  scope:'Exact legal move sets, resulting FEN and depth-1/2 counts on sampled positions. Three simple repeated-game outcomes match native XBoard results; no full long-chase/tournament proof. Two capped games establish independent interoperability, not equal playing strength.'};
 fs.writeFileSync(new URL('../evidence/native-reference.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({positions:rows.length,perftDepth2:report.perftDepth2,games:games.length,plies:games.reduce((n,g)=>n+g.moves.length,0),adjudication:adjudication.length}));
}finally{reference.close();local.close()}
