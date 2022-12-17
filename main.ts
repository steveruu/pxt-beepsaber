let ranDelay = 0;
let skore = 0;

let pocatecniCas = 0;
let konecnyCas = 0;
let attempts = 0;

let wasPressedA;

function pipni() {
    ranDelay = Math.randomRange(500, 2000);
    music.playTone(Note.C4, ranDelay);
    
    attempts += 1;
    console.log(`attempts: ${attempts}`);
}


function pocitej(delka: number) {
    attempts += 1;
    console.log(`attempts: ${attempts}`);
    
    if (Math.floor(ranDelay - delka) < 750) // celkem lehke to trefit
    {
        skore += 1;
    } else {
        if (skore > 0) {
            skore -= 1;
        }
    }
    
    console.log(`score: ${skore}`);
    basic.showNumber(skore);
    pipni();
}

wasPressedA = false;
pipni(); // nove kolo

while (true) {
    if (attempts < 10 && skore == 10) {
        basic.showString("you win!");
        break; // win condition
    } else if (attempts == 10 && skore != 10) {
        basic.showString("you lose!");
        break; // lose condition
    } else {
        if (input.buttonIsPressed(Button.A)) {
            if (!wasPressedA) {
                pocatecniCas = control.millis(); // ulozi pocatecni cas
            }
            wasPressedA = true;
        } else {
            if (wasPressedA) {
                konecnyCas = control.millis(); // ulozi konecny cas
                pocitej((konecnyCas - pocatecniCas)); // pocitej() => let delka
                attempts += 1;
                console.log(`attempts: ${attempts}`);
            }
            wasPressedA = false;
        }
    }
}












