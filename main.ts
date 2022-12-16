let ranDelay = 0;
let skore = 0;

let pocatecniCas = 0;
let konecnyCas = 0;

function pipni() {
    ranDelay = Math.randomRange(500, 2000);
    music.playTone(Note.C, ranDelay);
}

function pocitej(cas: number) {
    if (Math.floor(ranDelay - cas) < 750) 
    {
        skore += 1;
    }
    
    basic.showNumber(skore);
    pipni();
}

function stiskTlacitka() {
    pocatecniCas = control.millis(); // zacne merit cas
}

function releaseTlacitka() {
    konecnyCas = control.millis();
    pocitej((konecnyCas - pocatecniCas));
}

let wasPressedA = false;

pipni()

while (true) {
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












