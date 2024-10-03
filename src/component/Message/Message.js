import React from 'react';
import ReactEmoji from 'react-emoji';

function Message({ message: { user, text }, name }) {
  const trimmedName = name.trim().toLowerCase();
  const isSentByCurrentUser = user === trimmedName;

  return (
    <div className={`flex justify-${isSentByCurrentUser ? 'end' : 'start'} mb-4`}>
      <div className={`rounded-lg p-4 ${isSentByCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} dark:${isSentByCurrentUser ? 'bg-blue-400' : 'bg-gray-700'}`}>
        <p className="text-sm">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="ml-2 text-xs text-gray-500">{user}</p>
    </div>
  );
}

export default Message;
