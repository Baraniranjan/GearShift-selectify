import React, { useState, useEffect } from 'react';
import { Section, Header, Footer } from '../index';
import { Link } from "react-router-dom";
import Button from "../Button";
import { heroBackground } from '../../assets';

function UploadResume() {
  // State to store the selected file
  let [file, setFile] = useState([]);
  let [fileName, setFileName] = useState('');
  let [errorMessage, setErrorMessage] = useState('');
  const [userFiles, setUserFiles] = React.useState([]);

  useEffect(() => {
    console.log('Navigating to UploadResume');
  }, []);

  let handleUpload = (e) => {
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
    <div className="h-screen w-screen">
      <div
        className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2"
        style={{
          background: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: -1,
        }}
      ></div>

      <div className="flex flex-col min-h-screen">
        <Header />
        <Section>
          <div className="w-full h-screen flex flex-grow items-center justify-center">
            <div className="max-w-md w-full bg-black rounded-lg shadow-lg p-10">
              <div className="relative text-center p-4 px-1 py-1 md:px-10">
                <img
                  alt="Lewis Daniel"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  className="relative inline-block h-32 w-32 rounded-full border border-white"
                />
              </div>

              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-10 py-4">
                  <div className="container relative z-10 body-2 font-bold text-xl mb-20 text-center">Upload Profiles</div>
                  <input
                    className="bg-transparent text-transparent"
                    type="file"
                    accept="application/pdf,.doc,.docx,.txt"
                    onChange={(e) => addFile(e)}
                    multiple
                    id="fileInput"
                  />
                  <div className="flex flex-wrap">
                    <p className="mt-5 mb-3">Selected file: {fileName}</p>
                  </div>
                  {userFiles.length > 0 && (
                    <ul className="mt-1 mb-1">
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
                  <Button
                    className="float-left mb-7"
                    white onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button 
                    className="float-right mb-7"
                    white onClick={handleUpload}
                  >
                    Upload
                  </Button>
                </div>

                {/* Error Modal */}
                {errorMessage && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 text-center">
                      <p className="text-red-500 font-bold">{errorMessage}</p>
                      <Button
                        className="mt-4"
                        white onClick={() => setErrorMessage('')}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                )}

                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                  <Link to="/home">
                    <Button white>
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          
        </Section>
        <Footer />
      </div>
    </div>
  );
}

export default UploadResume;
