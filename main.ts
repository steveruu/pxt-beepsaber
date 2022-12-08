let number1 = 4;
let preBtnAPressed = input.buttonIsPressed(Button.A);
let preBtnBPressed = input.buttonIsPressed(Button.B);

let makejA = () => {
    number1 -= 1;
}

let makejB = () => {
    number1 += 1;
}


let makej = function() {
    if (input.buttonIsPressed(Button.A) && number1 >= 1) {
        if (!preBtnAPressed) {
            makejA();
            preBtnAPressed = true;
        }
    } else {
        preBtnAPressed = false;
    }

    if (input.buttonIsPressed(Button.B) && number1 <= 9) {
        if (!preBtnBPressed) {
            makejB();
            preBtnBPressed = true;
        }
    } else {
        preBtnBPressed = false;
    }

    whaleysans.showNumber(number1)
}

while (true) {
    
    makej()
}