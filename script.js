const form = document.getElementById("yourFormId");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let data = {
        unit_number: document.getElementById("unitNumber").value,
        tenant_name: document.getElementById("tenantName").value,
        owner_name: document.getElementById("ownerName").value,
        payment_amount: document.getElementById("paymentAmount").value,
        payment_date: document.getElementById("paymentDate").value,
        phone_number: document.getElementById("phoneNumber").value,
        comments: document.getElementById("comments").value
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
