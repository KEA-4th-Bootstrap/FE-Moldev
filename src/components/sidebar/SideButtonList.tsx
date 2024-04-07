import Login from '../../assets/icons/icon_login.svg?react';
import Question from '../../assets/icons/icon_question.svg?react';
import List from '../../assets/icons/icon_list.svg?react';
import Search from '../../assets/icons/icon_search.svg?react';
import SearchPerson from '../../assets/icons/icon_search_person.svg?react';
import Chatbot from '../../assets/icons/icon_chatbot.svg?react';
import Person from '../../assets/icons/icon_person.svg?react';
import Logo from '../../assets/logo/logo_icon.svg?react';
import { SideType } from '../../data/type';
import { useNavigate } from 'react-router';

const SideButtonList = ({
  isLogin,
  setClicked,
}: {
  isLogin: boolean;
  setClicked: (clicked: SideType) => void;
}) => {
  const navigation = useNavigate();

  return (
    <div className="shrink-0 h-full px-16 py-30 flex flex-col justify-between items-center shadow-right">
      <div className="flex flex-col justify-start items-center gap-y-24">
        {isLogin ? (
          <>
            <Logo className="cursor-pointer hover:scale-110" width={28} height={28} />
            <List
              className="cursor-pointer hover:scale-110"
              width={28}
              height={28}
              onClick={() => setClicked('list')}
            />
            <Search
              className="cursor-pointer hover:scale-110"
              width={28}
              height={28}
              onClick={() => setClicked('search')}
            />
            <SearchPerson
              className="cursor-pointer hover:scale-110"
              width={28}
              height={28}
              onClick={() => setClicked('recommend')}
            />
            <Chatbot
              className="cursor-pointer hover:scale-110"
              width={28}
              height={28}
              onClick={() => setClicked('chatbot')}
            />
          </>
        ) : (
          <>
            <Login
              className="cursor-pointer hover:scale-110"
              width={28}
              height={28}
              onClick={() => {
                console.log('login clicked');
                navigation('/login');
              }}
            />
            <Question className="cursor-pointer hover:scale-110" width={28} height={28} />
          </>
        )}
      </div>
      <div className="flex flex-col justify-start items-center">
        {isLogin && <Person className="cursor-pointer hover:scale-110" width={28} height={28} />}
      </div>
    </div>
  );
};

export default SideButtonList;
