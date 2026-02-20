document.addEventListener("DOMContentLoaded", function() {
    let btns = document.querySelectorAll(".btn");

    btns.forEach(btn => {
        btn.addEventListener("click", function() {    
            const btnText = btn.textContent.toLowerCase().trim();

            if (btnText.includes("add money")) {
                window.location.href = "addmoney.html";
            } 
            else if (btnText.includes("cashout")) {
                window.location.href = "cashout.html";
            }
            else if (btnText.includes("get bonus")) {
                window.location.href = "getbonus.html";
            }
            else if (btnText.includes("pay bill")) {
                window.location.href = "paybill.html";
            }
            else if (btnText.includes("transfer")) {
                window.location.href = "transfer.html";
            }
            else if (btnText.includes("transactions")) {
                window.location.href = "transaction.html";
            }
        });
    });
});