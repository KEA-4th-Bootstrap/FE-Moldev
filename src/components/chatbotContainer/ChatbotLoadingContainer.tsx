const ChatbotLoadingContainer = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start ">
      <div className="flex items-center justify-start gap-x-1 rounded-message bg-gray-100 text-14 font-medium max-w-[60%] py-8 px-16">
        <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default ChatbotLoadingContainer;
