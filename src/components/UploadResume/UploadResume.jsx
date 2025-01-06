import React, { useState,useEffect } from 'react';
import {Section,Header,Footer} from '../index';
import { Link } from "react-router-dom"
import Button from "../Button";


function UploadResume() {
  // State to store the selected file
  let [file, setFile] = useState([]);
  let [fileName, setFileName] = useState('');
  let [errorMessage, setErrorMessage] = useState('');
  const [userFiles, setUserFiles] = React.useState([])

  useEffect(() => {
    console.log('Navigating to UploadResume');
  }, []);

  

  let handleUpload = (e) => {
    // if (userFiles && userFiles.length > 0) {
      // const formData = new FormData();
  
      const fileInput = document.querySelector('#fileInput');
 
      if (fileInput && fileInput.files.length > 0) {
          const formData = new FormData(); 
          for (let i = 0; i < fileInput.files.length; i++) {
          const file = fileInput.files[i]; 
          formData.append('files[]', file); 
        }
  
      // Debug: Check FormData contents
      for (let [key, value] of formData.entries()) {
        console.log(key, value); // Should log 'files' and the File object
      }
  
      fetch('http://localhost:5432/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok && response.headers.get('content-type')?.includes('application/json')) {
            return response.json();
          } else {
            return response.text().then((text) => {
              console.error('Non-JSON response:', text);
              throw new Error('Server did not return a JSON response');
            });
          }
        })
        .then((data) => {
          console.log('File uploaded successfully:', data);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    } else {
      setErrorMessage('Please select at least one file.');
    }
  };
  
  
  const handleCancel = (e) => {
    setFile(null);
    setFileName(null);
    setErrorMessage('');
    setUserFiles([]);

  };

  const addFile = (e) => {
    const files = e.target.files;
    const fileNames = [];
    for (let i = 0; i < files.length; i++) {
      fileNames.push(files[i].name);
    }
    setUserFiles([...userFiles, ...fileNames]);
    console.log(Array.from(e.target.files));

};
const removeFile = (i) => {
  setUserFiles([...userFiles.filter((_, index) => index !== i)]);
};

  return (
    <div ClassName="flex flex-col min-h-screen">
    <Header />
    <Section>
    <div className="w-full h-screen flex flex-grow items-center justify-center">

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <div className="container relative z-2 body-2 font-bold text-xl mb-5 text-center">Upload Profiles</div>
    <input 
        className="bg-transparent text-transparent"
        type="file" 
        accept="application/pdf,.doc,.docx,.txt" 
        onChange={(e) => addFile(e)}
        multiple
        id = "fileInput"
      />
      <div className='flex flex-wrap'>
        <p className='mt-5 mb-3'>Selected file: {fileName}</p>
      </div>
      {userFiles.length > 0 && (
    <ul className='mt-1 mb-1'>
      {userFiles.map((userFile, index) => {
        return (
          <li key={index} className="flex justify-between items-center">
            <span>{userFile}</span>
            <button
              type="button"
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={() => {
                removeFile(index);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  )}
  </div>


  <div className="flow-root">
  {/* <button className="bg-white float-left hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-5 mb-2" onClick={handleCancel}>
      Cancel
      </button> */}
      <Button
       className="float-left mb-5"
       white onClick={handleCancel}>
        Cancel
      </Button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {/* <button className="bg-white float-right hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded mr-5 mb-2 shadow" onClick={handleUpload}>
      Upload
      </button> */}
      <Button 
      className="float-right mb-5"
      white onClick={handleUpload}>
        Upload
      </Button>

  </div>
  <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <Link to="/home">
            <Button white>
                Back to Home
            </Button>
          </Link>
        </div>
</div>

    </div>

        
    </Section>
    <Footer />
    </div>
  
  );
};


export default UploadResume
