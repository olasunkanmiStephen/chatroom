import React from 'react';

function Input({ message, sendMessage, setMessage }) {
  return (
    <div className="flex p-4 bg-gray-100 dark:bg-gray-800">
      <input
        className="flex-1 p-2 mr-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-none"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button 
        className="p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
        onClick={(event) => sendMessage(event)}
      >
        Send
      </button>
    </div>
  );
}

export default Input;
