import React from 'react';

const ChatbotMessageContainer = ({ message }: { message: string }) => {
  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="rounded-message bg-gray-100 text-14 font-medium max-w-[60%] py-8 px-16">
        {message}
      </div>
    </div>
  );
};

export default ChatbotMessageContainer;
