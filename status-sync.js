(function(){
  const urls={
    beat:'https://renardoberou.gumroad.com/l/bighart-beat-android',
    ping:'https://renardoberou.gumroad.com/l/ping-thing-android',
    synth:'https://renardoberou.gumroad.com/l/bighart-synth-standalone-android',
    spectral:null
  };
  const copy={
    en:{
      note:'Ping Thing, Bighart Synth, and Bighart Beat now have live Gumroad product pages and checkout flows. Their cards prioritize a single purchase action; GitHub remains available through the portfolio-level link. Spectral Camera is signed and prepared, with its Gumroad landing page still pending.',
      beat:'Signed app-v1.0.0 release · Gumroad page live · extended checklist pending',
      ping:'Signed Android release · Gumroad page live · public-release ready',
      synth:'Signed v1.0.0 release · Gumroad page live · distribution listing live',
      spectral:'Signed v1.8.2 release · APK/AAB + checksums live · Gumroad page pending · simulated IR only',
      gumroad:'Buy on Gumroad'
    },
    pt:{
      note:'Ping Thing, Bighart Synth e Bighart Beat agora têm páginas Gumroad ao vivo com checkout funcionando. Os cards priorizam uma única ação de compra; o GitHub continua disponível no link geral do portfólio. Spectral Camera está assinado e preparado, com a landing page do Gumroad ainda pendente.',
      beat:'Release app-v1.0.0 assinado · página Gumroad ao vivo · checklist estendido pendente',
      ping:'Release Android assinado · página Gumroad ao vivo · pronto para distribuição pública',
      synth:'Release v1.0.0 assinado · página Gumroad ao vivo · listagem de distribuição publicada',
      spectral:'Release v1.8.2 assinado · APK/AAB + checksums publicados · página Gumroad pendente · IR apenas simulado',
      gumroad:'Comprar no Gumroad'
    },
    fr:{
      note:'Ping Thing, Bighart Synth et Bighart Beat ont maintenant des pages Gumroad en ligne avec checkout fonctionnel. Leurs cartes privilégient une seule action d’achat; GitHub reste accessible via le lien général du portfolio. Spectral Camera est signé et préparé, avec sa landing page Gumroad encore en attente.',
      beat:'Release app-v1.0.0 signée · page Gumroad en ligne · checklist étendue en attente',
      ping:'Release Android signée · page Gumroad en ligne · prête pour distribution publique',
      synth:'Release v1.0.0 signée · page Gumroad en ligne · listing de distribution publié',
      spectral:'Release v1.8.2 signée · APK/AAB + checksums publiés · page Gumroad en attente · IR simulé uniquement',
      gumroad:'Acheter sur Gumroad'
    }
  };
  function ensureCommerceCss(){
    if(document.querySelector('link[data-commerce-css]'))return;
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href='commerce.css';
    link.setAttribute('data-commerce-css','true');
    document.head.appendChild(link);
  }
  function lang(){const l=document.documentElement.lang||'en';return l.startsWith('pt')?'pt':l.startsWith('fr')?'fr':'en'}
  function prepareCommercialCard(card,d,url){
    if(!card||!url)return;
    card.classList.add('commercial-card');
    let link=card.querySelector('[data-gumroad-product-link]');
    if(!link){
      link=document.createElement('a');
      link.className='mini product-buy';
      link.setAttribute('data-gumroad-product-link','true');
      link.target='_blank';
      link.rel='noopener';
      card.appendChild(link);
    }
    link.href=url;
    link.textContent=d.gumroad;
    card.querySelectorAll('.mini').forEach(function(candidate){
      if(candidate!==link) candidate.remove();
    });
  }
  function patch(){
    ensureCommerceCss();
    const d=copy[lang()];
    const note=document.querySelector('[data-i18n="releaseNote"]');
    if(note) note.textContent=d.note;
    const cards=document.querySelectorAll('#cards .card');
    if(cards[0]){
      const status=cards[0].querySelector('.status'); if(status) status.textContent=d.beat;
      prepareCommercialCard(cards[0],d,urls.beat);
    }
    if(cards[1]){
      const status=cards[1].querySelector('.status'); if(status) status.textContent=d.ping;
      prepareCommercialCard(cards[1],d,urls.ping);
    }
    if(cards[2]){
      const status=cards[2].querySelector('.status'); if(status) status.textContent=d.synth;
      prepareCommercialCard(cards[2],d,urls.synth);
    }
    if(cards[3]){
      const status=cards[3].querySelector('.status'); if(status) status.textContent=d.spectral;
      const links=cards[3].querySelectorAll('.mini');
      if(links[1]) links[1].href='https://github.com/renardoberou/spectral-camera/releases/tag/v1.8.2';
    }
  }
  document.addEventListener('DOMContentLoaded',()=>setTimeout(patch,20));
  window.addEventListener('load',patch);
  document.querySelectorAll('[data-set-lang]').forEach(btn=>btn.addEventListener('click',()=>setTimeout(patch,20)));
})();
