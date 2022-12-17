let ranDelay = 0;
let skore = 0;

let pocatecniCas = 0;
let konecnyCas = 0;
let attempts = 0;

function pipni() {
    ranDelay = Math.randomRange(500, 2000);
    music.playTone(Note.C4, ranDelay);
    attempts += 1; 
    console.log(attempts);
}

function pocitej(cas: number) {
    if (Math.floor(ranDelay - cas) < 750) // celkem lehke to trefit
    {
        skore += 1;
    } else {
        if (skore > 0) {
            skore -= 1;
        }
    }
    
    basic.showNumber(skore);
    pipni();
}

function stiskTlacitka() {
    pocatecniCas = control.millis(); // ulozi pocatecni cas
}

function releaseTlacitka() {
    konecnyCas = control.millis(); // ulozi konecny cas
    pocitej((konecnyCas - pocatecniCas)); // delta
}

let wasPressedA = false;
pipni(); // nove kolo

while (true) { // furt
    if (skore == 10) {
        break;
        basic.showString("you win!");
    } else if (attempts >= 10 && skore != 10) {
        break;
        basic.showString("you lose!");
    } else {
        if (input.buttonIsPressed(Button.A)) {
            if (!wasPressedA) {
                stiskTlacitka();
            }
            wasPressedA = true;
        } else {
            if (wasPressedA) {
                releaseTlacitka();
            }
            wasPressedA = false;
        }
    }
}












