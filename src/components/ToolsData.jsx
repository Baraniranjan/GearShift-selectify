import React from 'react';

function DataTable({ data }) {

    
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Character Information Table</h1>
      <div className="overflow-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Age</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Gender</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Roles</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Script Context</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.age}</td>
                <td className="border border-gray-300 px-4 py-2">{item.gender}</td>
                <td className="border border-gray-300 px-4 py-2">{item.location}</td>
                <td className="border border-gray-300 px-4 py-2">{item.roles}</td>
                <td className="border border-gray-300 px-4 py-2">{item.script_context}</td>
                <td className="border border-gray-300 px-4 py-2">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
