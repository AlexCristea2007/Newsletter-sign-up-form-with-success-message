function sendData(event) {
    event.preventDefault();

    var emailInput = document.getElementById("email");

    if (emailInput.checkValidity()) {
        document.getElementById("1st-block").style.display = "none";
        document.getElementById("2nd-block").style.display = "block";
    } else {
        alert("Please enter a valid email address.");
    }
}

function clearMessage() {
    document.getElementById("1st-block").style.display = "flex";
    document.getElementById("2nd-block").style.display = "none";
}
