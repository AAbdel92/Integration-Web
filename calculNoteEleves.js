
function genererNotes(tableau) {
    var randomNote = 0;
    for (i = 0; i < 20; i ++) {
        randomNote = (Math.round(Math.random() * 20));
        //console.log(randomNote);
        tableau.push(randomNote);
       

    }
     console.log("les notes : " + tableau);
    
}

   


function calculerMoyenne(tableau) {
    var totalNotes = 0;
    var moyenne = 0;
    var nombreDeNotes = tableau.length;   

    for (i = 0; i < tableau.length; i ++) {
        var note = tableau[i];
        totalNotes += note;
        //console.log(note);
    }
    
    //console.log(totalNotes);
    //console.log(nombreDeNotes);
    var moyenne = totalNotes / nombreDeNotes;
    console.log("La moyenne est : " + moyenne);
}

function calculerNoteMax(tableau) {
    var noteMax = 0;

    for (i = 0; i < tableau.length; i ++) {
        var note = tableau[i];
        
        if (note > noteMax) {
            noteMax = note;
        }
        //console.log(note);
    }
    console.log("La note maximum est : " + noteMax);
}

function calculerNoteMin (tableau) {
    var noteMin = 20;

    for (i = 0; i < tableau.length; i ++) {
        var note = tableau[i];
        
        if (note < noteMin) {
            noteMin = note;
        }
        //console.log(note);
    }
    console.log("La note minimum est : " + noteMin);
}

function calculerNote10Plus(tableau) {
    var resultat = 0;
    for (i = 0; i < tableau.length; i ++) {
        note = tableau[i];
        if (note >= 10) {
            resultat += 1;

        }
    }
    console.log("Le nombre de note 10+ : " + resultat);
}

function calculerNombreDe10(tableau) {
    var resultat = 0;
    for (i = 0; i < tableau.length; i ++) {
        note = tableau[i];
        if (note == 10) {
            resultat += 1;

        }
    }
    console.log("Le nombre de 10 est : " + resultat);
}



function main() {
    var notesEleves = [];
    
    genererNotes(notesEleves);
    calculerMoyenne(notesEleves);
    calculerNoteMax(notesEleves);
    calculerNoteMin(notesEleves);
    calculerNote10Plus(notesEleves);
    calculerNombreDe10(notesEleves);
}

 main();