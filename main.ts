let number1 = 4;
let preBtnAPressed = input.buttonIsPressed(Button.A);
let preBtnBPressed = input.buttonIsPressed(Button.B);

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
let prvniCas = control.millis();

// let count = () => {
//     let timePassedSinceStart;
//     let time;

//     if (input.buttonIsPressed(Button.A)) {
//         if(!wasPressed) {
//             prvniCas = control.millis();
//             wasPressed = true;
//         } else {
//         if (wasPressed) {
//             time = control.millis();
//             timePassedSinceStart = time - (prvniCas / 1000);
//             basic.showNumber(timePassedSinceStart)
//             }
//         }
//     }
// }

// while (true) {
//     count()
// }

let ranDelay = Math.randomRange(500,5000);
console.log(`sound beeping for ${ranDelay} ms`)
let casPriSpusteni = control.millis();
music.playTone(Note.C, ranDelay);

let startTime = 0;
let timePressed = 0;
let wasPressed = false;

input.onButtonPressed(Button.A, function () {
    if (!wasPressed) {
        // Start the timer when the button is first pressed
        startTime = control.millis()  / 1000;
        console.log(`${startTime} starttime`)
        wasPressed = true;
    } else if (wasPressed) {
        // Calculate the time elapsed in seconds and show it on the screen
        timePressed = (control.millis() - startTime) / 1000;
        console.log(`${timePressed} =  ${control.millis()  / 1000 } - ${startTime}`);
        basic.showNumber(timePressed);
        wasPressed = true;
    }
    wasPressed = false;
});

let wasPressedB = false;
while (true) {
    if(input.buttonIsPressed(Button.B)) {
        if (!wasPressedB) {
            startTime = control.millis()  / 1000;
            console.log(`${startTime} starttime`)
            wasPressedB = true;
        }
    wasPressed = false;
        if (wasPressedB) {
            timePressed = (control.millis() - startTime) / 1000;
            console.log(`${timePressed} = ${control.millis()  / 1000 } - ${startTime}`);
            basic.showNumber(timePressed);
            wasPressed = true;
        }
    wasPressed = false;
    }
}












