import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {setTimeout as delay} from 'node:timers/promises';
import {position,legal} from '../web/engine.mjs';
const games=[];
for(const protocol of ['uci','ucci']){
 const child=spawn(process.execPath,[fileURLToPath(new URL('./engine.mjs',import.meta.url))],{windowsHide:true,stdio:['pipe','pipe','pipe']});
 let pending='',diagnostic='';const lines=[],moves=[],positions=[];let terminal=null;
 child.stdout.on('data',b=>{pending+=b;let end;while((end=pending.indexOf('\n'))>=0){lines.push(pending.slice(0,end).trim());pending=pending.slice(end+1);}});
 child.stderr.on('data',b=>diagnostic+=b);const exited=once(child,'exit');
 const send=s=>child.stdin.write(s+'\n');
 async function wait(pattern,from){const deadline=Date.now()+10000;while(Date.now()<deadline){const seen=lines.slice(from);assert(!seen.some(l=>l.startsWith('info string error')),seen.join('\n'));const found=seen.find(l=>pattern.test(l));if(found)return found;assert.equal(child.exitCode,null,diagnostic);await delay(5);}throw Error('Gameplay response timeout: '+pattern);}
 try{
  send(protocol+'\nisready');await wait(new RegExp('^'+protocol+'ok$'),0);await wait(/^readyok$/,0);
  for(let ply=0;ply<24;ply++){
   const command='position startpos'+(moves.length?' moves '+moves.join(' '):'');
   const fen=position(command);assert(!fen.startsWith('ERROR:'),fen);
   assert(fen.endsWith(ply%2?' b':' w'));const allowed=legal(fen).split(' ').filter(Boolean);
   if(!allowed.length)break;
   const at=lines.length;send(command+'\n'+(protocol==='uci'?'go depth 2':'go nodes 500')+'\nisready');
   await wait(/^readyok$/,at);const reply=await wait(/^bestmove /,at),move=reply.split(' ')[1];
   if(move==='0000'){
    const result=lines.slice(at).find(l=>l.startsWith('info string result '));assert(result,'terminal move requires adjudication');
    terminal=result.slice('info string result '.length);assert.equal(terminal,'draw-repetition');
    assert([position('position startpos'),...positions].filter(p=>p===fen).length>=3,'independent history count');break;
   }
   assert(allowed.includes(move),reply);moves.push(move);
   const after=position('position startpos moves '+moves.join(' '));assert(!after.startsWith('ERROR:'),after);assert.notEqual(after,fen);
   positions.push(after);assert.equal(lines.slice(at).filter(l=>l.startsWith('bestmove ')).length,1);
  }
  assert(moves.length===24 || (moves.length>=8 && terminal),'bounded game reaches cap or documented repetition');
  let at=lines.length;send('ucinewgame\nisready');await wait(/^readyok$/,at);send('go nodes 1');
  const fresh=await wait(/^bestmove /,at);assert(legal(position('position startpos')).split(' ').includes(fresh.split(' ')[1]));
  at=lines.length;send('position startpos\ngo infinite\nisready');await wait(/^readyok$/,at);await wait(/^info depth [1-9]/,at);send('stop');
  const stopped=await wait(/^bestmove /,at);assert(legal(position('position startpos')).split(' ').includes(stopped.split(' ')[1]));
  send('quit');const timer=setTimeout(()=>child.kill(),3000);try{const [code]=await exited;assert.equal(code,0,diagnostic);}finally{clearTimeout(timer);}
  games.push({protocol,terminal,plies:moves.length,moves,positions,newGameReply:fresh,stopReply:stopped,exitCode:0,transcript:lines});
 }finally{if(child.exitCode===null)child.kill();}
}
const sources=Object.fromEntries(['tools/engine.mjs','tools/engine-worker.mjs','tools/test-gameplay.mjs','web/engine.mjs'].map(p=>[p,createHash('sha256').update(fs.readFileSync(new URL('../'+p,import.meta.url))).digest('hex')]));
fs.writeFileSync(new URL('../evidence/gameplay-validation.json',import.meta.url),JSON.stringify({utc:new Date().toISOString(),node:process.version,passed:games.length,totalPlies:games.reduce((sum,g)=>sum+g.plies,0),games,sources,scope:'Two real persistent child processes controlled by a separate protocol client; common game, ready during search, stop, new game and quit workflows. Move legality checks use this project core, so these are host workflow checks, not independent rules, GUI, playing-strength or tournament validation. Independent published rule-count regressions are recorded separately.'},null,2)+'\n');
console.log(`Gameplay: 2 process sessions, ${games.reduce((n,g)=>n+g.plies,0)} plies, ${games.filter(g=>g.terminal).length} adjudications; new game and stop passed`);
