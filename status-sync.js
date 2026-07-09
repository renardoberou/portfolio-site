(function(){
  const gumroadUrl='https://renardoberou.gumroad.com/l/ping-thing-android';
  const copy={
    en:{note:'All four app projects now have signed Android release milestones recorded. Ping Thing also has a live Gumroad product landing page and checkout flow; remaining work is broader distribution/store polish and deeper regression testing where noted.',beat:'Signed app-v1.0.0 release · basic device smoke confirmed · extended checklist pending',ping:'Signed Android release · Gumroad page live · public-release ready',spectral:'Signed v1.8.2 release · APK/AAB + checksums live · simulated IR only',gumroad:'Buy on Gumroad'},
    pt:{note:'Os quatro projetos de app agora têm marcos de release Android assinado registrados. Ping Thing também tem uma landing page de produto Gumroad ao vivo com checkout; o restante é polimento de distribuição/loja e testes de regressão mais profundos quando indicado.',beat:'Release app-v1.0.0 assinado · smoke test básico confirmado no dispositivo · checklist estendido pendente',ping:'Release Android assinado · página Gumroad ao vivo · pronto para distribuição pública',spectral:'Release v1.8.2 assinado · APK/AAB + checksums publicados · IR apenas simulado',gumroad:'Comprar no Gumroad'},
    fr:{note:'Les quatre projets d’apps ont maintenant des jalons de release Android signée. Ping Thing dispose aussi d’une landing page Gumroad en ligne avec checkout; le travail restant concerne surtout la distribution/store et les tests de régression plus profonds lorsque signalés.',beat:'Release app-v1.0.0 signée · smoke test basique confirmé sur appareil · checklist étendue en attente',ping:'Release Android signée · page Gumroad en ligne · prête pour distribution publique',spectral:'Release v1.8.2 signée · APK/AAB + checksums publiés · IR simulé uniquement',gumroad:'Acheter sur Gumroad'}
  };
  function lang(){const l=document.documentElement.lang||'en';return l.startsWith('pt')?'pt':l.startsWith('fr')?'fr':'en'}
  function ensureGumroadLink(card,d){
    if(!card)return;
    const status=card.querySelector('.status'); if(status) status.textContent=d.ping;
    let link=card.querySelector('[data-ping-gumroad]');
    if(!link){
      link=document.createElement('a');
      link.className='mini';
      link.setAttribute('data-ping-gumroad','true');
      link.target='_blank';
      link.rel='noopener';
      card.appendChild(link);
    }
    link.href=gumroadUrl;
    link.textContent=d.gumroad;
  }
  function patch(){
    const d=copy[lang()];
    const note=document.querySelector('[data-i18n="releaseNote"]');
    if(note) note.textContent=d.note;
    const cards=document.querySelectorAll('#cards .card');
    if(cards[0]){
      const status=cards[0].querySelector('.status'); if(status) status.textContent=d.beat;
      const links=cards[0].querySelectorAll('.mini'); if(links[1]) links[1].href='https://github.com/renardoberou/Bighart-Beat/releases/tag/app-v1.0.0';
    }
    ensureGumroadLink(cards[1],d);
    if(cards[3]){
      const status=cards[3].querySelector('.status'); if(status) status.textContent=d.spectral;
      const links=cards[3].querySelectorAll('.mini'); if(links[1]) links[1].href='https://github.com/renardoberou/spectral-camera/releases/tag/v1.8.2';
    }
  }
  document.addEventListener('DOMContentLoaded',()=>setTimeout(patch,20));
  window.addEventListener('load',patch);
  document.querySelectorAll('[data-set-lang]').forEach(btn=>btn.addEventListener('click',()=>setTimeout(patch,20)));
})();
