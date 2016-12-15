var tableau = ['bananas', 'apples', 'pears', 'avocados', 'john', 'david', 'omar', 'fred', 'idris', 'a', 'dog', 'monkey', 'elephant', 'kayak', 'angela'];

var voyelle = ["a", "e", "i", "o", "u", "y"];

var longueurMot = 0;
/*

function listerArray(array) {

    for (i = 0; i < array.length; i ++) {        
        string = array[i];
        
        if (string.startsWith("a")) {
            console.log(string);
            
        }
    }
}
listerArray(tableau);

*/


/* function listerArray(array) {
    
    for (i = 0; i < array.length; i ++) {        
        string = array[i];
        for (j = 0; j < voyelle.length; j ++) {
             if (string.startsWith(voyelle[j])) {
            console.log(string);
            
            }
        }
       
    }
}
listerArray(tableau);
*/

/*function lengthOf(chaine) {
    var longueurMot = chaine.length;
} */


 /* function listerArray(array) {
     var taillePlusGrandMot = 0;
     var plusGrandMot = "";
    
    for (i = 0; i < array.length; i ++) {        
        string = array[i];
        var longueur = string.length;
        var motEnCours = string;
        //console.log(string);
        
        if (longueur >= taillePlusGrandMot) {
            taillePlusGrandMot = longueur;
            plusGrandMot = motEnCours;

            //console.log(plusGrandMot);
        }               
    }
    console.log(plusGrandMot);
}
listerArray(tableau); */

function listerArray(array) {
     var taillePlusGrandMot = 0;
     var lesPlusGrandMots = [];
    
    for (i = 0; i < array.length; i ++) {        
        string = array[i];
        var longueur = string.length;
        var motEnCours = string;
        //console.log(string);
        
        if (longueur > taillePlusGrandMot) {
            taillePlusGrandMot = longueur;
            lesPlusGrandMots.shift();
            lesPlusGrandMots.unshift(motEnCours);

            //console.log(plusGrandMot);
        } else if (longueur == taillePlusGrandMot) {
            lesPlusGrandMots.unshift(motEnCours);
        }
    
}
    console.log(lesPlusGrandMots);
}
listerArray(tableau);





