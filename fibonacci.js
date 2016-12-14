function fibonacci(nombreMax) {
    var initial = 0;
    var second = 1;
    var resultat = 0;
    console.log(initial);
    console.log(second);
   while ((initial + second) < nombreMax) {
       resultat = initial + second
        console.log(resultat);
        initial = second;
        second = resultat;
    }

}
fibonacci(10000);
