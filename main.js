function checkAnswer() {
    let el = document.getElementById("answer");
    if (el.value === "") {
        alert("podaj odpowiedź");
        return;
    };
    if (c === parseInt(el.value, 10)) {
        alert("Poprawna odpowiedź");
    } else {
        alert("Błędna odpowiedź. Poprawna odpowiedź to " + c);
    }
    a = Math.floor(Math.random()*10)+1;
    b = Math.floor(Math.random()*10)+1;
    c = a * b;
    document.getElementById("question").innerText = a + " * " + b + " = ";

    el.value = "";
}

function keyCheckAnswer(ev) {
    if (ev.key === "Enter") {
        checkAnswer();
    };
}

let a = Math.floor(Math.random()*10)+1;
let b = Math.floor(Math.random()*10)+1;
let c = a * b;
document.getElementById("question").innerText = a + " * " + b + " = ";

document.getElementById("answer").addEventListener("keydown", keyCheckAnswer)