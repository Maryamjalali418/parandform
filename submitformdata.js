<form id="dataForm" enctype="multipart/form-data">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <label for="unitNumber">Unit Number:</label>
  <input type="text" id="unitNumber" name="unitNumber">
  
  <label for="fileUpload">Upload File:</label>
  <input type="file" id="fileUpload" name="fileUpload">
  
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById("dataForm").addEventListener("submit", function(event){
  event.preventDefault();

  var formData = new FormData(this);

  // آدرس Web App که از Google Apps Script دریافت کردی
  fetch('https://script.google.com/macros/s/AKfycbzGCCImYkNfDygmOi22uxao69-s8jesWZGky7br7DrtOokQY2iwM2NunLxstjl1X3y8XA/exec', {
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
