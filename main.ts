let number1 = 4;
let preBtnAPressed = input.buttonIsPressed(Button.A);
let preBtnBPressed = input.buttonIsPressed(Button.B);

let makej = function() {
    if (input.buttonIsPressed(Button.A) && number1 >= 1) {
        if (!preBtnAPressed) {
            number1 -= 1;
            preBtnAPressed = true;
        }
    } else {
        preBtnAPressed = false;
    }

    if (input.buttonIsPressed(Button.B) && number1 <= 9) {
        if (!preBtnBPressed) {
            number1 += 1;
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