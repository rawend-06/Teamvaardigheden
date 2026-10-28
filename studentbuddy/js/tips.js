const TIPS=[
{c:'Plannen',t:'Maak een weekplanning',d:'Plan elke zondag je studie-uren voor de komende week.'},
{c:'Plannen',t:'Begin vroeg',d:'Verdeel de leerstof over meerdere dagen in plaats van alles op het einde.'},
{c:'Plannen',t:'Stel kleine doelen',d:'Kies per sessie 1 concreet doel, bv. hoofdstuk 3 samenvatten.'},
{c:'Plannen',t:'Plan pauzes in',d:'Zet rustmomenten en vrije tijd ook in je agenda.'},
{c:'Concentratie',t:'Gsm weg',d:'Leg je telefoon in een andere kamer tijdens het studeren.'},
{c:'Concentratie',t:'Vaste studieplek',d:'Een vaste, opgeruimde plek helpt je hersenen om in studeermodus te komen.'},
{c:'Concentratie',t:'Werk in blokken',d:'Studeer 25 tot 50 minuten en neem dan 5 tot 10 minuten pauze.'},
{c:'Concentratie',t:'Drink water',d:'Een glas water naast je helpt om scherp te blijven.'},
{c:'Examens',t:'Test jezelf',d:'Maak oefenvragen in plaats van alleen te herlezen.'},
{c:'Examens',t:'Leg uit aan iemand anders',d:'Als je het simpel kan uitleggen, snap je het echt.'},
{c:'Examens',t:'Slaap voldoende',d:'Een goede nachtrust voor het examen is meer waard dan een nachtje blokken.'},
{c:'Examens',t:'Oefen oude examens',d:'Zo leer je het type vragen kennen en beheers je je tijd beter.'}];
const cats=['Alle',...new Set(TIPS.map(t=>t.c))];
const fl=document.getElementById('filters'),box=document.getElementById('tips');
function toon(cat){
 box.innerHTML='';
 TIPS.filter(t=>cat==='Alle'||t.c===cat).forEach(t=>{
  const a=document.createElement('article');a.className='card';
  a.innerHTML='<span class="tag"></span><h3></h3><p></p>';
  a.querySelector('.tag').textContent=t.c;a.querySelector('h3').textContent=t.t;a.querySelector('p').textContent=t.d;
  box.appendChild(a)});
 fl.querySelectorAll('.chip').forEach(b=>{const on=b.textContent===cat;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on)});
}
cats.forEach(c=>{const b=document.createElement('button');b.className='chip';b.textContent=c;b.onclick=()=>toon(c);fl.appendChild(b)});
toon('Alle');
