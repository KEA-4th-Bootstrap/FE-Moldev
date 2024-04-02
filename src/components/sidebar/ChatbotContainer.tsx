import React, { useEffect, useState } from 'react';
import { ChatMessageType } from '../../data/type';
import UserMessageContainer from '../chatbotContainer/UserMessageContainer';
import ChatbotMessageContainer from '../chatbotContainer/ChatbotMessageContainer';
import Send from '../../assets/icons/icon_send.svg?react';

const ChatbotContainer = ({ memberName }: { memberName: string }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    setMessages([
      { id: 1, message: '안녕하세요! 무엇을 도와드릴까요?', isUser: false },
      { id: 2, message: '안녕하세요! 무엇을 도와드릴까요?', isUser: true },
      { id: 3, message: '안녕하세요! 무엇을 도와드릴까요?', isUser: false },
      { id: 4, message: '안녕하세요! 무엇을 도와드릴까요?', isUser: true },
      { id: 5, message: '안녕하세요! 무엇을 도와드릴까요?', isUser: false },
    ]);
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-y-30">
      <div className="w-full flex flex-col items-start justify-center text-24 font-semibold pt-62">
        <div>{memberName}님의 섬 🏝️</div>
      </div>
      <div className="grow w-full flex flex-col items-center justify-start">
        {messages.map((message) =>
          message.isUser ? (
            <UserMessageContainer key={message.id} message={message.message} />
          ) : (
            <ChatbotMessageContainer key={message.id} message={message.message} />
          ),
        )}
      </div>
      <div className="shrink-0 w-full flex items-center justify-center gap-x-20 pb-10">
        <input
          type="text"
          className="grow bg-gray-50 rounded-3xl outline-none border-none px-16 py-8"
        />
        <Send className="w-[24px] h-[24px] cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatbotContainer;
