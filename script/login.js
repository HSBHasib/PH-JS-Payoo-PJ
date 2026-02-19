let inpNum = document.querySelector("#input-num");
let inpPin = document.querySelector("#input-pin");
let loginBtn = document.querySelector("#login-btn");

function handleLogin() {
    // Regex patterns for phone number and PIN validation
    const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    const pinRegex = /^\d{4}$/;

    // Get the trimmed values from the input fields
    let numValue = inpNum.value.trim();
    let pinValue = inpPin.value.trim();

    if (!phoneRegex.test(numValue)) {
        alert("Please enter a valid phone number.");
        return;
    }

    if (!pinRegex.test(pinValue)) {
        alert("Please enter a valid PIN.");
        return;
    }
    
    window.location.assign("./home.html");
}

loginBtn.addEventListener("click", handleLogin);


[inpNum, inpPin].forEach(input => {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            handleLogin();
        }
    });
});
