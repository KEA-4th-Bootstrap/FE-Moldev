export type SideType = 'list' | 'search' | 'recommend' | 'chatbot' | 'logo' | 'login';

export type SearchType = 'article' | 'user';

export type CategoryType = 'activity' | 'project' | 'awards' | 'trouble';

export type CategoryToKorType = '대외활동' | '프로젝트' | '수상이력' | '트러블슈팅';

export const categoryEngToKor: {
  [key in CategoryType]: CategoryToKorType;
} = {
  activity: '대외활동',
  project: '프로젝트',
  awards: '수상이력',
  trouble: '트러블슈팅',
};

export type OrderType = 'new' | 'visit';

export type RecommendUserType = {
  percentage: number;
  user: UserListType;
};

export type UserListType = {
  moldevId: string;
  img: string;
  name: string;
  introduce: string;
  visit: number;
  updated: string;
};

export type ArticleListItemType = {
  moldevId: string;
  id: number;
  title: string;
  content: string;
  createdAt: string;
  visit: number;
  category: CategoryType;
  img: string;
  userName: string;
};

export type ChatMessageType = {
  id: number;
  message: string;
  isUser: boolean;
};

export type LoginContainerType = 'login' | 'join' | 'password';
export interface ItemDimensions {
  width: number;
  height: number;
}

export interface postBoxType {
  title: string;
  content: string;
}

export type joinType = {
  isMarketing: boolean;
  email: string;
  password: string;
  moldevId: string;
  userName: string;
  islandName: string;
  profileImage: string | ArrayBuffer;
};

export const initialJoinForm: joinType = {
  isMarketing: false,
  email: '',
  password: '',
  moldevId: '',
  userName: '',
  islandName: '',
  profileImage: '',
};
