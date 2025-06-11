// This is the JavaScript for the Math Quiz Game. //
// It handles the game logic, user interactions, and displays the questions. //
// Wait For DOM to Load. //

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
               alert("You clicked the submit button!"); 
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

/**
 * The Main game "loop", called when the script is first loaded.
 * and after the user's answer has been processed.
 */
function runGame(){
    // Create two random numbers between 1 and 25.
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}