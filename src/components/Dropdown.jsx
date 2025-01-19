import React, { useState } from 'react';

const Dropdown = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center relative flex-inline-block w-full mb-4">
      <div>
        <button
          type="button"
          className="flex w-full bg-n-14 justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
          onClick={toggleDropdown}
        >
          <div className="text-white">{label}</div>
          <svg
            className="-mr-1 size-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            className="absolute right-0 mt-2 w-36 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="py-1">
              {options.map((option, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;