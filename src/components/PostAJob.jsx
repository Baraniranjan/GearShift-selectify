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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-24 mx-auto">
          {/* Card 1 */}
          <a className="relative bg-gray-900 block p-6 border border-gray-100 rounded-2xl max-w-xs w-full" href="#">
            <div className="my-4">
              <h2 className="text-white text-xl font-bold pb-2">A New Dawn: Feature Film Table Read</h2>
              <p className="text-gray-300 py-1">Los Angeles, CA.</p>
              <p className="text-gray-300 py-1">Join us for an exciting table read of the new action-packed drama 'A New Dawn'.</p>
              <h2 className="text-white pb-2">Shoots Feb. 10 in Los Angeles, CA.</h2>
            </div>
            <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300 mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
              </svg>
              <span className="ml-2">Post</span>
            </button>
          </a>

          {/* Card 2 */}
          <a className="relative bg-gray-900 block p-6 border border-gray-100 rounded-2xl max-w-xs w-full" href="#">
            <div className="my-4">
              <h2 className="text-white text-xl font-bold pb-2">Mystery in the City: Table Read</h2>
              <p className="text-gray-300 py-1">New York, NY.</p>
              <p className="text-gray-300 py-1">Casting call for a thrilling mystery film. Read through the gripping scenes in 'Mystery in the City'.</p>
              <h2 className="text-white pb-2">Shoots Feb. 14 in New York, NY.</h2>
            </div>
            <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300 mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
              </svg>
              <span className="ml-2">Post</span>
            </button>
          </a>

          {/* Card 3 */}
          <a className="relative bg-gray-900 block p-6 border border-gray-100 rounded-2xl max-w-xs w-full" href="#">
            <div className="my-4">
              <h2 className="text-white text-xl font-bold pb-2">Future Tides: A Sci-Fi Script Reading</h2>
              <p className="text-gray-300 py-1">Austin, TX.</p>
              <p className="text-gray-300 py-1">Join us for an out-of-this-world table read of 'Future Tides,' a science fiction epic.</p>
              <h2 className="text-white pb-2">Shoots Feb. 18 in Austin, TX.</h2>
            </div>
            <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300 mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
              </svg>
              <span className="ml-2">Post</span>
            </button>
          </a>

          {/* Card 4 */}
          <a className="relative bg-gray-900 block p-6 border border-gray-100 rounded-2xl max-w-xs w-full" href="#">
            <div className="my-4">
              <h2 className="text-white text-xl font-bold pb-2">Heartstrings: A Romantic Drama Read</h2>
              <p className="text-gray-300 py-1">Chicago, IL.</p>
              <p className="text-gray-300 py-1">Be part of the table read for 'Heartstrings,' a romantic drama, emotions and twists.</p>
              <h2 className="text-white pb-2">Shoots Feb. 22 in Chicago, IL.</h2>
            </div>
            <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300 mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
              </svg>
              <span className="ml-2">Post</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PostAJob;
