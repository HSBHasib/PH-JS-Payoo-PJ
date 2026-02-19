const payBillForm = document.querySelector("#paybill-form");

payBillForm.addEventListener("submit", function(dets) {
    dets.preventDefault();

    // ইনপুট ভ্যালুগুলো নেওয়া
    const bankName = document.querySelector("#pay-bank").value;
    const accountNumber = document.querySelector("#pay-account").value;
    const amount = document.querySelector("#pay-amount").value;
    const pinNumber = document.querySelector("#pay-pin").value;

    // ভ্যালিডেশন
    if (bankName === "" || accountNumber === "" || amount === "" || pinNumber === "") {
        alert("Please fill up all the fields.");
        return;
    }

    const convertedAmount = parseFloat(amount);
    if (isNaN(convertedAmount) || convertedAmount <= 0) {
        alert("Please enter a valid amount to pay.");
        return;
    }

    // পিন চেক (ধরে নিচ্ছি সঠিক পিন ১২৩৪)
    if (pinNumber === "1234") {
        const balanceElement = document.getElementById("balance");
        const currentBalance = parseFloat(balanceElement.innerText);

        // পর্যাপ্ত ব্যালেন্স আছে কিনা চেক
        if (convertedAmount > currentBalance) {
            alert("Insufficient balance!");
            return;
        }

        // ব্যালেন্স কমানো
        const newBalance = currentBalance - convertedAmount;
        balanceElement.innerText = newBalance;

        alert(`Success! $${convertedAmount} paid to ${bankName} from account ${accountNumber}. \nRemaining Balance: $${newBalance}`);
        
        payBillForm.reset();
    } else {
        alert("Incorrect PIN! Please try again.");
    }
});