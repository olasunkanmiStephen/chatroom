import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

function InfoBar({ room }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 rounded-t-lg">
      <div className="flex items-center space-x-2">
        <img src={onlineIcon} alt="online icon" className="w-4 h-4" />
        <h3 className="text-lg">{room}</h3>
      </div>
      <a href="/" className="text-red-500 hover:text-red-700">
        <img src={closeIcon} alt="close icon" className="w-4 h-4" />
      </a>
    </div>
  );
}

export default InfoBar;
