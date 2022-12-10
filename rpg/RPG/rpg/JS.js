let hero1 = document.getElementById("hero1Img");
let hero1HP = document.getElementById("pvHero1");
let hero1Magie = document.getElementById("magieHero1");
let hero1defense = document.getElementById("hero1Img");
let herotour = document.getElementById("hero1Img");

let hero2 = document.getElementById("hero2Img");
let hero2HP = document.getElementById("pvHero2");
let hero2Magie = document.getElementById("magieHero2");

let hero3 = document.getElementById("hero3Img");
let hero3HP = document.getElementById("pvHero3");
let hero3Magie = document.getElementById("magieHero3");

let hero4 = document.getElementById("hero4Img");
let hero4HP = document.getElementById("pvHero4");
let hero4Magie = document.getElementById("magieHero4");

let monstre1HP = document.getElementById("monstre1HP")
let monstre1 = document.getElementById("monstre1Img")

let monstre2HP = document.getElementById("monstre2HP")

let monstre3HP = document.getElementById("monstre3HP")

let dialogue = document.getElementById("dialogue1")
let degatmonstre = hero1
let heroenattaque = hero1
let joueurquijoue = 0
let ennemiselection = 0
let joueurayantjoué = 0
function afficherHP (id) {
    document.getElementById(id).style.visibility='visible';

}
function cacherHP (id) {
//    document.getElementById(id).style.visibility='hidden';
}
// créer une fonction pour determiner quel joueur joue

function Attaque(){
    if (ennemiselection != 0) { 
        //Si un monstre est séléectionné, on entre dans le SI
      
        if(joueurayantjoué < 3){
            hpMob = ennemiselection.innerText;  // HPmob prend la valeur de l'hp actuel du monstre
            ennemiselection.innerHTML = parseInt(hpMob) - 10;  //On ecrit la valeur HP actuel -10
            dialogue.innertHTML = "Le",ennemiselection,"à perdu 10 PV"
            joueurayantjoué += 1;
            dialogue.innerHTML = "c'est au joueur suivant";
        }
        else{
            pMob = ennemiselection.innerText;  // HPmob prend la valeur de l'hp actuel du monstre
            ennemiselection.innerHTML = parseInt(hpMob) - 10;  //On ecrit la valeur HP actuel -10
            dialogue.innertHTML = "Le",ennemiselection,"à perdu 10 PV"
            joueurayantjoué = 0;
            dialogue.innerHTML = "les monstres ripostes";
            
            
        
            hero1HP = - 10;
           
        }
    }


}

function Defense(){

}
function Magie(){
    
}
dialogue.innerHTML = "cliquez sur un monstre à attaquer"
monstre1.onclick = function() {
    dialogue.innerHTML = "monstre 1 choisi" // change le dialogue dans la boite pour afficher le monstre selectionner//
    ennemiselection = monstre1HP // sauvegarde la selection du monstre //
}

monstre2.onclick = function() {
    dialogue.innerHTML = "monstre 2 choisi" // change le dialogue dans la boite pour afficher le monstre selectionner//
    ennemiselection = monstre2HP // sauvegarde la selection du monstre //
}

monstre3.onclick = function() {
    dialogue.innerHTML = "monstre 3 choisi" // change le dialogue dans la boite pour afficher le monstre selectionner//
    ennemiselection = monstre3HP // sauvegarde la selection du monstre //
}
// créer une fonction pour determiner la mort d'un joueur et l'empêcher de jouer
// créer une fonction pour determiner la mort d'un monstre et l'empecher d'attquer

