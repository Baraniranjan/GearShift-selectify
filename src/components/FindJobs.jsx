import React from 'react';
import Header from './Header';
import { heroBackground } from '../assets';
import Section from './Section';
import Button from './Button';
import Footer from './Footer';

const jobListings = [
  {
    title: "Uncertain Days’ Feature Film Stage Reading",
    location: "Manhattan, NY",
    description: "Casting a table read for the second draft of 'Uncertain Days.'",
    datesAndLocation: "Shoots Jan. 18 in Manhattan, NY."
  },
  {
    title: "Another Feature Film Stage Reading",
    location: "Los Angeles, CA",
    description: "Casting a table read for the first draft of 'Another Feature.'",
    datesAndLocation: "Shoots Jan. 20 in Los Angeles, CA."
  },
  {
    title: "Another Feature Film Stage Reading",
    location: "Los Angeles, CA",
    description: "Casting a table read for the first draft of 'Another Feature.'",
    datesAndLocation: "Shoots Jan. 20 in Los Angeles, CA."
  },
  // Add more job listings here
];

function FindJobs() {
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
      <div className="flex flex-col max-h-screen">
        <Header />
      </div>

      <Section>
        {jobListings.map((job, index) => (
          <div key={index} className="mt-6">
            <div className="max-w-4xl px-10 py-6 mx-auto bg-gray-900 rounded-lg shadow-md">
              {/* Job Title */}
              <div className="text-4xl font-bold text-white">
                {job.title}
              </div>

              {/* Location */}
              <div className="text-sm font-light text-gray-400 mt-2">
                {job.location}
              </div>

              {/* Description Header */}
              <div className="mt-4 text-lg font-bold text-white">
                Description:
              </div>

              {/* Description */}
              <div className="mt-2 text-gray-400">
                {job.description}
              </div>

              {/* Dates & Locations Header */}
              <div className="mt-4 text-lg font-bold text-white">
                Dates & Locations:
              </div>

              {/* Dates & Locations */}
              <div className="mt-2 text-gray-400">
                {job.datesAndLocation}
              </div>


              {/* Apply Now Button */}
              <Button className="mt-4" white >
                        Apply
              </Button>
              </div>
            </div>
          
        ))}
      </Section>
      <Footer />
    </div>
  );
}

export default FindJobs;
