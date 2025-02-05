const form = document.getElementById("paymentForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let data = {
        unit_number: document.getElementById("unit_number").value,
        tenant_name: document.getElementById("tenant_name").value,
        owner_name: document.getElementById("owner_name").value,
        payment_amount: document.getElementById("payment_amount").value,
        payment_date: document.getElementById("payment_date").value,
        phone_number: document.getElementById("phone_number").value,
        comments: document.getElementById("comments").value
    };

    fetch("https://script.google.com/macros/s/AKfycbw9sQb6SiY7k63n2Fq3-VgOFeBnDBZxHJk7Eas-w8Hgf0UaXAQ28SAnWqXdy-fBtukJwA/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
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
