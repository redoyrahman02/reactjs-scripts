// Create a new FormData object
const formData = new FormData();

// Append the file to the FormData object
formData.append('file', file);

// Send the POST request using the fetch API
fetch('/upload', {
  method: 'POST',
  body: formData
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
