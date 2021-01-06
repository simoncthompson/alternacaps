function alternacaps(string) {
    let alternacapsArray = [];
    for (i = 0; i < string.length; i++) {
        if (i == 0) {
            alternacapsArray.push(string[i].toLowerCase());
        } else if (i % 2 !== 0) {
            alternacapsArray.push(string[i].toUpperCase());
        } else if (i % 2 == 0) {
            alternacapsArray.push(string[i].toLowerCase());
        }
    }
    let result = document.createElement("p");
    result.innerHTML = alternacapsArray.join("");
    document.getElementById("results-div").appendChild(result);
}