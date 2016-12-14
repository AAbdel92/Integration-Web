function ajouter(random) {
    var tableau = [];
    var i = 0;
    while (i < random) {
        tableau += i;
        i++;
    }
    console.log(tableau);
}
ajouter(5);

function ajouterBis(random) {
    var tableau = [];
    var i = 0;
    while (i < random) {
        tableau.push(i);
        i++;
    }
    console.log(tableau);
}
ajouterBis(5);