(function(){
  // Omarchy desktop plugins: rendered into #tools, re-rendered on language switch.
  const tools=[
    {key:'tax',name:'Plugin Tax',img:'images/tools/tax.webp',repo:'https://github.com/renardoberou/omarchy-plugin-tax',market:'https://omarchyplugins.com/',version:'v0.2.0',listed:true},
    {key:'gloss',name:'Gloss',img:'images/tools/gloss.webp',repo:'https://github.com/renardoberou/omarchy-plugin-gloss',version:'v0.4.0'},
    {key:'whats',name:'What’s This',img:'images/tools/whats-this.webp',repo:'https://github.com/renardoberou/omarchy-plugin-whats-this',version:'v0.4.0'},
    {key:'type',name:'Typewriter',img:'images/tools/typewriter.webp',repo:'https://github.com/renardoberou/omarchy-plugin-typewriter',version:'v0.1.0'}
  ];
  const copy={
    en:{
      title:'Desktop Tools for Omarchy',
      intro:'Four open-source plugins for Omarchy, the Hyprland-based Linux desktop, written in QML for its Quickshell shell and published in September 2026.',
      listed:'listed on the Omarchy plugin marketplace',
      pending:'marketplace review pending',
      repo:'Source Repo',
      market:'Marketplace',
      tax:'Finds which shell plugin is costing you CPU. Every Omarchy plugin runs inside one shared process, so no system monitor can tell them apart; Plugin Tax switches each one off and on in turn and measures the difference.',
      gloss:'Highlight a word or phrase anywhere and an explanation appears beside the pointer: offline dictionary definitions for words, an optional local model for phrases. Nothing leaves the machine.',
      whats:'Rest the pointer on a window, a bar icon or the empty desktop to see what it is and the keyboard shortcuts for it, read live from your own keybindings. Coach mode offers a one-off tip when you do something the long way.',
      type:'A writing machine rather than a notepad: large typewriter type, a carriage that keeps your line at the same height, and a Backspace that strikes letters out in red instead of erasing them.'
    },
    pt:{
      title:'Ferramentas de Desktop para Omarchy',
      intro:'Quatro plugins de código aberto para o Omarchy, o desktop Linux baseado em Hyprland, escritos em QML para o shell Quickshell e publicados em setembro de 2026.',
      listed:'listado no marketplace de plugins do Omarchy',
      pending:'em análise no marketplace',
      repo:'Repositório',
      market:'Marketplace',
      tax:'Descobre qual plugin do shell está gastando CPU. Todos os plugins do Omarchy rodam em um único processo compartilhado, então nenhum monitor do sistema consegue separá-los; o Plugin Tax desliga e religa cada um e mede a diferença.',
      gloss:'Selecione uma palavra ou frase em qualquer lugar e uma explicação aparece ao lado do ponteiro: definições de dicionário offline para palavras e um modelo local opcional para frases. Nada sai da máquina.',
      whats:'Pare o ponteiro sobre uma janela, um ícone da barra ou o desktop vazio para ver o que é e os atalhos de teclado correspondentes, lidos ao vivo das suas próprias configurações. O modo Coach dá uma dica pontual quando você faz algo pelo caminho mais longo.',
      type:'Uma máquina de escrever, não um bloco de notas: letras grandes de máquina de escrever, um carro que mantém sua linha sempre na mesma altura e um Backspace que risca as letras em vermelho em vez de apagá-las.'
    },
    fr:{
      title:'Outils de Bureau pour Omarchy',
      intro:'Quatre plugins open source pour Omarchy, le bureau Linux basé sur Hyprland, écrits en QML pour son shell Quickshell et publiés en septembre 2026.',
      listed:'référencé sur la marketplace de plugins Omarchy',
      pending:'validation sur la marketplace en cours',
      repo:'Dépôt Source',
      market:'Marketplace',
      tax:'Trouve quel plugin du shell vous coûte du CPU. Tous les plugins Omarchy tournent dans un seul processus partagé, donc aucun moniteur système ne peut les distinguer; Plugin Tax les désactive et réactive un par un et mesure la différence.',
      gloss:'Surlignez un mot ou une phrase n’importe où et une explication apparaît à côté du pointeur: définitions de dictionnaire hors ligne pour les mots, modèle local optionnel pour les phrases. Rien ne quitte la machine.',
      whats:'Posez le pointeur sur une fenêtre, une icône de la barre ou le bureau vide pour voir ce que c’est et les raccourcis clavier associés, lus en direct depuis vos propres réglages. Le mode Coach propose une astuce ponctuelle quand vous prenez le chemin le plus long.',
      type:'Une machine à écrire plutôt qu’un bloc-notes: de grands caractères dactylographiés, un chariot qui garde votre ligne à la même hauteur et une touche Retour arrière qui barre les lettres en rouge au lieu de les effacer.'
    }
  };
  function lang(){const l=document.documentElement.lang||'en';return l.startsWith('pt')?'pt':l.startsWith('fr')?'fr':'en'}
  function render(){
    const grid=document.getElementById('tools');
    if(!grid)return;
    const d=copy[lang()];
    const title=document.querySelector('[data-tools-title]');
    const intro=document.querySelector('[data-tools-intro]');
    if(title) title.textContent=d.title;
    if(intro) intro.textContent=d.intro;
    grid.innerHTML=tools.map(x=>`<article class="tool-card"><div class="shot"><img src="${x.img}" alt="${x.name} screenshot" loading="lazy"></div><h3>${x.name}</h3><p>${d[x.key]}</p><div class="status">${x.version} · ${x.listed?d.listed:d.pending}</div><div class="tags">QML · Quickshell · Hyprland · Bash</div><div class="tool-links"><a class="mini" href="${x.repo}" target="_blank" rel="noopener">${d.repo}</a>${x.market?`<a class="mini" href="${x.market}" target="_blank" rel="noopener">${d.market}</a>`:''}</div></article>`).join('');
  }
  render();
  document.querySelectorAll('[data-set-lang]').forEach(btn=>btn.addEventListener('click',()=>setTimeout(render,0)));
})();
