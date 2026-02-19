const getBonusBtn = document.querySelector("#get-bonus");
const form = document.querySelector("form");
let balance = document.getElementById("balance");

// Flag to track if the bonus has already been claimed
let isBonusTaken = false; 

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    // couponCode value 
    let couponCode = document.querySelector("#input-num").value.trim();

    // Fixed Coupon and Amount
    const validCoupon = "PAYOO2026";
    const bonusAmount = 500;

    // Input validation
    if (couponCode === "") {
        alert("Please enter a coupon code.");
        return;
    }

    if (isBonusTaken) {
        alert("You have already claimed your bonus!");
        return;
    }

    // Logic for coupon matching and balance update
    if (couponCode === validCoupon) {
        const currentBalance = parseFloat(balance.textContent);
        const newBalance = currentBalance + bonusAmount;

        balance.textContent = newBalance;
        
        // Mark the bonus as taken
        isBonusTaken = true;
        alert(`Success! $${bonusAmount} bonus added. New Balance: $${newBalance}`);
        
        form.reset();
    } else {
        alert("Invalid coupon code. Please try again.");
    }

});

