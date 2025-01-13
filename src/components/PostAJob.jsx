import React from 'react';
import Header from './Header';
import { heroBackground } from '../assets';

function PostAJob() {
  return (
    <div className="h-screen w-screen relative flex items-center justify-center">
      <div
        className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2"
        style={{
          background: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: -1,
        }}
      ></div>
      <div className="flex flex-col max-h-screen w-full px-6">
        <Header />

        {/* Flex container for the cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 mx-auto">
          {/* Card 1 */}
          <a className="relative bg-gray-900 block p-6 border border-gray-100 rounded-2xl max-w-xs w-full" href="#">
            <div className="my-4">
              <h2 className="text-white text-2xl font-bold pb-2">Card 1</h2>
              <p className="text-gray-300 py-1">Card description or content goes here.</p>
            </div>
            <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300 mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
              </svg>
              <span className="ml-2">Invite</span>
            </button>
          </a>

          {/* Card 2 */}
          <a className="relative bg-gray-900 block p-6 border border-gray-100 rounded-2xl max-w-xs w-full" href="#">
            <div className="my-4">
              <h2 className="text-white text-2xl font-bold pb-2">Card 2</h2>
              <p className="text-gray-300 py-1">Card description or content goes here.</p>
            </div>
            <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300 mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
              </svg>
              <span className="ml-2">Invite</span>
            </button>
          </a>

          {/* Card 3 */}
          <a className="relative bg-gray-900 block p-6 border border-gray-100 rounded-2xl max-w-xs w-full" href="#">
            <div className="my-4">
              <h2 className="text-white text-2xl font-bold pb-2">Card 3</h2>
              <p className="text-gray-300 py-1">Card description or content goes here.</p>
            </div>
            <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300 mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
              </svg>
              <span className="ml-2">Invite</span>
            </button>
          </a>

          {/* Card 4 */}
          <a className="relative bg-gray-900 block p-6 border border-gray-100 rounded-2xl max-w-xs w-full" href="#">
            <div className="my-4">
              <h2 className="text-white text-2xl font-bold pb-2">Card 4</h2>
              <p className="text-gray-300 py-1">Card description or content goes here.</p>
            </div>
            <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300 mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
              </svg>
              <span className="ml-2">Invite</span>
            </button>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default PostAJob;
