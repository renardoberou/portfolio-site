(function(){
  function applySpectralHero(){
    const hero=document.querySelector('.hero .portrait');
    const spectral=document.querySelector('#cards .card:nth-child(4) .mark');
    if(!hero||!spectral)return;
    const image=getComputedStyle(spectral).backgroundImage;
    if(!image||image==='none')return;
    hero.style.backgroundImage=`linear-gradient(90deg,rgba(8,6,4,.06),rgba(8,6,4,.24)),radial-gradient(circle at 72% 26%,rgba(210,20,18,.18),transparent 46%),${image}`;
    hero.style.backgroundPosition='center center';
    hero.style.backgroundSize='cover';
  }
  document.addEventListener('DOMContentLoaded',()=>setTimeout(applySpectralHero,0));
  window.addEventListener('load',applySpectralHero);
})();
