const KEY='studentbuddy-taken';
let taken=[],filter='alle';
try{taken=JSON.parse(localStorage.getItem(KEY))||[]}catch(e){taken=[]}
const lijst=document.getElementById('lijst'),inp=document.getElementById('nieuw'),err=document.getElementById('err');
function bewaar(){try{localStorage.setItem(KEY,JSON.stringify(taken))}catch(e){}}
function render(){
 lijst.innerHTML='';
 const zicht=taken.filter(t=>filter==='alle'||(filter==='open'?!t.klaar:t.klaar));
 zicht.forEach(t=>{
  const li=document.createElement('li');if(t.klaar)li.className='done';
  const cb=document.createElement('input');cb.type='checkbox';cb.checked=t.klaar;cb.setAttribute('aria-label','Afvinken: '+t.tekst);
  cb.onchange=()=>{t.klaar=cb.checked;bewaar();render()};
  const sp=document.createElement('span');sp.textContent=t.tekst;
  const del=document.createElement('button');del.className='icon-btn';del.textContent='🗑';del.setAttribute('aria-label','Verwijderen: '+t.tekst);
  del.onclick=()=>{taken=taken.filter(x=>x.id!==t.id);bewaar();render()};
  li.append(cb,sp,del);lijst.appendChild(li)});
 if(!zicht.length){const p=document.createElement('li');p.className='empty';p.style.border='0';p.style.background='none';p.textContent=taken.length?'Geen taken in deze weergave.':'Nog geen taken. Voeg je eerste taak toe!';lijst.appendChild(p)}
 const open=taken.filter(t=>!t.klaar).length;
 document.getElementById('teller').textContent=open+(open===1?' open taak':' open taken')+' van '+taken.length;
 document.querySelectorAll('[data-f]').forEach(b=>b.classList.toggle('active',b.dataset.f===filter));
}
function voegToe(){
 const tekst=inp.value.trim();
 if(!tekst){err.textContent='Vul eerst een taak in.';inp.focus();return}
 err.textContent='';taken.push({id:Date.now(),tekst,klaar:false});inp.value='';bewaar();render();inp.focus();
}
document.getElementById('add').onclick=voegToe;
inp.addEventListener('keydown',e=>{if(e.key==='Enter')voegToe()});
document.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{filter=b.dataset.f;render()});
render();
