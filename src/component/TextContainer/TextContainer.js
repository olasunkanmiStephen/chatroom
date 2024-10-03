import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';

const TextContainer = ({ users }) => (
  <div className=" p-4">
    {users ? (
      <div className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h1 className="text-lg font-bold mb-4">Active:</h1>
        <div className="flex flex-wrap justify-center space-x-4">
          {users.map(({ name }) => (
            <div key={name} className="flex items-center space-x-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
              <span>{name}</span>
              <img alt="Online Icon" src={onlineIcon} className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
