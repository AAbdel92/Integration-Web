

/*
function testerMultiple(nombre) {
    if (nombre % 3 == 0 && !(nombre % 5 == 0)) {
        console.log("fizz");
    }
    if (!(nombre % 3 == 0) && nombre % 5 == 0) {
        console.log("buzz");
    }
    if (nombre % 3 == 0 && nombre % 5 == 0) {
        console.log("fizzbuzz");
    }
    if (nombre % 3 !== 0 && nombre % 5 !== 0) {
        console.log(nombre);
    }

}

function main(nombre) {
    testerMultiple(nombre);
   }

main(2);
main(5);
main(6);
main(11);
main(30);

function test(nombre) {

if (nombre % 3 == 0) {
    if (nombre % 5 == 0) {
        console.log("fizzbuzz");
    } else {
        console.log("fizz");
    }

} else if (nombre % 3 !== 0) {
    if (nombre % 5 == 0)  {
        console.log("buzz");
    } else {
        console.log(nombre);
    }
}
}

test(2);
test(5);
test(6);
test(11);
test(30); */

function multipleDeTrois(nombre) {
    for (i = 1; i <= nombre; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
        console.log("fizzbuzz");
            }   else {
        console.log("fizz");
                }
        }
    }
}

function multipleDeCinq(nombre) {
    for (i = 1; i <= nombre; i++) {
        if (i % 3 !== 0) {
            if (i % 5 == 0)  {
                console.log("buzz");
         }  else {
        console.log(i);
            }
        }
    }
}

function main(nombre) {
    multipleDeCinq(nombre);
    multipleDeTrois(nombre);
}

main(30);


