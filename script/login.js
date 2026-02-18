let inpNum = document.querySelector("#input-num");
let inpPin = document.querySelector("#input-pin");
let loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", function(){
    // Regex patterns for phone number and PIN validation
    const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    const pinRegex = /^\d{4}$/;

    // Get the trimmed values from the input fields
    let numValue = inpNum.value.trim();
    let pinValue = inpPin.value.trim();

    let num = true;
    let pin = true;

    console.log(numValue);
    console.log(pinValue);

    if( (numValue === "" || !phoneRegex.test(numValue))) {
        num = false;
        alert("Please enter a valid phone number.");
        return;
    }

    if( (pinValue === "" || !pinRegex.test(pinValue))) {
        pin = false;
        alert("Please enter a valid PIN.");
        return;
    }
    
    if(num && pin) {
        window.location.href = "home.html";
    }
    
});
