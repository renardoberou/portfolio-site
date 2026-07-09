(function(){
  function applySpectralHero(){
    const hero=document.querySelector('.hero');
    const oldVisual=document.querySelector('.hero .portrait');
    const spectral=document.querySelector('#cards .card:nth-child(4) .mark');
    if(!hero||!spectral)return;
    const image=getComputedStyle(spectral).backgroundImage;
    if(!image||image==='none')return;
    hero.style.backgroundImage=`linear-gradient(90deg,rgba(8,6,4,.48),rgba(8,6,4,.28) 42%,rgba(8,6,4,.70)),linear-gradient(180deg,rgba(8,6,4,.18),rgba(8,6,4,.78)),radial-gradient(circle at 70% 24%,rgba(210,20,18,.16),transparent 44%),${image}`;
    hero.style.backgroundPosition='center center';
    hero.style.backgroundSize='cover';
    hero.style.backgroundRepeat='no-repeat';
    if(oldVisual) oldVisual.style.display='none';
  }
  document.addEventListener('DOMContentLoaded',()=>setTimeout(applySpectralHero,0));
  window.addEventListener('load',applySpectralHero);
})();
