let userInput;
function alternacaps(userInput) {
    userInput = document.getElementById("user-input").value;
    let alternacapsArray = [];
    for (i = 0; i < userInput.length; i++) {
        if (i == 0) {
            alternacapsArray.push(userInput[i].toLowerCase());
        } else if (i % 2 !== 0) {
            alternacapsArray.push(userInput[i].toUpperCase());
        } else if (i % 2 == 0) {
            alternacapsArray.push(userInput[i].toLowerCase());
        }
    }
    let result = document.createElement("p");
    result.id = "result";
    result.innerHTML = alternacapsArray.join("");
    document.getElementById("results-div").appendChild(result);
}