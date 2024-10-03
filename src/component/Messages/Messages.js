import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

function Messages({ messages, name }) {
  return (
    <div className="flex-1 overflow-y-auto">
      <ScrollToBottom className="h-full">
        {messages.map((message, i) => (
          <div key={i} className="p-2">
            <Message message={message} name={name} />
          </div>
        ))}
      </ScrollToBottom>
    </div>
  );
}

export default Messages;
