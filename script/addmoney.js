const addMoneyBtn = document.querySelector("#addMoney-btn");
const form = document.querySelector("form");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    // selectedBank, accountNum, amountStr, pin values 
    let selectedBank = document.querySelector("#bank-select").value;
    let accountNum = document.querySelector("#input-account-num").value.trim();
    let amountStr = document.querySelector("#input-amount").value.trim();
    let pin = document.querySelector("#input-pin").value.trim();


    // Regex patterns
    const accountRegex = /^\d{11}$/;
    const amountRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
    const pinRegex = /^\d{4}$/;

    // Input validation
    if (selectedBank === "Select a bank") {
        alert("Please select a bank.");
        return;
    }

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

    // Balance update logic (for demonstration, we will just add the amount to a displayed balance)
    const currentBalance = parseFloat(document.getElementById("balance").innerText);
    const addedAmount = parseFloat(amountStr);
    const newBalance = currentBalance + addedAmount;

    document.getElementById("balance").innerText = newBalance;
    
    alert(`Success! $${addedAmount} added. New Balance: $${newBalance}`);

    form.reset();

});


