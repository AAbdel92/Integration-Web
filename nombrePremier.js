

function testerNombrePremier(nombre) {
    var diviseur = nombre - 1;
    for (diviseur; diviseur > 1; diviseur--) {
        if (nombre % diviseur == 0) {
            //console.log("Non, ce n'est pas un nombre premier !");
            return false;
        } 
    } //console.log("Oui !");
    return true;
}

// testerNombrePremier(10);

function listerNombrePremier(nombreMin,nombreMax) {
        if (nombreMin < 2) {
            console.log("Choisissez un nombreMin plus grand que 1");
            return false;
    }   for (nombreMin; nombreMin <= nombreMax; nombreMin++) {
             if (testerNombrePremier(nombreMin) == true) {
                 console.log(nombreMin);
        }
    }
}

listerNombrePremier(50,3500); 