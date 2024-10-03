import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

let socket;

function Chat() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]); 
  const ENDPOINT = process.env.PORT === 'production' 
  ? 'https://chatroomserver-7qdl.onrender.com' 
  : 'http://localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    // Load messages from local storage
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    setMessages(savedMessages);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, message];
        // Save updated messages to local storage
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.off('message');
      socket.off('roomData');
    };
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="outerContainer h-screen flex">
      <div className="flex-1 flex">
        <div className="innerContainer flex-1 flex flex-col relative">
          <div className="sticky top-0 left-0 right-0 z-10">
            <InfoBar room={room} />
          </div>
          <div className="flex-1 overflow-y-auto">
            <Messages messages={messages} name={name} />
          </div>
          <div className="static bottom-0 left-0 right-0">
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
        </div>
        <div className=" h-full bg-gray-200 dark:bg-gray-800 w-1/4">
          <TextContainer users={users} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
