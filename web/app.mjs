import config from './config.mjs';
import {run} from './engine.mjs';
const $=id=>document.getElementById(id);
$('title').textContent=config.title+' · '+config.version;
$('scope').textContent=config.scope;
$('limits').textContent='实现边界：'+config.limitations;
$('input').value=config.example;
function execute(){
 try{const start=performance.now(),output=run($('input').value);$('output').textContent=output;$('output').className=output.startsWith('ERROR:')?'error':'';$('status').textContent='执行 '+(performance.now()-start).toFixed(2)+' ms';$('tiles').hidden=true;
 if(config.slug==='wfc'&&!output.startsWith('ERROR:')){const rows=output.split('\n').slice(0,12);if(rows.every(x=>/^[~.^]{16}$/.test(x))){$('tiles').replaceChildren();for(const c of rows.join('')){const tile=document.createElement('span');tile.style.background={'~':'#446e83','.':'#99b984','^':'#c3b999'}[c];$('tiles').append(tile)}$('tiles').hidden=false}}
 }catch(e){$('output').textContent=String(e);$('output').className='error'}
}
$('run').onclick=execute;$('reset').onclick=()=>{$('input').value=config.example;execute()};execute();

const paintBoard=()=>{const line=$('output').textContent.split('\n').find(x=>x.startsWith('FEN: '));if(!line)return;const fen=line.slice(5).split(' ')[0],board=$('tiles');board.replaceChildren();board.style.gridTemplateColumns='repeat(9,1fr)';board.style.maxWidth='450px';board.style.background='#b19569';board.style.padding='8px';const glyphs={k:'将',a:'士',b:'象',n:'马',r:'车',c:'炮',p:'卒',K:'帅',A:'仕',B:'相',N:'马',R:'车',C:'炮',P:'兵'};for(const row of fen.split('/')){for(const c of row){if(/[1-9]/.test(c)){for(let i=0;i<Number(c);i++){const el=document.createElement('span');el.style.cssText='height:38px;background:#ddc69a';board.append(el)}}else{const el=document.createElement('span');el.textContent=glyphs[c]||c;el.style.cssText='height:38px;text-align:center;font:bold 24px/38px serif;background:#f1dba9;border-radius:50%;color:'+(c===c.toUpperCase()?'#ac302b':'#202c36');board.append(el)}}}board.hidden=false};
new MutationObserver(paintBoard).observe($('output'),{childList:true});paintBoard();
