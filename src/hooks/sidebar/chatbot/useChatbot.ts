import { useEffect, useState } from 'react';
import { ChatMessageType } from '../../../data/type';
import { useQuery } from 'react-query';
import { getChatbotAnswerApi } from '../../../api/chatbotApi';

const useChatbot = (memberId: number) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const { data, isLoading, isFetching, error, refetch } = useQuery(
    'chatbotAnswer',
    () => getChatbotAnswerApi(inputMessage, memberId),
    {
      enabled: false,
      onSuccess: (data) => {
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, message: data.data.message, isUser: false },
        ]);
      },
    },
  );

  const handleSendMessage = async () => {
    setMessages((prev) => [...prev, { id: prev.length + 1, message: inputMessage, isUser: true }]);
    setInputMessage('');
    refetch();
  };

  useEffect(() => {
    console.log('Check API Response');
    console.log(data);
    console.log(isLoading);
    console.log(error);
  }, [data, isLoading, error]);

  return {
    messages,
    inputMessage,
    setInputMessage,
    handleSendMessage,
    isLoading,
    isFetching,
  };
};

export default useChatbot;
