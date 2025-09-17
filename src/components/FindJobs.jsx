import React, { useState } from 'react';
import Header from './Header';
import { heroBackground } from '../assets';
import Section from './Section';
import Button from './Button';
import Footer from './Footer';
import { actorjob } from '../assets';
import { actressjob } from '../assets';
import { singerjob } from '../assets';
import { dancerjob } from '../assets';
import { camerajob } from '../assets';
import { actor2job } from '../assets';
import { actress2job } from '../assets';
import { voicejob } from '../assets';

function FindJobs() {
  const cardData = [
    {
      //Actress
      title: 'A Good Daughter',
      description: 'Seeking lead and supporting actors for "A Good Daughter," a student short that will be shot on 16 mm film for London Film School. Logline: When a carefully cooked dinner for parents gets ruined, Martha needs to choose between her pattern to deserve love by being a perfectionist and a brave step to let people love her just as she is.',
      location: 'Shoots 8-11 February in Bradford, UK.',
      imageUrl: actressjob,
      internalCards: [
        {
          name:'Martha',        
          role:'Lead',
          gender:'Female',
          age: '14-20',
        },
        {
          name:'Mother',        
          role:'Supporting',
          gender:'Female',
          age: '45-50',
        },
      ],
    },
    {
      //Actor
      title: 'Rocket Fuel',
      description: 'Casting lead and supporting roles for "Rocket Fuel," an upcoming BBC comedy',
      location: 'Shoots 8-11 April in Bradford, UK.',
      imageUrl: actorjob,
      internalCards:[
        {
          name:'Rolex',
          role:'Lead',
          gender: 'Male',
          age: '14-20',
        },
        {
          name:'Alex',
          role:'Supporting',
          gender: 'Male',
          age: '20-30',
        },
      ],
    },
    {
      //singer
      title: 'Scripted Stage Shows Across The UK, Singer/Performer',
      description: 'Casting lead and supporting roles for "Rocket Fuel," an upcoming BBC comedy',
      location: 'Shoots 8-11 April in Bradford, UK.',
      imageUrl: singerjob,    
      internalCards: [
        {
          name:'Singer/Performer',
          gender: 'Female',
          age: '25-30',
        },      
  
        {
          name:'Singer/Performer',
          gender: 'Male',
          age: '14-20',
        },
      ],},

      {
        //dancer
        title: 'Scripted Stage Shows Across The UK, Singer/Performer',
        description: 'Casting lead and supporting roles for "Rocket Fuel," an upcoming BBC comedy',
        location:'Works across Surrey and Hampshire',
        imageUrl: dancerjob,      
        internalCards: [
          {
            name:'Dance Instructor',
            gender: 'female',
            age: '25+',
          },      
    
          {
            name:'Yoga Instructor',
            gender: 'female',
            age: '20+',
          },
        ],},

        {
          //camera
          title: 'NU Start Charity Campaign, Photographer',
          description: 'Seeking a photographer for the youth charity NU Starts campaign developed by graphic designer David Cross. The goal of this initiative is to capture the essence of their impactful work and highlight the incredible talent, energy, and potential of the young people they serve',
          location:'Works across Surrey and Hampshire',
          imageUrl: camerajob,      
          internalCards: [
            {
              name:'Photographer',
              gender: 'Male',
              age: '25+',
            },      
          ],},

          {
            //actress
            title: 'Fylingdale Court',
            description: 'Casting "Fylingdale Court,an explainer video intended to get the viewer to understand and appreciate how you can talk about domestic heating using numbers in the same way that you can talk about time, distance and speed of a car, for instance. Mainly a technical presentation, it starts and ends with a fictional sequence set in an estate agents. This will be filmed in a green screen studio.',
            location:'Rehearses March 16; Shoots March 30 in London, England.',
            imageUrl: actress2job,      
            internalCards: [
              {
                name:'Monica',
                gender: 'Female',
                age: '35+',
              },      
            ],},

            {
              //actor
              title: 'The Hatch',
              description: '"Casting The Hatch," a student film. Synopsis: A couple’s peaceful life unravels when a malevolent demon trapped in their attic is freed.',
              location:'Shoots 14-16 March in Southend-on-Sea, England.',
              imageUrl: actor2job,      
              internalCards: [
                {
                  name:'Tom',
                  role:'Supporting',
                  gender: 'Male',
                  age: '25+',
                },      
              ],},

              {
                //voiceover 
                title: 'Global Management Consulting Firm VO',
                description: 'Seeking VO artist for global management consulting firms who help organizations develop and implement strategies. They work with clients in many sectors, including energy, financial services, and sustainability.',
                location:'Shoots Jan. 22-24 remotely or at Elstree recording studio in London.',
                imageUrl: voicejob,      
                internalCards: [
                  {
                    name:'VO Artist',
                    gender: 'Male',
                    age: '25+',
                  },      
                ],},

     
    // Add more card data as needed
  ];

  // Function to get the first N words of a description
  const getTruncatedDescription = (description, wordLimit = 10) => {
    const words = description.split(' ');
    if (words.length <= wordLimit) return description;
    return words.slice(0, wordLimit).join(' ') + '...';
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
      <div className="flex flex-col max-h-screen">
        <Header />
      </div>

      <Section>

      <div className="flex w-full">
        <div className="flex flex-col mt-12 space-y-8 w-2/3">

          {cardData.map((card, index) => {
            const [showFullDescription, setShowFullDescription] = useState(false);

            const handleToggleDescription = () => {
              setShowFullDescription(!showFullDescription);
            };

            return (
              <div key={index} className="flex flex-col justify-center h-auto">
                {/* Main card */}
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-purple-300 bg-gray-900">
                  
                  
                  {/* Left side image */}
                  <div className="w-full md:w-1/3 grid place-start">
                    <img
                      src={card.imageUrl}
                      alt="destination"
                      className="rounded-xl w-full h-56 object-cover" // Fixed height for images, with object-cover to maintain aspect ratio
                    />
                  </div>

                  {/* Content in the middle */}
                  <div className="w-full md:w-2/3 bg-gray-900 flex flex-col space-y-4 p-4">
                    <h3 className="text-white text-xl md:text-2xl font-bold">{card.title}</h3>

                    <p className="text-purple-300 text-base">
                      {showFullDescription
                        ? card.description
                        : getTruncatedDescription(card.description)}
                    </p>

                    <div className="mt-2">
                      <p
                        className="cursor-pointer text-purple-400 hover:text-purple-500 transition duration-200"
                        onClick={handleToggleDescription}
                      >
                        {showFullDescription ? 'Show Less' : 'Read More'}
                      </p>
                    </div>

                    <div className="flex items-center justify-start space-x-2">
                      <div className="mt-2 text-m font-bold text-white">Dates & Locations:</div>
                      <p className="text-purple-400 font-bold text-sm">{card.location}</p>
                    </div>

                    {/* Main card button */}
                    <div className="mt-6 md:w-full">
                      <Button className="px-2 py-1 bg-purple-400 text-white text-sm rounded-md hover:bg-purple-500 transition duration-200">
                        Apply
                      </Button>
                    </div>
                  </div>

                 {/* Internal cards container */}
        {card.internalCards && (
          <div className="md:w-1/2 flex flex-col space-y-3">
            {card.internalCards.map((internalCard, internalIndex) => (
              <div
                key={internalIndex}
                className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start"
              >
                {/* Render details based on available properties */}
                {internalCard.name && (
                  <div className="text-white font-bold text-l">{internalCard.name}</div>
                )}
                {internalCard.role && (
                  <p className="text-gray-400 text-base">{internalCard.role}</p>
                )}
                {internalCard.gender && (
                  <div className="text-gray-400 text-base">{internalCard.gender}</div>
                )}
                {internalCard.age && (
                  <p className="text-gray-400 text-base">{internalCard.age}</p>
                )}
                {internalCard.experience && (
                  <p className="text-gray-400 text-base">{internalCard.experience}</p>
                )}

<Button className="px-2 py-1 bg-purple-400 text-white text-sm rounded-md hover:bg-purple-500 transition duration-200">
                        Apply
                      </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
})}


        </div>
        <div className="flex flex-col mt-12 space-y-12 w-1/4">
  {/* Simple Card placed at the top */}
  <div className="bg-gray-900 p-6 rounded-2xl border border-purple-300 shadow-lg flex flex-col items-start w-full h-96 mr-12">
    <h3 className="text-white font-bold text-xl">13K</h3>
    <h3 className="text-white  text-xl">JOBS POSTED THIS YEAR</h3>
    <br></br>
    <br></br>
    <h3 className="text-white font-bold text-xl">£50</h3>
    <h3 className="text-white  text-xl">AVERAGE HOURLY PAY</h3>
    <br></br>
    <br></br>
    <h3 className="text-white font-bold text-xl">£16.4M</h3>
    <h3 className="text-white  text-xl">TOTAL COMPENSATION THIS YEAR</h3>
  </div>
</div>





        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default FindJobs;
