// ===== DATA: EXERCICES =====
const EXERCICES = [
  { id:'squat', name:'Squat', diff:'Facile', muscles:'Cuisses, Fessiers, Core', type:'Force',
    desc:'Debout, pieds largeur épaules. Fléchis les genoux en descendant les fesses comme pour t\'asseoir. Garde le dos droit et les talons au sol.',
    conseils:['Garde le dos droit','Regarde devant toi','Talons collés au sol','Ne laisse pas les genoux dépasser les orteils'],
    video:'https://www.youtube.com/watch?v=gsNoPY78e9E',
    keyframes:[
      { head:[140,35],neck:[140,50],shoulder:[140,65],chest:[140,90],hip:[140,120],
        lElbow:[110,80],lHand:[90,100],rElbow:[170,80],rHand:[190,100],
        lKnee:[120,175],lFoot:[105,250],rKnee:[160,175],rFoot:[175,250] },
      { head:[140,70],neck:[140,85],shoulder:[140,100],chest:[140,120],hip:[140,155],
        lElbow:[115,95],lHand:[100,110],rElbow:[165,95],rHand:[180,110],
        lKnee:[110,195],lFoot:[105,250],rKnee:[170,195],rFoot:[175,250] }
    ] },
  { id:'pompe', name:'Pompe', diff:'Moyen', muscles:'Pectoraux, Triceps, Épaules, Core', type:'Force',
    desc:'En position planche, mains légèrement plus larges que les épaules. Abaisse ton corps jusqu\'à ce que la poitrine frôle le sol, puis pousse pour remonter.',
    conseils:['Corps bien droit, ne casse pas les hanches','Regarde le sol entre tes mains','Serre les abdos','Respire : inspire en descendant, expire en montant'],
    video:'https://www.youtube.com/watch?v=IODxDxX6Y8I',
    keyframes:[
      { head:[60,70],neck:[80,70],shoulder:[105,70],chest:[130,80],hip:[175,85],
        lElbow:[90,90],lHand:[105,115],rElbow:[120,90],rHand:[105,115],
        lKnee:[210,100],lFoot:[240,105],rKnee:[210,100],rFoot:[240,105] },
      { head:[60,85],neck:[80,88],shoulder:[105,92],chest:[130,100],hip:[175,100],
        lElbow:[105,105],lHand:[105,115],rElbow:[105,105],rHand:[105,115],
        lKnee:[215,110],lFoot:[240,105],rKnee:[215,110],rFoot:[240,105] }
    ] },
  { id:'pompe-murale', name:'Pompe Murale', diff:'Facile', muscles:'Pectoraux, Triceps, Épaules', type:'Force',
    desc:'Face à un mur, mains posées à hauteur des épaules. Fléchis les bras en t\'approchant du mur, puis pousse pour revenir.',
    conseils:['Garde le dos droit','Plus tu t\'éloignes du mur, plus c\'est dur','Respire régulièrement'],
    video:'https://www.youtube.com/watch?v=6zVjBYT8r6s',
    keyframes:[
      { head:[140,45],neck:[140,60],shoulder:[140,75],chest:[140,95],hip:[140,130],
        lElbow:[110,90],lHand:[85,105],rElbow:[170,90],rHand:[195,105],
        lKnee:[125,190],lFoot:[110,255],rKnee:[155,190],rFoot:[170,255] },
      { head:[140,52],neck:[140,67],shoulder:[140,82],chest:[140,102],hip:[140,134],
        lElbow:[120,92],lHand:[85,105],rElbow:[160,92],rHand:[195,105],
        lKnee:[125,190],lFoot:[110,255],rKnee:[155,190],rFoot:[170,255] }
    ] },
  { id:'pompe-genoux', name:'Pompe sur Genoux', diff:'Facile', muscles:'Pectoraux, Triceps, Épaules', type:'Force',
    desc:'À genoux, mains au sol largeur épaules. Abaisse le buste jusqu\'au sol, puis pousse pour remonter. Moins dur que la pompe classique.',
    conseils:['Genoux écartés ou serrés au choix','Garde le dos droit','Contrôle la descente'],
    video:'https://www.youtube.com/watch?v=JvLPP3vCj0A',
    keyframes:[
      { head:[70,55],neck:[90,58],shoulder:[110,65],chest:[130,70],hip:[165,75],
        lElbow:[95,85],lHand:[110,105],rElbow:[125,85],rHand:[110,105],
        lKnee:[195,80],lFoot:[220,80],rKnee:[195,80],rFoot:[220,80] },
      { head:[70,75],neck:[90,78],shoulder:[110,82],chest:[130,88],hip:[165,88],
        lElbow:[110,98],lHand:[110,105],rElbow:[110,98],rHand:[110,105],
        lKnee:[198,88],lFoot:[220,80],rKnee:[198,88],rFoot:[220,80] }
    ] },
  { id:'planche', name:'Planche (Gainage)', diff:'Moyen', muscles:'Core, Épaules, Dos', type:'Gainage',
    desc:'Sur les avant-bras et les orteils, corps bien droit. Maintiens la position en contractant les abdos et les fessiers.',
    conseils:['Ne laisse pas les hanches tomber','Regarde le sol entre tes mains','Respire calmement','Mieux vaut 30s bien fait que 1min mal fait'],
    video:'https://www.youtube.com/watch?v=ASdvN0TEn6E',
    keyframes:[
      { head:[50,95],neck:[70,98],shoulder:[95,100],chest:[115,100],hip:[155,100],
        lElbow:[95,115],lHand:[95,135],rElbow:[95,115],rHand:[95,135],
        lKnee:[195,100],lFoot:[230,100],rKnee:[195,100],rFoot:[230,100] }
    ] },
  { id:'planche-laterale', name:'Planche Latérale', diff:'Moyen', muscles:'Obliques, Épaules, Hanches', type:'Gainage',
    desc:'Allongé sur le côté, avant-bras au sol. Soulève les hanches pour former une ligne droite de la tête aux pieds.',
    conseils:['Hanches bien alignées','Garde le cou dans le prolongement de la colonne','Contracte les obliques'],
    video:'https://www.youtube.com/watch?v=K2VljzCCMqY',
    keyframes:[
      { head:[80,45],neck:[100,58],shoulder:[120,70],chest:[140,82],hip:[170,100],
        lElbow:[100,85],lHand:[120,100],rElbow:[140,70],rHand:[120,100],
        lKnee:[200,120],lFoot:[230,135],rKnee:[200,120],rFoot:[230,135] }
    ] },
  { id:'fente', name:'Fente Avant', diff:'Facile', muscles:'Cuisses, Fessiers, Core', type:'Force',
    desc:'Debout, grand pas en avant. Fléchis les deux genoux à 90°, genou arrière proche du sol. Pousse sur le pied avant pour revenir.',
    conseils:['Genou avant ne dépasse pas l\'orteil','Buste droit','Écart suffisant entre les pieds'],
    video:'https://www.youtube.com/watch?v=WR7lQJqHfb0',
    keyframes:[
      { head:[140,40],neck:[140,55],shoulder:[140,70],chest:[140,90],hip:[140,125],
        lElbow:[110,85],lHand:[90,105],rElbow:[170,85],rHand:[190,105],
        lKnee:[120,180],lFoot:[105,255],rKnee:[160,180],rFoot:[175,255] },
      { head:[150,60],neck:[150,75],shoulder:[150,90],chest:[148,105],hip:[145,135],
        lElbow:[125,100],lHand:[110,115],rElbow:[150,100],rHand:[165,115],
        lKnee:[170,190],lFoot:[150,245],rKnee:[130,185],rFoot:[115,255] }
    ] },
  { id:'mountain-climber', name:'Mountain Climber', diff:'Moyen', muscles:'Cardio, Core, Épaules, Hanches', type:'Cardio',
    desc:'En position pompe, amène alternativement les genoux vers la poitrine à rythme soutenu.',
    conseils:['Garde le dos plat','Active les abdos','Rythme régulier'],
    video:'https://www.youtube.com/watch?v=nmwgirgXLYM',
    keyframes:[
      { head:[65,75],neck:[80,78],shoulder:[105,82],chest:[125,85],hip:[165,88],
        lElbow:[90,95],lHand:[105,115],rElbow:[120,95],rHand:[105,115],
        lKnee:[205,95],lFoot:[235,100],rKnee:[205,95],rFoot:[235,100] },
      { head:[65,75],neck:[80,78],shoulder:[105,82],chest:[125,85],hip:[165,88],
        lElbow:[90,95],lHand:[105,115],rElbow:[120,95],rHand:[105,115],
        lKnee:[165,95],lFoot:[235,100],rKnee:[205,100],rFoot:[235,100] }
    ] },
  { id:'crunch', name:'Crunch', diff:'Facile', muscles:'Grand droit (abdos), Core', type:'Gainage',
    desc:'Allongé sur le dos, genoux pliés pieds au sol. Enroule le buste en décollant les épaules du sol, contracte les abdos, redescend.',
    conseils:['Ne tire pas sur la nuque','Mains derrière les oreilles, pas derrière la tête','Expire en montant'],
    video:'https://www.youtube.com/watch?v=Xyd_fa5zoEU',
    keyframes:[
      { head:[140,40],neck:[140,55],shoulder:[140,70],chest:[130,95],hip:[120,140],
        lElbow:[110,85],lHand:[90,100],rElbow:[170,85],rHand:[190,100],
        lKnee:[100,200],lFoot:[90,250],rKnee:[160,200],rFoot:[170,250] },
      { head:[140,30],neck:[140,45],shoulder:[140,58],chest:[132,80],hip:[125,130],
        lElbow:[115,72],lHand:[100,85],rElbow:[165,72],rHand:[180,85],
        lKnee:[105,195],lFoot:[90,250],rKnee:[155,195],rFoot:[170,250] }
    ] },
  { id:'releve-jambes', name:'Relevé de Jambes', diff:'Moyen', muscles:'Grand droit, Psoas, Core', type:'Gainage',
    desc:'Allongé sur le dos, jambes tendues. Soulève les jambes à 90°, puis redescends lentement sans poser les pieds.',
    conseils:['Mains sous les fesses pour protéger le dos','Ne pose pas les pieds entre chaque répétition','Descends lentement'],
    video:'https://www.youtube.com/watch?v=JB2oyOhGpXw',
    keyframes:[
      { head:[140,40],neck:[140,52],shoulder:[140,65],chest:[132,85],hip:[125,115],
        lElbow:[115,78],lHand:[105,90],rElbow:[165,78],rHand:[175,90],
        lKnee:[110,160],lFoot:[100,210],rKnee:[150,160],rFoot:[160,210] },
      { head:[140,40],neck:[140,50],shoulder:[140,62],chest:[132,80],hip:[125,112],
        lElbow:[115,75],lHand:[105,88],rElbow:[165,75],rHand:[175,88],
        lKnee:[125,120],lFoot:[120,140],rKnee:[155,120],rFoot:[160,140] }
    ] },
  { id:'burpee', name:'Burpee', diff:'Difficile', muscles:'Cardio, Corps complet, Core', type:'Cardio',
    desc:'Debout, accroupis-toi mains au sol, saute les pieds en arrière (planche), reviens en squat, saute vers le haut. Enchaîne.',
    conseils:['Garde le dos droit dans le squat','Respire : expire en sautant','Commence sans le saut si besoin'],
    video:'https://www.youtube.com/watch?v=qLBImHhCXlA',
    keyframes:[
      { head:[140,40],neck:[140,55],shoulder:[140,70],chest:[140,90],hip:[140,120],
        lElbow:[110,85],lHand:[90,105],rElbow:[170,85],rHand:[190,105],
        lKnee:[120,175],lFoot:[105,250],rKnee:[160,175],rFoot:[175,250] },
      { head:[140,85],neck:[140,95],shoulder:[140,108],chest:[138,120],hip:[135,146],
        lElbow:[120,100],lHand:[100,105],rElbow:[160,100],rHand:[180,105],
        lKnee:[118,185],lFoot:[105,250],rKnee:[162,185],rFoot:[175,250] },
      { head:[65,75],neck:[80,78],shoulder:[105,82],chest:[125,85],hip:[165,88],
        lElbow:[90,95],lHand:[105,115],rElbow:[120,95],rHand:[105,115],
        lKnee:[205,95],lFoot:[235,100],rKnee:[205,95],rFoot:[235,100] },
      { head:[140,85],neck:[140,95],shoulder:[140,108],chest:[138,120],hip:[135,146],
        lElbow:[120,100],lHand:[100,105],rElbow:[160,100],rHand:[180,105],
        lKnee:[118,185],lFoot:[105,250],rKnee:[162,185],rFoot:[175,250] },
      { head:[140,30],neck:[140,45],shoulder:[140,58],chest:[140,78],hip:[140,108],
        lElbow:[115,72],lHand:[100,88],rElbow:[165,72],rHand:[180,88],
        lKnee:[120,165],lFoot:[105,245],rKnee:[160,165],rFoot:[175,245] }
    ] },
  { id:'jump-squat', name:'Jump Squat', diff:'Difficile', muscles:'Cuisses, Fessiers, Cardio', type:'Cardio',
    desc:'Squat classique mais en poussant fort pour décoller les pieds du sol en fin de mouvement. Réception en souplesse.',
    conseils:['Réception genoux fléchis','Terre ferme ? Fais le sur place','Garde le buste droit'],
    video:'https://www.youtube.com/watch?v=cgkIhVj_PfU',
    keyframes:[
      { head:[140,70],neck:[140,85],shoulder:[140,100],chest:[140,120],hip:[140,155],
        lElbow:[115,95],lHand:[100,110],rElbow:[165,95],rHand:[180,110],
        lKnee:[110,195],lFoot:[105,250],rKnee:[170,195],rFoot:[175,250] },
      { head:[140,20],neck:[140,30],shoulder:[140,42],chest:[140,60],hip:[140,90],
        lElbow:[115,55],lHand:[105,70],rElbow:[165,55],rHand:[175,70],
        lKnee:[115,150],lFoot:[105,230],rKnee:[165,150],rFoot:[175,230] }
    ] },
  { id:'genoux-hauts', name:'Montée de Genoux', diff:'Facile', muscles:'Cardio, Hanches, Jambes', type:'Cardio',
    desc:'Course sur place en montant les genoux le plus haut possible, à rythme soutenu.',
    conseils:['Monte les genoux à la hauteur des hanches','Garde le buste droit','Bras qui accompagnent le mouvement'],
    video:'https://www.youtube.com/watch?v=Wp4BlxcFTkE',
    keyframes:[
      { head:[140,40],neck:[140,55],shoulder:[140,70],chest:[140,90],hip:[140,125],
        lElbow:[110,82],lHand:[90,100],rElbow:[170,82],rHand:[190,100],
        lKnee:[120,175],lFoot:[105,255],rKnee:[125,165],rFoot:[150,255] },
      { head:[140,40],neck:[140,55],shoulder:[140,70],chest:[140,90],hip:[140,125],
        lElbow:[110,82],lHand:[90,100],rElbow:[170,82],rHand:[190,100],
        lKnee:[125,165],lFoot:[150,255],rKnee:[120,175],rFoot:[105,255] }
    ] },
  { id:'russian-twist', name:'Russian Twist', diff:'Moyen', muscles:'Obliques, Core, Hanches', type:'Gainage',
    desc:'Assis, jambes pliées décollées du sol, buste incliné en arrière. Tourne le buste de gauche à droite en touchant le sol de chaque côté.',
    conseils:['Garde les abdos contractés','Décolle les pieds du sol','Respiration régulière'],
    video:'https://www.youtube.com/watch?v=wkD8i-3R30w',
    keyframes:[
      { head:[120,55],neck:[130,65],shoulder:[140,75],chest:[140,95],hip:[140,120],
        lElbow:[100,90],lHand:[80,110],rElbow:[140,95],rHand:[150,110],
        lKnee:[120,140],lFoot:[110,165],rKnee:[160,140],rFoot:[170,165] },
      { head:[160,55],neck:[150,65],shoulder:[140,75],chest:[140,95],hip:[140,120],
        lElbow:[140,95],lHand:[130,110],rElbow:[180,90],rHand:[200,110],
        lKnee:[120,140],lFoot:[110,165],rKnee:[160,140],rFoot:[170,165] }
    ] },
  { id:'bicycle-crunch', name:'Bicycle Crunch', diff:'Moyen', muscles:'Obliques, Grand droit, Core', type:'Gainage',
    desc:'Allongé sur le dos, mains derrière la tête. Ramène coude droit vers genou gauche en tendant l\'autre jambe, alterne.',
    conseils:['Ne tire pas sur la nuque','Mouvement lent et contrôlé','Expire en tournant'],
    video:'https://www.youtube.com/watch?v=9FGilxCbdzU',
    keyframes:[
      { head:[140,40],neck:[140,52],shoulder:[140,65],chest:[132,85],hip:[125,115],
        lElbow:[115,60],lHand:[105,70],rElbow:[165,78],rHand:[175,92],
        lKnee:[110,155],lFoot:[100,205],rKnee:[135,130],rFoot:[155,200] },
      { head:[140,40],neck:[140,52],shoulder:[140,65],chest:[132,85],hip:[125,115],
        lElbow:[115,78],lHand:[105,92],rElbow:[165,60],rHand:[175,70],
        lKnee:[145,130],lFoot:[125,200],rKnee:[110,155],rFoot:[100,205] }
    ] }
];

// ===== DATA: MÉTA EXERCICES (icônes, cadence, minuteur) =====
const EXO_META = {
  'squat':            { icon:'🏋️', cadence:'2s descente • 1s pause en bas • 1s remontée', timer:{ type:'interval', work:30, rest:20, rounds:4, label:'4 séries de 30s' } },
  'pompe':            { icon:'💪', cadence:'2s descente • 1s pause en bas • 1s poussée', timer:{ type:'interval', work:25, rest:30, rounds:4, label:'4 séries de 25s' } },
  'pompe-murale':      { icon:'🧱', cadence:'2s descente • 1s pause • 1s poussée', timer:{ type:'interval', work:30, rest:20, rounds:4, label:'4 séries de 30s' } },
  'pompe-genoux':      { icon:'🙇', cadence:'2s descente • 1s pause • 1s poussée', timer:{ type:'interval', work:25, rest:25, rounds:4, label:'4 séries de 25s' } },
  'planche':          { icon:'🧘', cadence:'Position tenue, respiration lente et régulière', timer:{ type:'countdown', seconds:30, label:'Tenir 30s' } },
  'planche-laterale':  { icon:'🤸', cadence:'Position tenue, hanches hautes, respiration régulière', timer:{ type:'countdown', seconds:25, label:'Tenir 25s de chaque côté' } },
  'fente':            { icon:'🦵', cadence:'2s descente • 1s pause • 1s remontée, alterne les jambes', timer:{ type:'interval', work:30, rest:20, rounds:4, label:'4 séries de 30s' } },
  'mountain-climber':  { icon:'⛰️', cadence:'Rythme rapide et continu, genoux vers la poitrine', timer:{ type:'interval', work:20, rest:20, rounds:6, label:'6 tours de 20s' } },
  'crunch':           { icon:'🔥', cadence:'1s montée • 1s pause contractée • 2s descente', timer:{ type:'interval', work:30, rest:20, rounds:3, label:'3 séries de 30s' } },
  'releve-jambes':     { icon:'🦿', cadence:'2s montée • 1s pause • 3s descente lente', timer:{ type:'interval', work:25, rest:25, rounds:3, label:'3 séries de 25s' } },
  'burpee':           { icon:'⚡', cadence:'Enchaînement rapide, respire à fond entre les répétitions', timer:{ type:'interval', work:20, rest:30, rounds:5, label:'5 tours de 20s' } },
  'jump-squat':        { icon:'🚀', cadence:'Descente contrôlée, saut explosif, réception souple', timer:{ type:'interval', work:20, rest:25, rounds:5, label:'5 tours de 20s' } },
  'genoux-hauts':      { icon:'🏃', cadence:'Rythme soutenu, genoux à hauteur des hanches', timer:{ type:'interval', work:30, rest:15, rounds:6, label:'6 tours de 30s' } },
  'russian-twist':     { icon:'🌀', cadence:'Rotation lente et contrôlée, expire à chaque tour', timer:{ type:'interval', work:30, rest:20, rounds:3, label:'3 séries de 30s' } },
  'bicycle-crunch':    { icon:'🚴', cadence:'Mouvement lent et contrôlé, coude vers le genou opposé', timer:{ type:'interval', work:30, rest:20, rounds:3, label:'3 séries de 30s' } },
};
function getExoMeta(id) {
  return EXO_META[id] || { icon:'💪', cadence:'Mouvement contrôlé, respiration régulière', timer:{ type:'countdown', seconds:30, label:'Tenir 30s' } };
}
const FOOD_CATEGORIES = ['Protéines', 'Glucides', 'Légumes & Fruits', 'Bonnes graisses'];

const FOODS_GOOD = {
  'Protéines': [
    { emoji:'🐟', name:'Poisson grillé/braisé' },
    { emoji:'🍗', name:'Poulet sans peau' },
    { emoji:'🥚', name:'Œufs' },
    { emoji:'🫘', name:'Haricot (niébé)' },
    { emoji:'🌱', name:'Soja / Tofu' },
    { emoji:'🦐', name:'Crevettes' },
  ],
  'Glucides': [
    { emoji:'🍠', name:'Igname bouillie' },
    { emoji:'🍌', name:'Plantain bouilli' },
    { emoji:'🍚', name:'Riz (portion modérée)' },
    { emoji:'🌽', name:'Pâte de maïs' },
    { emoji:'🥔', name:'Patate douce' },
    { emoji:'🌾', name:'Mil / Sorgho' },
  ],
  'Légumes & Fruits': [
    { emoji:'🥬', name:'Gombo' },
    { emoji:'🍃', name:'Feuilles (crin-crin, épinard)' },
    { emoji:'🍅', name:'Tomate' },
    { emoji:'🥕', name:'Carotte' },
    { emoji:'🍊', name:'Orange / Agrumes' },
    { emoji:'🥭', name:'Mangue (avec modération)' },
  ],
  'Bonnes graisses': [
    { emoji:'🥑', name:'Avocat' },
    { emoji:'🥜', name:'Arachide (petite quantité)' },
    { emoji:'🫒', name:'Huile d\'olive' },
    { emoji:'🥥', name:'Noix de coco (modéré)' },
  ]
};

const FOODS_AVOID = [
  { emoji:'🍟', name:'Fritures (huile de palme en excès)' },
  { emoji:'🥤', name:'Boissons sucrées / sodas' },
  { emoji:'🍺', name:'Bière / alcool' },
  { emoji:'🍬', name:'Sucre ajouté / bonbons' },
  { emoji:'🍞', name:'Pain blanc en excès' },
  { emoji:'🧈', name:'Excès d\'huile / beurre' },
  { emoji:'🍪', name:'Biscuits industriels' },
  { emoji:'🌙', name:'Manger tard le soir' },
];

let activeFoodTab = 'Protéines';

function renderNutrition() {
  // Food tabs
  const tabsEl = document.getElementById('foodGoodTabs');
  if (tabsEl.children.length === 0) {
    tabsEl.innerHTML = FOOD_CATEGORIES.map(cat =>
      `<button class="food-tab${cat === activeFoodTab ? ' active' : ''}" onclick="switchFoodTab('${cat}')">${cat}</button>`
    ).join('');
  }

  const goodGrid = document.getElementById('foodGoodGrid');
  goodGrid.innerHTML = FOODS_GOOD[activeFoodTab].map(f =>
    `<div class="food-card"><span class="food-emoji">${f.emoji}</span><span class="food-name">${f.name}</span></div>`
  ).join('');

  const badGrid = document.getElementById('foodBadGrid');
  if (badGrid.children.length === 0) {
    badGrid.innerHTML = FOODS_AVOID.map(f =>
      `<div class="food-card"><span class="food-emoji">${f.emoji}</span><span class="food-name">${f.name}</span></div>`
    ).join('');
  }

  // Restore saved profile into calc form if exists
  if (state.nutritionProfile) {
    const p = state.nutritionProfile;
    if (p.sexe) document.getElementById('calcSexe').value = p.sexe;
    if (p.age) document.getElementById('calcAge').value = p.age;
    if (p.poids) document.getElementById('calcPoids').value = p.poids;
    if (p.taille) document.getElementById('calcTaille').value = p.taille;
    if (p.activite) document.getElementById('calcActivite').value = p.activite;
    if (p.objectif) document.getElementById('calcObjectif').value = p.objectif;
    if (p.lastResult) showCalorieResult(p.lastResult);
  }
}

function switchFoodTab(cat) {
  activeFoodTab = cat;
  document.querySelectorAll('.food-tab').forEach(t => t.classList.toggle('active', t.textContent === cat));
  document.getElementById('foodGoodGrid').innerHTML = FOODS_GOOD[cat].map(f =>
    `<div class="food-card"><span class="food-emoji">${f.emoji}</span><span class="food-name">${f.name}</span></div>`
  ).join('');
}

function calculateCalories() {
  const sexe = document.getElementById('calcSexe').value;
  const age = parseFloat(document.getElementById('calcAge').value);
  const poids = parseFloat(document.getElementById('calcPoids').value);
  const taille = parseFloat(document.getElementById('calcTaille').value);
  const activite = parseFloat(document.getElementById('calcActivite').value);
  const objectif = document.getElementById('calcObjectif').value;

  if (!age || !poids || !taille) {
    alert('Remplis ton âge, poids et taille pour calculer.');
    return;
  }

  // Mifflin-St Jeor
  let bmr = 10 * poids + 6.25 * taille - 5 * age + (sexe === 'h' ? 5 : -161);
  let tdee = bmr * activite;

  let target, subLabel;
  if (objectif === 'perte_rapide') { target = tdee - 900; subLabel = 'Déficit rapide (~0.8-1kg/semaine)'; }
  else if (objectif === 'perte') { target = tdee - 500; subLabel = 'Déficit modéré (~0.5kg/semaine)'; }
  else if (objectif === 'maintien') { target = tdee; subLabel = 'Maintien du poids actuel'; }
  else { target = tdee + 300; subLabel = 'Léger surplus pour prise musculaire'; }

  target = Math.max(1200, Math.round(target));

  const result = { bmr: Math.round(bmr), tdee: Math.round(tdee), target, subLabel, poids };
  state.nutritionProfile = { sexe, age, poids, taille, activite, objectif, lastResult: result };
  saveState();
  showCalorieResult(result);
}

function showCalorieResult(result) {
  document.getElementById('calcResult').style.display = 'block';
  document.getElementById('resultBMR').textContent = result.bmr + ' kcal';
  document.getElementById('resultTDEE').textContent = result.tdee + ' kcal';
  document.getElementById('resultTarget').textContent = result.target + ' kcal/jour';
  document.getElementById('resultSub').textContent = result.subLabel;

  // Macros: protein 2g/kg, fat 25% of calories, rest carbs
  const proteinG = Math.round(result.poids * 2);
  const proteinKcal = proteinG * 4;
  const fatKcal = result.target * 0.25;
  const fatG = Math.round(fatKcal / 9);
  const carbKcal = Math.max(0, result.target - proteinKcal - fatKcal);
  const carbG = Math.round(carbKcal / 4);

  document.getElementById('resultMacros').innerHTML = `
    <div class="calc-macro-item"><span class="calc-macro-value" style="color:#4fc3f7">${proteinG}g</span><span class="calc-macro-label">Protéines</span></div>
    <div class="calc-macro-item"><span class="calc-macro-value" style="color:#ffd740">${carbG}g</span><span class="calc-macro-label">Glucides</span></div>
    <div class="calc-macro-item"><span class="calc-macro-value" style="color:#ff8a65">${fatG}g</span><span class="calc-macro-label">Lipides</span></div>
  `;
}

// ===== WORKOUT PLAN =====
const PLAN = [];
const days = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
const weekTypes = [
  [{type:'Cardio+Renfo',dur:'60min',exos:['Course lente 30min','Squat sur chaise 4x15','Pompe Murale 4x15','Planche 4x30s','Fente 3x12/j']},
   {type:'Cardio+Core',dur:'50min',exos:['Marche rapide 30min','Crunch 3x20','Relevé Jambes 3x15','Planche Latérale 3x25s','Gainage 3x35s']},
   null,
   {type:'Cardio+Renfo',dur:'60min',exos:['Course lente 30min','Squat 4x15','Pompe Murale 4x15','Planche 4x30s','Mountain Climber 3x15']},
   {type:'Cardio+Core',dur:'50min',exos:['Marche rapide 30min','Crunch 3x20','Bicycle Crunch 3x15','Planche 3x40s','Gainage latéral 3x25s']},
   {type:'Cardio léger',dur:'35min',exos:['Marche 35min']},
   null],
  [{type:'Cardio+Renfo',dur:'60min',exos:['Course 30min','Squat sauté 4x12','Pompe Genoux 4x15','Planche 4x35s','Fente 3x14/j']},
   {type:'Cardio+Core',dur:'50min',exos:['Course 30min','Crunch 3x25','Relevé Jambes 3x18','Planche Latérale 3x30s','Russian Twist 3x20']},
   {type:'Cardio+Renfo',dur:'60min',exos:['Vélo/course 30min','Squat 4x18','Pompe 4x12','Planche 4x40s','Mountain Climber 3x18']},
   null,
   {type:'Circuit Full',dur:'55min',exos:['Squat sauté 3x15','Pompe 3x15','Planche 3x45s','Fente 3x14/j','Burpee 3x8']},
   {type:'Cardio Intense',dur:'40min',exos:['Fractionné 30min (2min rapide/1min récup)','Gainage 3x45s']},
   null],
  [{type:'Fractionné+Force',dur:'65min',exos:['Fractionné 25min (3min/1min)','Squat sauté 4x15','Pompe 4x18','Planche 4x50s','Fente sautée 3x12/j']},
   {type:'Cardio+Core',dur:'55min',exos:['Course 35min','Crunch 3x30','Relevé Jambes 3x20','Bicycle Crunch 3x20','Planche 3x50s']},
   {type:'Circuit Haute Intensité',dur:'55min',exos:['Squat sauté 4x15','Pompe larges 4x15','Mountain Climber 3x25','Burpee 3x10','Gainage 4x45s']},
   null,
   {type:'Cardio+Full Body',dur:'65min',exos:['Course 35min','Squat 4x20','Pompe 4x18','Fente 4x14/j','Planche Latérale 3x35s']},
   {type:'Cardio',dur:'45min',exos:['Course 45min ou Vélo']},
   {type:'Récupération',dur:'20min',exos:['Marche 20min + Étirements']}],
  [{type:'HIIT+Force',dur:'60min',exos:['HIIT 20min (30s/30s)','Squat sauté 4x18','Pompe diamant 4x12','Planche 4x55s','Fente sautée 3x15/j']},
   {type:'Cardio+Core',dur:'55min',exos:['Course 35min','Crunch 3x35','Relevé Jambes 3x22','Russian Twist 3x25','Planche 3x55s']},
   null,
   {type:'Circuit Intense',dur:'60min',exos:['Burpee 3x12','Squat sauté 4x18','Pompe 4x18','Mountain Climber 3x30','Gainage 4x50s']},
   {type:'Endurance',dur:'70min',exos:['Course 40min','Squat 4x22','Fente 4x16/j','Planche Latérale 3x40s','Jump Squat 3x12']},
   {type:'Cardio+Abdos',dur:'50min',exos:['Fractionné 30min','Crunch 3x35','Bicycle Crunch 3x25','Relevé Jambes 3x22','Planche 3x60s']},
   {type:'Récupération active',dur:'25min',exos:['Marche 25min + Étirements']}]
];

for (let w = 0; w < 8; w++) {
  const week = [];
  for (let d = 0; d < 7; d++) {
    const wt = weekTypes[w % weekTypes.length];
    const day = wt[d];
    if (day) {
      week.push({ day: days[d], ...day });
    } else {
      week.push({ day: days[d], type:'Repos', dur:'-', exos:[] });
    }
  }
  PLAN.push(week);
}

// ===== ANIMATION ENGINE =====
let animFrameId = null;
let currentAnimExo = null;

function lerp(a, b, t) { return a + (b - a) * t; }

function lerpPose(p1, p2, t) {
  if (!p2) return p1;
  const r = {};
  for (let k in p1) r[k] = [lerp(p1[k][0],p2[k][0],t), lerp(p1[k][1],p2[k][1],t)];
  return r;
}

function drawFigure(ctx, pose, color = '#00e676') {
  const w = ctx.canvas.width, h = ctx.canvas.height;
  ctx.clearRect(0, 0, w, h);

  // Ground line
  ctx.strokeStyle = 'rgba(255,255,255,.06)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(10, h-15);
  ctx.lineTo(w-10, h-15);
  ctx.stroke();

  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const p = pose;
  if (!p) return;

  // Draw body parts
  const drawSeg = (a, b) => {
    if (!p[a] || !p[b]) return;
    ctx.beginPath();
    ctx.moveTo(p[a][0], p[a][1]);
    ctx.lineTo(p[b][0], p[b][1]);
    ctx.stroke();
  };

  drawSeg('head','neck');
  drawSeg('neck','shoulder');
  drawSeg('shoulder','chest');
  drawSeg('chest','hip');
  drawSeg('shoulder','lElbow');
  drawSeg('lElbow','lHand');
  drawSeg('shoulder','rElbow');
  drawSeg('rElbow','rHand');
  drawSeg('hip','lKnee');
  drawSeg('lKnee','lFoot');
  drawSeg('hip','rKnee');
  drawSeg('rKnee','rFoot');

  // Head
  if (p.head) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(p.head[0], p.head[1]-8, 12, 0, Math.PI*2);
    ctx.fill();
  }

  // Hands
  ctx.fillStyle = color;
  if (p.lHand) { ctx.beginPath(); ctx.arc(p.lHand[0], p.lHand[1], 3, 0, Math.PI*2); ctx.fill(); }
  if (p.rHand) { ctx.beginPath(); ctx.arc(p.rHand[0], p.rHand[1], 3, 0, Math.PI*2); ctx.fill(); }

  // Exercise name overlay
  ctx.fillStyle = 'rgba(255,255,255,.15)';
  ctx.font = '11px sans-serif';
  ctx.textAlign = 'center';
  if (currentAnimExo) ctx.fillText(currentAnimExo, w/2, h-6);
}

function animateExercise(exoId, canvasId) {
  const exo = EXERCICES.find(e => e.id === exoId);
  if (!exo || !exo.keyframes || exo.keyframes.length === 0) return;
  
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  currentAnimExo = exo.name;

  const frames = exo.keyframes;
  let t = 0;
  const speed = 0.008;

  if (animFrameId) { cancelAnimationFrame(animFrameId); animFrameId = null; }

  function loop() {
    t += speed;
    if (t >= 1) t = 0;
    const totalSegs = frames.length > 1 ? frames.length - 1 : 1;
    const seg = Math.min(Math.floor(t * totalSegs), totalSegs - 1);
    const localT = (t * totalSegs) - seg;
    
    let pose;
    if (frames.length === 1) {
      pose = frames[0];
    } else {
      pose = lerpPose(frames[seg], frames[seg + 1], easeInOut(localT));
    }
    drawFigure(ctx, pose);
    animFrameId = requestAnimationFrame(loop);
  }
  loop();
}

function easeInOut(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }

function startAllAnimations() {
  document.querySelectorAll('[data-exo-anim]').forEach(el => {
    animateExercise(el.dataset.exoAnim, el.id);
  });
}

// ===== APP STATE =====
const STORE_KEY = 'fitplan_data';
let state = {
  week: 1,
  weightLog: [],
  sessions: [],
  streak: 0
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      state = { ...state, ...saved };
    }
  } catch(e) {}
}

function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch(e) {}
}

// ===== NAVIGATION =====
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`.nav-item[data-page="${page}"]`).classList.add('active');
  
  if (page === 'workout') renderWorkout();
  if (page === 'exercises') renderExercises();
  if (page === 'home') renderHome();
  if (page === 'progress') renderProgress();
  if (page === 'nutrition') renderNutrition();
}

// ===== HOME =====
function renderHome() {
  document.getElementById('headerWeek').textContent = `Semaine ${state.week}`;
  document.getElementById('streakDisplay').textContent = `🔥 ${state.streak}`;

  const weekPlan = PLAN[state.week - 1] || PLAN[0];
  const today = new Date().getDay();
  const dayIdx = today === 0 ? 6 : today - 1;
  const todayPlan = weekPlan[dayIdx];

  const badge = document.getElementById('todayBadge');
  const duration = document.getElementById('todayDuration');
  const list = document.getElementById('todayExercises');

  if (todayPlan.type === 'Repos') {
    badge.textContent = 'Repos';
    badge.className = 'today-badge rest';
    duration.textContent = '';
    list.innerHTML = '<li style="color:var(--text2);padding:12px 0">👟 Récupère bien aujourd\'hui. Reprends demain plus fort !</li>';
  } else {
    badge.textContent = todayPlan.type;
    badge.className = 'today-badge';
    duration.textContent = todayPlan.dur;
    list.innerHTML = todayPlan.exos.map(e => `<li><span>💪</span> ${e}</li>`).join('');
  }

  // Stats
  const weight = state.weightLog.length > 0 ? state.weightLog[state.weightLog.length-1].weight : null;
  document.getElementById('statSeances').textContent = state.sessions.length;
  document.getElementById('statStreak').textContent = state.streak;
  document.getElementById('statWeight').textContent = weight ? weight + 'kg' : '-';
  document.getElementById('statWeek').textContent = `S${state.week}`;

  // Tips
  const tips = [
    'Bois 2-3L d\'eau par jour, surtout avant/après l\'entraînement.',
    'Mange des protéines dans les 2h après l\'effort (poisson, poulet, œufs, haricots).',
    'Priorise le sommeil : 7-8h par nuit pour bien récupérer.',
    'Note tes progrès, même petits. Ça motive !',
    'Ne saute pas l\'échauffement : 5-10min pour éviter les blessures.',
    'Varie ton alimentation : igname, patate douce, légumes verts.',
    'Écoute ton corps : douleur ≠ brûlure musculaire. Stop si ça fait mal.'
  ];
  document.getElementById('dailyTip').textContent = tips[Math.floor(Math.random() * tips.length)];
}

function todayStr() { return new Date().toISOString().split('T')[0]; }

function startTodayWorkout() {
  const ds = todayStr();
  if (!state.sessions.includes(ds)) {
    state.sessions.push(ds);
    updateStreak();
    saveState();
    renderHome();
  }
  navigate('timer');
}

function updateStreak() {
  const s = new Set(state.sessions);
  let streak = 0;
  const d = new Date();
  for (let i = 0; i < 365; i++) {
    const ds = d.toISOString().split('T')[0];
    if (s.has(ds)) { streak++; d.setDate(d.getDate()-1); }
    else break;
  }
  state.streak = streak;
  saveState();
}

// ===== WORKOUT PAGE =====
function renderWorkout() {
  const selector = document.getElementById('weekSelector');
  selector.innerHTML = '';
  for (let i = 1; i <= 8; i++) {
    const btn = document.createElement('button');
    btn.className = 'week-btn' + (i === state.week ? ' active' : '');
    btn.textContent = 'Semaine ' + i;
    btn.onclick = () => { state.week = i; saveState(); renderWorkout(); renderHome(); };
    selector.appendChild(btn);
  }

  const container = document.getElementById('workoutDays');
  container.innerHTML = '';
  const week = PLAN[state.week - 1] || PLAN[0];
  week.forEach((day, i) => {
    const card = document.createElement('div');
    card.className = 'workout-day';
    const isRest = day.type === 'Repos';
    const typeClass = isRest ? 'rest' : 
      day.type.includes('Cardio') ? 'cardio' :
      day.type.includes('Core') || day.type.includes('Abdos') ? 'core' :
      day.type.includes('HIIT') || day.type.includes('Circuit') || day.type.includes('Fractionné') ? 'high' : 'fb';
    
    card.innerHTML = `
      <div class="workout-day-header">
        <h3>${day.day}</h3>
        <span class="day-type ${typeClass}">${day.type}</span>
      </div>
      ${isRest ? '<p style="color:var(--text3);font-size:13px">👟 Récupération</p>' :
      `<div style="font-size:12px;color:var(--text2);margin-bottom:8px">Durée : ${day.dur}</div>
      <ul class="workout-day-exos">${day.exos.map(e => `<li><span>${e}</span></li>`).join('')}</ul>`}
    `;
    container.appendChild(card);
  });
}

// ===== EXERCISES PAGE =====
let filterTimer = null;

function renderExercises() {
  const grid = document.getElementById('exoGrid');
  grid.innerHTML = '';
  
  const search = (document.getElementById('exoSearch').value || '').toLowerCase();
  const filtered = EXERCICES.filter(e => 
    e.name.toLowerCase().includes(search) || 
    e.muscles.toLowerCase().includes(search) ||
    e.type.toLowerCase().includes(search)
  );

  filtered.forEach(exo => {
    const card = document.createElement('div');
    card.className = 'exo-card';
    card.onclick = () => openExoModal(exo.id);
    const canvasId = 'thumb-' + exo.id;
    const meta = getExoMeta(exo.id);
    card.innerHTML = `
      <div class="exo-thumb">
        <span class="exo-icon-badge">${meta.icon}</span>
        <canvas id="${canvasId}" width="140" height="110" data-exo-anim="${exo.id}"></canvas>
      </div>
      <span class="exo-name">${exo.name}</span>
      <span class="exo-diff">${exo.diff}</span>
    `;
    grid.appendChild(card);
  });

  // Start thumb animations after DOM update
  requestAnimationFrame(() => {
    filtered.forEach(exo => {
      const cid = 'thumb-' + exo.id;
      const canvas = document.getElementById(cid);
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (exo.keyframes && exo.keyframes.length > 0) {
          drawFigure(ctx, exo.keyframes[0], 'rgba(0,230,118,.4)');
        }
      }
    });
  });
}

function filterExercises() {
  clearTimeout(filterTimer);
  filterTimer = setTimeout(renderExercises, 200);
}

// ===== EXO MODAL =====
function openExoModal(exoId) {
  const exo = EXERCICES.find(e => e.id === exoId);
  if (!exo) return;
  const meta = getExoMeta(exoId);

  document.getElementById('modalExoName').textContent = `${meta.icon} ${exo.name}`;
  document.getElementById('modalExoDesc').textContent = exo.desc;
  document.getElementById('modalTags').innerHTML = `
    <span class="tag-diff">${exo.diff}</span>
    <span class="tag-muscle">${exo.muscles.split(',')[0]}</span>
    <span class="tag-type">${exo.type}</span>
  `;
  document.getElementById('modalInstructions').innerHTML = 
    '<h4 style="font-size:14px;margin-bottom:6px;color:var(--text2)">📝 Conseils</h4><ul>' +
    exo.conseils.map(c => `<li>• ${c}</li>`).join('') + '</ul>' +
    `<div class="cadence-box">
       <span class="cadence-icon">⏱️</span>
       <div>
         <strong>Cadence</strong>
         <p>${meta.cadence}</p>
       </div>
     </div>
     <button class="btn primary full mt-12" onclick="launchExoTimer('${exoId}')">▶️ Minuteur pour cet exercice (${meta.timer.label})</button>`;
  document.getElementById('modalMuscles').innerHTML = 
    exo.muscles.split(',').map(m => `<span>${m.trim()}</span>`).join('');
  document.getElementById('modalVideoLink').href = exo.video;

  document.getElementById('exoModal').classList.add('open');

  // Start animation in modal
  setTimeout(() => animateExercise(exoId, 'exoCanvas'), 100);
}

function launchExoTimer(exoId) {
  const meta = getExoMeta(exoId);
  closeExoModal();
  navigate('timer');
  if (meta.timer.type === 'countdown') {
    switchTimerTab('countdown');
    setCountdown(meta.timer.seconds, null);
  } else {
    switchTimerTab('interval');
    document.getElementById('workTime').value = meta.timer.work;
    document.getElementById('restTime').value = meta.timer.rest;
    document.getElementById('intervalRounds').value = meta.timer.rounds;
    resetInterval();
  }
}

function closeExoModal(e) {
  if (e && e.target && e.target !== document.getElementById('exoModal') && e.target.closest('.modal-content')) return;
  document.getElementById('exoModal').classList.remove('open');
  if (animFrameId) { cancelAnimationFrame(animFrameId); animFrameId = null; }
}

// ===== TIMER =====
// Stopwatch
let swRunning = false, swTime = 0, swInterval = null, swLaps = [];

function toggleStopwatch() {
  if (swRunning) { clearInterval(swInterval); swRunning = false;
    document.getElementById('stopwatchBtn').textContent = '▶️';
    document.getElementById('stopwatchDisplay').classList.remove('running');
  } else {
    swRunning = true;
    document.getElementById('stopwatchBtn').textContent = '⏸️';
    document.getElementById('stopwatchDisplay').classList.add('running');
    const start = Date.now() - swTime;
    swInterval = setInterval(() => {
      swTime = Date.now() - start;
      updateStopwatchDisplay();
    }, 100);
  }
}

function resetStopwatch() {
  clearInterval(swInterval); swRunning = false; swTime = 0; swLaps = [];
  document.getElementById('stopwatchBtn').textContent = '▶️';
  document.getElementById('stopwatchDisplay').classList.remove('running');
  document.getElementById('laps').innerHTML = '';
  updateStopwatchDisplay();
}

function lapStopwatch() {
  if (!swRunning) return;
  swLaps.push(swTime);
  document.getElementById('laps').innerHTML = swLaps.map((l,i) => 
    `<div>Tour ${i+1} : ${formatStopwatch(l)}</div>`
  ).join('');
}

function formatStopwatch(ms) {
  const d = new Date(ms);
  return d.getUTCMinutes().toString().padStart(2,'0') + ':' + 
         d.getUTCSeconds().toString().padStart(2,'0') + '.' +
         Math.floor(d.getUTCMilliseconds()/100);
}

function updateStopwatchDisplay() {
  document.getElementById('stopwatchDisplay').textContent = formatStopwatch(swTime);
}

// Countdown
let cdRunning = false, cdTime = 600000, cdRemaining = 600000, cdInterval = null;

function setCountdown(seconds, el) {
  cdTime = seconds * 1000;
  cdRemaining = cdTime;
  document.getElementById('countdownDisplay').textContent = formatCountdown(cdRemaining);
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
}

function formatCountdown(ms) {
  const d = new Date(ms);
  return d.getUTCMinutes().toString().padStart(2,'0') + ':' + 
         d.getUTCSeconds().toString().padStart(2,'0');
}

function toggleCountdown() {
  if (cdRunning) {
    clearInterval(cdInterval); cdRunning = false;
    document.getElementById('countdownBtn').textContent = '▶️';
    document.getElementById('countdownDisplay').classList.remove('running');
  } else {
    if (cdRemaining <= 0) cdRemaining = cdTime;
    cdRunning = true;
    document.getElementById('countdownBtn').textContent = '⏸️';
    document.getElementById('countdownDisplay').classList.add('running');
    const start = Date.now();
    cdInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      cdRemaining = Math.max(0, cdTime - elapsed);
      document.getElementById('countdownDisplay').textContent = formatCountdown(cdRemaining);
      if (cdRemaining <= 0) {
        clearInterval(cdInterval); cdRunning = false;
        document.getElementById('countdownBtn').textContent = '▶️';
        document.getElementById('countdownDisplay').classList.remove('running');
        beep();
      }
    }, 200);
  }
}

function resetCountdown() {
  clearInterval(cdInterval); cdRunning = false;
  cdRemaining = cdTime;
  document.getElementById('countdownBtn').textContent = '▶️';
  document.getElementById('countdownDisplay').classList.remove('running');
  document.getElementById('countdownDisplay').textContent = formatCountdown(cdRemaining);
}

// Interval timer
let intRunning = false, intInterval = null;
let intPhase = 'work', intRound = 1, intTime = 0;
let intWork = 30, intRest = 15, intRounds = 8;

function toggleInterval() {
  if (intRunning) {
    clearInterval(intInterval); intRunning = false;
    document.getElementById('intervalBtn').textContent = '▶️';
    document.getElementById('intervalDisplay').classList.remove('running');
  } else {
    intWork = parseInt(document.getElementById('workTime').value) || 30;
    intRest = parseInt(document.getElementById('restTime').value) || 15;
    intRounds = parseInt(document.getElementById('intervalRounds').value) || 8;
    intPhase = 'work'; intRound = 1; intTime = intWork;
    intRunning = true;
    document.getElementById('intervalBtn').textContent = '⏸️';
    document.getElementById('intervalDisplay').classList.add('running');
    updateIntervalDisplay();

    intInterval = setInterval(() => {
      intTime--;
      updateIntervalDisplay();
      if (intTime <= 0) {
        if (intPhase === 'work') {
          intPhase = 'rest';
          intTime = intRest;
          if (intRound <= intRounds) beep();
        } else {
          intPhase = 'work';
          intRound++;
          intTime = intWork;
          if (intRound > intRounds) {
            clearInterval(intInterval); intRunning = false;
            document.getElementById('intervalBtn').textContent = '▶️';
            document.getElementById('intervalDisplay').classList.remove('running');
            document.getElementById('intervalStatus').textContent = '✅ Terminé !';
            beep(); beep();
            return;
          }
          beep();
        }
      }
    }, 1000);
  }
}

function updateIntervalDisplay() {
  const m = Math.floor(intTime/60);
  const s = intTime%60;
  document.getElementById('intervalDisplay').textContent = 
    m.toString().padStart(2,'0')+':'+s.toString().padStart(2,'0');
  const phase = intPhase === 'work' ? '🔥 Travail' : '💨 Repos';
  document.getElementById('intervalStatus').textContent = `${phase} — Tour ${intRound}/${intRounds}`;
}

function resetInterval() {
  clearInterval(intInterval); intRunning = false;
  document.getElementById('intervalBtn').textContent = '▶️';
  document.getElementById('intervalDisplay').classList.remove('running');
  document.getElementById('intervalDisplay').textContent = '00:00';
  document.getElementById('intervalStatus').textContent = 'Prêt';
}

function beep() {
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator();
    const g = ac.createGain();
    o.connect(g); g.connect(ac.destination);
    o.frequency.value = 880;
    g.gain.value = 0.3;
    o.start(0); o.stop(ac.currentTime + 0.15);
  } catch(e) {}
}

function switchTimerTab(tab) {
  document.querySelectorAll('.timer-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.querySelectorAll('.tab-mini').forEach(t => t.classList.remove('active'));
  document.querySelector(`.tab-mini[data-tab="${tab}"]`).classList.add('active');
}

// ===== PROGRESS =====
function addMeasurement() {
  const w = parseFloat(document.getElementById('weightInput').value);
  const waist = parseFloat(document.getElementById('waistInput').value);
  if (!w && !waist) return;

  state.weightLog.push({
    date: new Date().toISOString().split('T')[0],
    weight: w || null,
    waist: waist || null
  });
  saveState();
  document.getElementById('weightInput').value = '';
  document.getElementById('waistInput').value = '';
  renderProgress();
}

function renderProgress() {
  const list = document.getElementById('measurementsList');
  const sorted = [...state.weightLog].reverse();
  list.innerHTML = '<h3>Mesures enregistrées</h3>';
  if (sorted.length === 0) {
    list.innerHTML += '<p style="color:var(--text3);font-size:13px">Aucune mesure pour le moment.</p>';
  } else {
    sorted.forEach(m => {
      const div = document.createElement('div');
      div.className = 'measurement-item';
      div.innerHTML = `
        <span class="m-date">${m.date}</span>
        <span>${m.weight ? '<span class="m-weight">'+m.weight+' kg</span>' : ''} ${m.waist ? '| '+m.waist+' cm' : ''}</span>
      `;
      list.appendChild(div);
    });
  }

  // Chart
  drawWeightChart();

  // Calendar
  renderCalendar();
}

function drawWeightChart() {
  const canvas = document.getElementById('weightChart');
  const ctx = canvas.getContext('2d');
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width - 32;
  canvas.height = 180;

  const data = state.weightLog.filter(m => m.weight);
  if (data.length < 2) {
    ctx.fillStyle = 'var(--text3)';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Ajoute au moins 2 mesures pour voir le graphique', canvas.width/2, canvas.height/2);
    return;
  }

  const vals = data.map(m => m.weight);
  const min = Math.min(...vals) - 2;
  const max = Math.max(...vals) + 2;
  const pad = { top: 20, bottom: 30, left: 40, right: 20 };
  const w = canvas.width - pad.left - pad.right;
  const h = canvas.height - pad.top - pad.bottom;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Grid
  ctx.strokeStyle = 'rgba(255,255,255,.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i++) {
    const y = pad.top + (h / 3) * i;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(canvas.width-pad.right, y); ctx.stroke();
    const val = Math.round(max - (max-min)/3*i);
    ctx.fillStyle = 'var(--text3)'; ctx.font = '10px sans-serif';
    ctx.textAlign = 'right'; ctx.fillText(val+'', pad.left-6, y+4);
  }

  // Line
  const stepX = w / (data.length - 1);
  ctx.beginPath();
  ctx.strokeStyle = '#00e676';
  ctx.lineWidth = 2.5;
  data.forEach((m, i) => {
    const x = pad.left + i * stepX;
    const y = pad.top + h - (m.weight - min) / (max - min) * h;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Gradient fill
  const last = data[data.length-1];
  const lastX = pad.left + (data.length-1) * stepX;
  const lastY = pad.top + h - (last.weight - min) / (max - min) * h;
  ctx.lineTo(lastX, pad.top + h);
  ctx.lineTo(pad.left, pad.top + h);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + h);
  grad.addColorStop(0, 'rgba(0,230,118,.2)');
  grad.addColorStop(1, 'rgba(0,230,118,.02)');
  ctx.fillStyle = grad;
  ctx.fill();

  // Dots
  data.forEach((m, i) => {
    const x = pad.left + i * stepX;
    const y = pad.top + h - (m.weight - min) / (max - min) * h;
    ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI*2);
    ctx.fillStyle = '#00e676'; ctx.fill();
    ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI*2);
    ctx.fillStyle = '#0f0f13'; ctx.fill();

    // Labels (every other)
    if (i % Math.max(1, Math.floor(data.length/5)) === 0 || i === data.length-1) {
      ctx.fillStyle = 'var(--text3)'; ctx.font = '8px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(m.date.slice(5), x, canvas.height - 8);
    }
  });
}

function renderCalendar() {
  const cal = document.getElementById('miniCalendar');
  cal.innerHTML = '';
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dayStr = d.toISOString().split('T')[0];
    const isToday = dayStr === today.toISOString().split('T')[0];
    const done = state.sessions.includes(dayStr);
    
    const el = document.createElement('div');
    el.className = 'cal-day' + (done ? ' done' : '') + (isToday ? ' today' : '');
    el.textContent = d.getDate();
    cal.appendChild(el);
  }
}

// ===== INIT =====
loadState();

// Initialize timer displays
updateStopwatchDisplay();
cdTime = 600000; cdRemaining = cdTime;
document.getElementById('countdownDisplay').textContent = formatCountdown(cdRemaining);

// Home
renderHome();

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').catch(() => {});
}

// Handle visibility change to save state
document.addEventListener('visibilitychange', () => {
  if (document.hidden) saveState();
});

console.log('💪 FitPlan Bénin chargé ! Programme 8 semaines actif.');
