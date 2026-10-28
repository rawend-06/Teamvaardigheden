const OEFENINGEN=[
{titel:'4-7-8 ademhaling',duur:120,ademhaling:true,beschrijving:'Kalmeert je zenuwstelsel, ideaal voor of na een examen.',stappen:['Ga rechtop zitten en ontspan je schouders.','Adem 4 seconden in door je neus.','Houd 7 seconden je adem in.','Adem 8 seconden uit door je mond.','Herhaal tot de timer afloopt.']},
{titel:'Doosademhaling',duur:180,ademhaling:true,beschrijving:'Een rustige, regelmatige ademhaling om te focussen.',stappen:['Adem 4 seconden in.','Houd 4 seconden vast.','Adem 4 seconden uit.','Wacht 4 seconden en begin opnieuw.']},
{titel:'Nek en schouders',duur:120,ademhaling:false,beschrijving:'Los de spanning na urenlang zitten.',stappen:['Laat je kin rustig naar je borst zakken.','Kantel je hoofd 15 seconden naar links, dan naar rechts.','Rol je schouders 10 keer naar achteren.','Strek je armen boven je hoofd en adem diep in.']},
{titel:'Mini-wandeling',duur:300,ademhaling:false,beschrijving:'Even frisse lucht om je hoofd leeg te maken.',stappen:['Laat je telefoon liggen.','Wandel 5 minuten, binnen of buiten.','Let op wat je ziet, hoort en ruikt.','Kom terug en neem een slok water.']}];
const oef=document.getElementById('oef'),det=document.getElementById('detail'),tijd=document.getElementById('tijd'),
 circle=document.getElementById('circle'),klaar=document.getElementById('klaar');
let timer=null;
function kies(o){
 if(timer)timer.pause();
 det.hidden=false;klaar.textContent='';circle.hidden=!o.ademhaling;circle.classList.remove('run');
 document.getElementById('dTitel').textContent=o.titel;
 document.getElementById('dBeschr').textContent=o.beschrijving;
 const ol=document.getElementById('dStappen');ol.innerHTML='';
 o.stappen.forEach(s=>{const li=document.createElement('li');li.textContent=s;ol.appendChild(li)});
 tijd.textContent=fmt(o.duur);
 timer=createTimer(o.duur,s=>{tijd.textContent=fmt(s)},()=>{circle.classList.remove('run');klaar.textContent='✅ Goed gedaan! Oefening klaar.'});
 det.scrollIntoView({behavior:'smooth'});
}
OEFENINGEN.forEach(o=>{
 const a=document.createElement('article');a.className='card';
 a.innerHTML='<span class="tag"></span><h3></h3><p></p><button class="btn" style="margin-top:14px">Open oefening</button>';
 a.querySelector('.tag').textContent=Math.round(o.duur/60)+' min';
 a.querySelector('h3').textContent=o.titel;a.querySelector('p').textContent=o.beschrijving;
 a.querySelector('button').onclick=()=>kies(o);oef.appendChild(a)});
document.getElementById('start').onclick=()=>{if(!timer)return;klaar.textContent='';timer.start();circle.classList.add('run')};
document.getElementById('pauze').onclick=()=>{if(!timer)return;timer.pause();circle.classList.remove('run')};
document.getElementById('reset').onclick=()=>{if(!timer)return;timer.reset();circle.classList.remove('run');klaar.textContent=''};
