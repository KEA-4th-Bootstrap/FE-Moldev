import React from 'react';

const UserMessageContainer = ({ message }: { message: string }) => {
  return (
    <div className="w-full flex flex-col items-end justify-start">
      <div className="rounded-message bg-message text-14 font-medium max-w-[60%] py-8 px-16">
        {message}
      </div>
    </div>
  );
};

export default UserMessageContainer;
