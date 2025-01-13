import React, { useState, useEffect } from 'react';
import { Section, Header, Footer, Contact, StarsCanvas } from '../index';
import { Link } from "react-router-dom";
import Button from '../Button';
import { heroBackground } from '../../assets';
import { LeftCurve, RightCurve } from "../design/Collaboration";
import { brainwaveSymbol, check, SelectifyTabLogo } from "../../assets";
import { collabApps, collabContent, collabText } from "../../constants";
import TimedParagraphs from './TimedParagraphs';


function UploadResume() {
  // State to store the selected file
  let [file, setFile] = useState([]);
  let [fileName, setFileName] = useState('');
  let [errorMessage, setErrorMessage] = useState('');
  const [userFiles, setUserFiles] = React.useState([]);
  const [showTimedParagraphs, setShowTimedParagraphs] = useState(false);

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
        setShowTimedParagraphs(true);
    } else {
      setErrorMessage('Please select at least one file.');
      setShowTimedParagraphs(false);
    }
  };

  const handleCancel = (e) => {
    setFile(null);
    setFileName(null);
    setErrorMessage('');
    setUserFiles([]);
    setShowTimedParagraphs(false);
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
    <div className="">
      {/* <div
        className="absolute left-1/2 w-full h-full -translate-x-1/2"
        style={{
          background: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: -1,
        }}
      ></div> */}

      <div className="flex flex-col min-h-screen">
        <Header />
        {/* <Section>
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

                Error Modal
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
        </Section> */}

        <Section crosses>
        <div className="container lg:flex">
          <div className="max-w-[40rem]  flex-col">
            <h2 className="h2 mb-4 md:mb-8 font-bangers uppercase">
              Upload Profiles
            </h2>

            <ul className="max-w-[22rem] mb-3 md:mb-3">
              {collabContent.map((item) => (
                <><li className="mb-3 py-3" key={item.id}>
                  <div className="flex items-center">
                    <img src={check} width={24} height={24} alt="check" />
                    <input
                      className="bg-transparent text-transparent ml-3 font-bangers"
                      type="file"
                      accept="application/pdf,.doc,.docx,.txt"
                      onChange={(e) => addFile(e)}
                      multiple
                      id="fileInput" />
                    {/* <h6 className="body-2 ml-5">{item.title}</h6> */}
                  </div>
                  {item.text && (
                    <p className="body-2 mt-3 text-n-4">{item.text}</p>
                  )}
                </li><li>
                <h4 className="body-1 ml-5 h-11 font-bangers ">Selected files : {fileName}</h4>
                  </li></>
              ))}
            </ul>
            
            <div className="max-h-52 overflow-y-auto mb-6">
            {userFiles.length > 0 && (
            <ul className='max-w-[22rem] ml-4'>
              {userFiles.map((userFile, index) => {
                return (
                  <li key={index} className="p-1">
                    <span>{userFile}</span>
                    <button
                      type="button"
                      className="ml-2 text-purple-500 hover:text-red-700"
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
            {showTimedParagraphs && <TimedParagraphs />}
            </div>

            <div className="flow-root flex-grow">
              <Button 
                className="float-left mb-7"
                onClick={handleUpload}
              >
                Upload
              </Button>
              
              <Button
                className="float-right mb-7"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              
            </div>

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
                <Button>
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:ml-auto xl:w-[38rem] mt-4">
            <p className="body-2 mb-8 text-n-4 md:mb-16 lg:w-[30rem] lg:mx-auto">
              {collabText}
            </p>

            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    <img
                      src={SelectifyTabLogo}
                      width={48}
                      height={48}
                      alt="SelectifyTabLogo"
                    />
                  </div>
                </div>
              </div>

              <ul>
                {collabApps.map((app, index) => (
                  <li
                    key={app.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                      index * 45
                    }`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                        index * 45
                      }`}
                    >
                      <img
                        className="m-auto"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
        </Section>


        <Footer />
      </div>
    </div>
  );
}

export default UploadResume;
