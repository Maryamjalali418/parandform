const form = document.getElementById("paymentForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let data = {
        unit_number: document.getElementById("unit_number").value,   // اصلاح
        tenant_name: document.getElementById("tenant_name").value,   // اصلاح
        owner_name: document.getElementById("owner_name").value,     // اصلاح
        payment_amount: document.getElementById("payment_amount").value, // اصلاح
        payment_date: document.getElementById("payment_date").value,   // اصلاح
        phone_number: document.getElementById("phone_number").value,   // اصلاح
        comments: document.getElementById("comments").value          // اصلاح
    };

    fetch("https://script.google.com/macros/s/AKfycbwKgt4bhDv_nOUWJolMp74_rymNRwRwN08O-NYeRFIg/dev", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});
