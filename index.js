

function diceeGame(randomNumber, imageClass) {

    var randomDiceImage = "dice" + randomNumber + ".png"; //dice1.png - dice6.png

    var imageInFolder = "images/" + randomDiceImage;

    document.querySelector(imageClass).setAttribute("src", imageInFolder);

}

function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);

    diceeGame(randomNumber1, ".img1");

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    diceeGame(randomNumber2, ".img2");




    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "狮子大王 赢了!";
        document.querySelector("h1").style.fontSize = "3rem";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "论江湖 赢了!";
        document.querySelector("h1").style.fontSize = "3rem";
    }
    else {
        document.querySelector("h1").textContent = "平手!";
        document.querySelector("h1").style.fontSize = "3rem";
    }

}

