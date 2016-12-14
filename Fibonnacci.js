function fibonacci(nombreMax) {
    var initial = 1;
    for (i = 0; i < nombreMax; i += initial) {
        console.log(i);
        initial = i;
    }
}
fibonacci(100);