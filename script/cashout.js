const addCashoutBtn = document.querySelector("#add-cashout");
const form = document.querySelector("form");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    // agentNum, amountStr, pin values 
    let agentNum = document.querySelector("#input-agent-num").value.trim();
    let amountStr = document.querySelector("#input-cashout-amount").value.trim();
    let pin = document.querySelector("#input-cashout-pin").value.trim();


    // Regex patterns (তোমার দেওয়া প্যাটার্ন)
    const agentRegex = /^\d{11}$/;
    const amountRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
    const pinRegex = /^\d{4}$/;

    // Input validation (হুবহু তোমার লজিক)
    if (!agentRegex.test(agentNum)) {
        alert("Please enter a valid 11-digit agent number.");
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
    const withdrawAmount = parseFloat(amountStr);
    
    // শুধু বিয়োগফল বের করা
    const newBalance = currentBalance - withdrawAmount;

    document.getElementById("balance").innerText = newBalance;
    
    alert(`Success! $${withdrawAmount} withdrawn. New Balance: $${newBalance}`);

    form.reset();
});