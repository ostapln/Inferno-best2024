import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { type: 'message', message: 'Hello, how are you?' },
    { type: 'answer', message: 'I am good, thanks for asking!' },
    { type: 'message', message: 'What are you up to today?' },
    { type: 'answer', message: 'Just hanging out at home. What about you?' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    setMessages([...messages, inputValue.trim()]);
    setInputValue('');
  };

  return (
    <div className="flex flex-col ">
      
      <ul className="p-4 flex-col flex-grow overflow-y-scroll">
     
          <li className={`mb-6 flex`}>
            
          </li>
       
        {messages.map((message, index) => ( <li  key={index} className="py-3 sm:py-4">
                        <div className="flex items-center  mt-[2rem] rtl:space-x-reverse">
                            <div className="flex-shrink-0   ">
                            <div className="relative -mt-9 -ml-[18%] bg-[#5BC0EB] w-8 h-8 rounded-full   dark:bg-primary  mr-3" />
                                </div>
                            <div className="flex-1 min-w-0  text-left">
                            <span
              className={`${
                message.type === 'message' ? 'bg-green-200' : 'bg-gray-200 ml-auto'
              } text-black rounded-lg py-2 px-4 break-words inline-block max-w-full`}
            >
              {message.message}
            </span>
                                 
                            </div>
                            <div className="mr-[5%] inline-flex items-center px-5 text-[#1B4B8B] font-semibold text-[#1B4B8B]   p-2">
                                <a href="/needs ">Переглянути</a>
                            </div>
                        </div>
                    </li> ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex px-4 py-2">
        <input
          type="text"
          placeholder="Type your message here"
          value={inputValue}
          onChange={handleInputChange}
          className="flex-grow py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-full ml-2"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
