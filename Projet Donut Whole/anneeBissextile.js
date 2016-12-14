function calculerBissextile(annee) {
    if (annee % 4 == 0) {
        if (annee % 100 == 0) {
            console.log("non");
        } else if (annee % 400 == 0) {
            console.log("oui");
        }
    }
}

calculerBissextile(1996);