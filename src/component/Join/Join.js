import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl font-bold mb-6">Join a Chat</h1>
        <input 
          className="block w-full p-2 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white" 
          placeholder="Name" 
          type="text" 
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          className="block w-full p-2 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white" 
          placeholder="Room" 
          type="text" 
          onChange={(e) => setRoom(e.target.value)}
        />
        <Link
          onClick={event => (!name || !room) ? event.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}
          className="block w-full p-3 text-center bg-blue-500 rounded-lg text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Join;
