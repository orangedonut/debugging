
function checkAnswer() {
    var selectedAnswer = document.querySelector("input[name='mythology']:checked").value;
    if (selectedAnswer == "persephone") {
        alert("Correct!")
    } else {
        alert("Wrong!")
    }
}
