<form id="dataForm" enctype="multipart/form-data">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <label for="unitNumber">Unit Number:</label>
  <input type="text" id="unitNumber" name="unitNumber">
  
  <label for="file">Upload File:</label>
  <input type="file" id="file" name="file">
  
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById("dataForm").addEventListener("submit", function(event){
  event.preventDefault();

  var formData = new FormData(this);

  // آدرس Web App که از Google Apps Script دریافت کردی
  fetch('https://script.google.com/macros/s/AKfycbz21wjl9NqMgEKUY5In7J7XMK5TwyKPILu968TnYT9BkKEU9Znmi5JSqCTKvZF1AYYn7Q/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    alert("فرم با موفقیت ارسال شد!");
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
</script>
