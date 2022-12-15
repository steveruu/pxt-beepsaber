// let number1 = 4;
// let preBtnAPressed = input.buttonIsPressed(Button.A);
// let preBtnBPressed = input.buttonIsPressed(Button.B);

// let makejA = () => {
//     number1 -= 1;
//     whaleysans.showNumber(number1)
// }

// let makejB = () => {
//     number1 += 1;
//     whaleysans.showNumber(number1)
// }

// let makej = function() {
//     if (input.buttonIsPressed(Button.A) && number1 >= 1) {
//         if (!preBtnAPressed) {
//             makejA();
//             preBtnAPressed = true;
//         }
//     } else {
//         preBtnAPressed = false;
//     }

//     if (input.buttonIsPressed(Button.B) && number1 <= 9) {
//         if (!preBtnBPressed) {
//             makejB();
//             preBtnBPressed = true;
//         }
//     } else {
//         preBtnBPressed = false;
//     }

//     whaleysans.showNumber(number1)
// }

// input.onButtonPressed(Button.A, makejA); // registrace k eventu onButtonPressed
// input.onButtonPressed(Button.B, makejB);
// let prvniCas = control.millis();

// let count = () => {
//     let casPassedSinceStart;
//     let cas;

//     if (input.buttonIsPressed(Button.A)) {
//         if(!wasPressedA) {
//             prvniCas = control.millis();
//             wasPressedA = true;
//         } else {
//         if (wasPressedA) {
//             cas = control.millis();
//             casPassedSinceStart = cas - (prvniCas / 1000);
//             basic.showNumber(casPassedSinceStart)
//             }
//         }
//     }
// }

// while (true) {
//     count()
// }

// let ranDelay = Math.randomRange(500,5000);
// console.log(`sound beeping for ${ranDelay} ms`)
// let casPriSpusteni = control.millis();
// music.playTone(Note.C, ranDelay);

// let startcas = 0;
// let casPressed = 0;
// let flooredPassed = Math.floor(casPressed);
// let wasPressedA = false;
// let wasPressedAB = false;


// while (true) {
//     if(input.buttonIsPressed(Button.B)) {
//         if (!wasPressedAB) {
//             startcas = control.millis();
//             console.log(`${startcas} startcas`)
//             wasPressedAB = true;
//         }
//         if (wasPressedAB) {
//             casPressed = ((control.millis() / 1000) - (startcas / 1000));
//             console.log(`${flooredPassed} = ${control.millis()  / 1000 } - ${startcas / 1000}`);
//             console.log(`duration ${flooredPassed}`);
//             basic.showNumber(flooredPassed);
//             wasPressedAB = false;
//         }
//     }
// }

let ranDelay = 0;
let skore = 0;

let pocatecniCas = 0;
let konecnyCas = 0;

let jeTlacitkoAZmacknuto = input.buttonIsPressed(Button.A);

function pipni() {
    ranDelay = Math.randomRange(500, 2000);
    music.playTone(Note.C4, ranDelay);
}

function pocitani(cas: number) {
    if (Math.floor(ranDelay - cas) < 500) 
    {
        skore += 1;
    }
    
    basic.showNumber(skore)
    pipni()
}

function priStiskuTlacitka() {
    pocatecniCas = control.millis(); // zacne merit cas
}

function priPusteniTlacitka() {
    konecnyCas = control.millis();
    pocitani((konecnyCas - pocatecniCas));
}

let wasPressedA = false

pipni()

while (true) {
    if (jeTlacitkoAZmacknuto) {
        if (!wasPressedA) {
            priStiskuTlacitka();
        }
        wasPressedA = true;
    } else {
        if (wasPressedA) {
            priPusteniTlacitka();
        }
        wasPressedA = false;
    }
}












