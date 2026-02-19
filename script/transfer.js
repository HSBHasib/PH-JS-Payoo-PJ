const addTransferBtn = document.querySelector("#add-transfer");
const form = document.querySelector("form");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    // accountNum, amountStr, pin values 
    let accountNum = document.querySelector("#transfer-account-num").value.trim();
    let amountStr = document.querySelector("#transfer-amount").value.trim();
    let pin = document.querySelector("#transfer-pin").value.trim();


    // Regex patterns 
    const accountRegex = /^\d{11}$/;
    const amountRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
    const pinRegex = /^\d{4}$/;

    // Input validation 
    if (!accountRegex.test(accountNum)) {
        alert("Please enter a valid 11-digit account number.");
        return;
    }

    if (!amountRegex.test(amountStr) || parseFloat(amountStr) <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (!pinRegex.test(pin)) {
        alert("Please enter a 4-digit PIN.");
        return;
    }

    // Balance update logic
    const currentBalance = parseFloat(document.getElementById("balance").innerText);
    const transferAmount = parseFloat(amountStr);
    
    // balance update logic (for demonstration, we will just subtract the amount from a displayed balance)
    const newBalance = currentBalance - transferAmount;

    document.getElementById("balance").innerText = newBalance;
    
    alert(`Success! $${transferAmount} transferred to ${accountNum}. New Balance: $${newBalance}`);

    form.reset();

});