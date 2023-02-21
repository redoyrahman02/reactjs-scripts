import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    if (selectedFile) {
      // Read the selected file as a binary string
      const reader = new FileReader();
      reader.readAsBinaryString(selectedFile);
      reader.onload = () => {
        // Convert the binary string to a base64-encoded string
        const base64File = btoa(reader.result);

        // Send a POST request to the Lambda function with the base64-encoded file data
        axios.post('https://endpoint?file_name='+ selectedFile.name , {
          file: base64File
        }).then(response => {
          console.log(response);
        }).catch(error => {
          console.error(error);
        });
      };
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload File</button>
    </div>
  );
}

export default App;
