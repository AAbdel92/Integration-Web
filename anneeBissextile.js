function calculerBissextile(annee) {
    if (annee % 4 == 0) {
        if (annee % 100 == 0) {
            if (annee % 400 == 0) {
                console.log("oui");
            } else {
                console.log("non");
            }
        } else {
            console.log("oui");
        }
    } else {
        console.log("non");
    }
}
calculerBissextile(1997);