interface Pageable {
  totalPages: number;
  totalElements: number;
  size: number;
}
export interface Post {
  postId: number;
  title: string;
  totalNumber: number;
  currentNumber: number;
  nickname: string;
  userImg: string | null;
}
export type ResponseTotalPostType = {
  msg: string;
  pageable: Pageable;
  result: Post[];
};

export type ResponseUserProfileType = {
  userImg: string | null; // userImg가 항상 null이면 'null'만 지정하면 됩니다.
  nickname: string;
  email: string;
  result: UserStateTpye | null; // result는 UserResult 타입을 참조합니다.
};
type UserStateTpye = {
  totalManner: number;
  totalParticipation: number;
  totalGamingSkill: number;
  totalEnjoyable: number;
  totalSociability: number;
  totalRating: number;
};

export type Player = {
  joinPlayerId: number;
  nickname: string;
  email: string;
  crewOwnerEmail: string;
  postUser: boolean;
  accepted: boolean;
};

export type ResponseChatRoomType = {
  msg: string;
  pageable: Pageable;
  result: ChatRoom[];
};

type ChatRoom = {
  roomKey: string;
  nickname: string;
  userImg: string | null;
  modifiedAt: string;
};

export type UserProfile = {
  userImg: string | null;
  nickname: string;
  email: string;
  result: UserRating;
  numberOfEvaluations: number;
};

type UserRating = {
  totalManner: number;
  totalParticipation: number;
  totalGamingSkill: number;
  totalEnjoyable: number;
  totalSociability: number;
  totalRating: number;
};
