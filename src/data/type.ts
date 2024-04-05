export type SideType = 'list' | 'search' | 'recommend' | 'chatbot' | 'logo';

export type SearchType = 'article' | 'user';

export type CategoryType = '대외활동' | '프로젝트' | '수상이력' | '트러블슈팅';

export type OrderType = 'new' | 'visit';

export type RecommendUserType = {
  percentage: number;
  user: UserListType;
};

export type UserListType = {
  img: string;
  name: string;
  introduce: string;
  visit: number;
  updated: string;
};

export type ArticleListItemType = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  visit: number;
  category: CategoryType;
  img: string;
};

export type ChatMessageType = {
  id: number;
  message: string;
  isUser: boolean;
};
