import React, { useState } from 'react';

export default function ScreenProfileTable({ data }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Profiles Based on Roles</h1>
      
      <div className="overflow-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Age</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Gender</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Roles</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Profiles</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.age}</td>
                <td className="border border-gray-300 px-4 py-2">{item.gender}</td>
                <td className="border border-gray-300 px-4 py-2">{item.location}</td>
                <td className="border border-gray-300 px-4 py-2">{item.roles}</td>
                <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {/* Display Profiles as Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.profiles.length > 0 ? (
                      item.profiles.map((profile, profileIndex) => (
                        <div
                          key={profileIndex}
                          className="p-4 bg-gray-100 rounded shadow-md"
                        >
                          <h3 className="font-bold">{profile.name}</h3>
                          <p>Role: {profile.role}</p>
                          <p>Location: {profile.location}</p>
                        </div>
                      ))
                    ) : (
                      <p>No profiles available</p>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// export default function App() {
//   // Example data
//   const data = [
//     {
//       name: 'Shivudu',
//       age: 'Mid 20s',
//       gender: 'Male',
//       location: 'Small village at the base of a giant waterfall',
//       roles: 'Lead Actor',
//       description:
//         'Shivudu is adventurous, curious, and unaware of his past. He is physically strong and determined, with a sense of justice and bravery. His journey is one of self-discovery and heroism.',
//       script_context:
//         'Shivudu is the protagonist who discovers his true identity as the son of Amarendra Baahubali and seeks to restore justice in the kingdom of Mahishmati.',
//       profiles: [
//         { name: 'Character A', role: 'Warrior', location: 'Mahishmati' },
//         { name: 'Character B', role: 'Advisor', location: 'Village Base' }
//       ]
//     },
//     {
//       name: 'Avanthika',
//       age: 'Mid 20s',
//       gender: 'Female',
//       location: 'Mahishmati',
//       roles: 'Supporting Actor',
//       description:
//         'Avanthika is a fierce and skilled warrior, part of a rebel group fighting against Bhallaladeva.',
//       script_context:
//         'Avanthika plays a crucial role in the rescue mission to free Devasena.',
//       profiles: []
//     }
//   ];

//   return <ProfileTable data={data} />;
// }
