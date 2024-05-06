import UserMessageContainer from '../chatbotContainer/UserMessageContainer';
import ChatbotMessageContainer from '../chatbotContainer/ChatbotMessageContainer';
import Send from '../../assets/icons/icon_send.svg?react';
import ChatbotLoadingContainer from '../chatbotContainer/ChatbotLoadingContainer';
import useChatbot from '../../hooks/sidebar/chatbot/useChatbot';

const ChatbotContainer = ({ memberName }: { memberName: string }) => {
  const { messages, inputMessage, setInputMessage, handleSendMessage, isLoading, isFetching } =
    useChatbot(99);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-y-30">
      <div className="w-full flex flex-col items-start justify-center text-24 font-semibold pt-62">
        <div>{memberName}님의 섬 🏝️</div>
      </div>
      <div className="grow w-full flex flex-col items-center justify-start overflow-y-auto gap-y-10">
        {messages.map((message) =>
          message.isUser ? (
            <UserMessageContainer key={message.id} message={message.message} />
          ) : (
            <ChatbotMessageContainer key={message.id} message={message.message} />
          ),
        )}
        {(isLoading || isFetching) && <ChatbotLoadingContainer />}
      </div>
      <div className="shrink-0 w-full flex items-center justify-center gap-x-20 pb-10">
        <input
          type="text"
          className="grow bg-gray-50 rounded-3xl outline-none border-none px-16 py-8"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          // onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Send className="w-[24px] h-[24px] cursor-pointer" onClick={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatbotContainer;
