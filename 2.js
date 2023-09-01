let rn = Math.floor(Math.random() * 15);
let input = document.getElementById("number");
let a = 0;
function first() {
    let gn = input.value;
    a++;
    if (rn == gn) {
        document.getElementById("gn").innerHTML = `Guessed numbers are:${rn}`;
        document.getElementById("g").innerHTML = `No.of guesses are:${a}`;

        if (a == 1) {
            document.getElementById("h").innerHTML = `Your guess is too high`;
        } else if (a > 1 && a <= 5) {
            document.getElementById("h").innerHTML = `Your guess is high`;
        } else if (a > 5 && a <= 9) {
            document.getElementById("h").innerHTML = `Your guess is good`;
        } else if (a > 9 && a < 14) {
            document.getElementById("h").innerHTML = `Your guess is low`;
        } else {
            document.getElementById("h").innerHTML = `Your guess is too`;
        }

    } else if (rn > gn) {
        document.getElementById("h").innerHTML = `try a higher number`;
        document.getElementById("g").innerHTML = `No.of guesses are:${a}`;
    } else {
        document.getElementById("h").innerHTML = `try a lower number`;
        document.getElementById("g").innerHTML = `No.of guesses are:${a}`;
    }
}