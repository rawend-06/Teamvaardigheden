function createTimer(seconden,onTick,onDone){
 let rest=seconden,id=null;
 function stop(){clearInterval(id);id=null}
 function tick(){rest--;onTick(rest);if(rest<=0){stop();onDone()}}
 return{
  start(){if(!id&&rest>0)id=setInterval(tick,1000)},
  pause(){stop()},
  reset(){stop();rest=seconden;onTick(rest)}
 };
}
function fmt(s){return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
