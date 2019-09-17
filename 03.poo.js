var Personne = function (nom, prenom, pseudo) 
{ 
    this.nom = nom; 
    this.prenom = prenom;
    this.pseudo = pseudo;  

    this.getNomComplet  = function () {
        return "nom : " + this.nom + ", prénom: " + this.prenom + ", pseudo : " + this.pseudo; 
      }

      this.getInitiales = function(){
          return this.prenom.charAt(0) + this.nom.charAt(0); 
      }
 }

 function afficherPersonne (personne) {  
    console.log( personne.getNomComplet()); 
 }


 var jules = new Personne('Jules', 'LEMAIRE', 'jules77'); 
 var paul = new Personne('Paul', 'LEMAIRE', 'Paul44'); 



afficherPersonne(jules); 
afficherPersonne(paul); 

jules.pseudo = 'jules44'

afficherPersonne(jules); 


 Personne.prototype.age = 'NON RENSEIGNE'; 

 console.log(jules.age);

 jules.age = 30; 

 console.log(jules.age); 

 console.log(jules.getInitiales()); 

 var robert = {
     prenom : "Robert", 
    nom : "LEPREFET", 
    pseudo : "Robert77",
    getNomComplet() {
        return "nom : " + this.nom + ", prénom: " + this.prenom + ", pseudo : " + this.pseudo; 
    }
 }
  
 afficherPersonne(robert); 

 var Client = function (nom, prenom, pseudo, numeroClient) 
{ 
    Personne.call(this, nom, prenom, pseudo)

    this.numeroClient = numeroClient; 
    this.getNomComplet  = function () {
        return "nom : " + this.nom + ", prénom: " + this.prenom + ", pseudo : " + this.pseudo; 
      }

      this.getInitiales = function(){
          return this.prenom.charAt(0) + this.nom.charAt(0); 
      }

      this.getInfos = function() {
          return "numéro client " + this.numeroClient + ", nom : " + this.nom + ", prénom : " + this.prenom; 
      }

 }

 var steeve = new Client ('LUCAS', 'Steeve', 'steeve44', 'A01'); 

 afficherPersonne(steeve); 

 console.log(steeve.numeroClient); 

 console.log(steeve.getInfos());