<script>
document.getElementById("dataForm").addEventListener("submit", function(event){
  event.preventDefault();

  var formData = new FormData(this);

  fetch('https://api.github.com/repos/your-username/your-repo/dispatches', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_GITHUB_TOKEN',
      'Accept': 'application/vnd.github.v3+json'
    },
    body: JSON.stringify({
      event_type: 'submit_form',
      client_payload: {
        name: formData.get('name'),
        unitNumber: formData.get('unitNumber')
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    alert("فرم با موفقیت ارسال شد!");
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
</script>
