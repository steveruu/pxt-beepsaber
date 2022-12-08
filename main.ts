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

let prvniCas = control.millis();
let wasPressed = input.buttonIsPressed(Button.A);

let count = () => {
    let timePassedSinceStart;
    let time;

    if (input.buttonIsPressed(Button.A)) {
        if(!wasPressed) {
            prvniCas = control.millis();
            wasPressed = true;
        } else {
        if (wasPressed) {
            time = control.millis();
            timePassedSinceStart = time - (prvniCas / 1000);
            basic.showNumber(timePassedSinceStart)
            }
        }
    }
}

while (true) {
    count()
}