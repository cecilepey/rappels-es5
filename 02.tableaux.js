var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']; 

function afficher (element) { console.log(element) }

villes.forEach(afficher); 

function lettreADansToutesLesVilles(element) { 
   if(element.includes('a')){
       console.log(true); 
   } else {
       console.log(false); 
   }
 }

var resultatEvery = villes.every(function(element) {
     return element.includes('a');
 }); 

 console.log("every", resultatEvery);

 function auMoinsUneVilleAvecUnTiret(element){
    return element.includes('-');

 }

  var resultatSome =   villes.some(auMoinsUneVilleAvecUnTiret); 

  console.log('some' , resultatSome); 

  var villesSansTiretSansEspace = villes.filter(function(element){
      return !element.includes('-') && !element.includes(' '); 
  })

  console.log('villes sans tiret espace ', villesSansTiretSansEspace); 

  var villesMajusculeSeTerminantParS = villes.filter(function (element) { return element.endsWith('s')  }).map(function(element){return element.toUpperCase()}); 

  console.log('villesMajusculeSeTerminantParS', villesMajusculeSeTerminantParS); 

  