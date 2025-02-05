const url = "https://script.google.com/macros/s/AKfycbxZi2Mmrd6v6k_ocO3mUjQpSp8bNRWT5D4E1b5ZYsIINp3VDTwSftEq86G0fSdZEzIXtg/exec";  // لینک جدید Web App را اینجا بگذار

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
