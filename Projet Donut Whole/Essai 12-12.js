
var z = "";

for (i = 0; i < 5; i ++) {
    z += "*";
    console.log(z);
}


i= 0;

var z = "";

while (i < 5) {
    z += "*";
    console.log(z);
    i++;
}


var text ="";
i = 0;

do {
    text += "*";
    console.log(text);
    i++;
}
while (i<5);

// Création d'une fonction pour faire un triangle croissant d'étoiles en utilisant For

function triangleEtoiles(etoilesMax) {
    var triangle= "";
    for (i = 0; i < etoilesMax; i ++) {
        triangle += "*";
        console.log(triangle);
    }
}
triangleEtoiles(6);

// en utilisant While

function triangleEtoiles(etoilesMax) {
    var i = 0;
    var triangle = "";
    while (i < etoilesMax) {
    triangle += "*";
console.log(triangle);
i++;
}
}
triangleEtoiles(6);


// en utilisant Do While

function triangleEtoiles(etoilesMax) {
var triangle = "";
i = 0;
do {
triangle += "*";
console.log(triangle);
i++;
}
while (i<etoilesMax);
}
triangleEtoiles(6);

// function pour triangle croissant d'un caractere


function triangle(nombreMax, caractere) {
var triangle= "";
for (i = 0; i < nombreMax; i ++) {
triangle += caractere;
console.log(triangle);
}
}
triangle(6, "n");

// function pour afficher la derniere ligne du triangle


function ligne(nombreMax, caractere) {
	var resultat= "";
	for (i = 0; i < nombreMax; i ++) {
		resultat += caractere;
	}
  console.log(resultat);
}
ligne(6, "n");

// je crée la fonction ligne pour établir une ligne de caratere


function ligne(nombreMax, caractere) {
	var resultat= "";
	for (i = 0; i < nombreMax; i ++) {
		resultat += caractere;
	}
  console.log(resultat);
}

/* je crée une fonction qui appelle la fonction ligne() et qui ensuite réduit de 1 le nombreMax
jusqu'a 0*/

function triangleInverse(nombreMax, caractere) {
	while (nombreMax >0) {
		ligne(nombreMax, caractere);
  	nombreMax--;
   }
  }
  
  triangleInverse(9, "n")







