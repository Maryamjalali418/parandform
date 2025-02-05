const url = "https://script.google.com/macros/s/AKfycbwKgt4bhDv_nOUWJolMp74_rymNRwRwN08O-NYeRFIg/dev";  // لینک جدید Web App را اینجا بگذار

document.getElementById("paymentForm").addEventListener("submit", function(event) {
  event.preventDefault();  // جلوگیری از ریفرش شدن صفحه

  let formData = new FormData(this);
  let params = new URLSearchParams(formData).toString();

  console.log("Sending data:", params);

  fetch(url, {
    method: "POST",
    body: params,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  })
  .then(response => response.text())
  .then(data => {
    console.log("Response from server:", data);
    alert(data);
  })
  .catch(error => console.error("Error:", error));
});
