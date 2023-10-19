export const sidebarData = (data: string) => {
  switch (data) {
    case 'mypage':
      return mypageData;
    case 'chatting':
      return chattingData;
    default:
      return mainData;
  }
};

type DataProps = {
  title: string;
  iconColor: string;
  iconType: 'EmptyGame' | 'FilledGame' | 'Human' | 'People';
};

const mypageData: DataProps[] = [
  { title: '내가 쓴 게시물', iconColor: 'black', iconType: 'EmptyGame' },
  { title: '내가 참가한 게시물', iconColor: 'black', iconType: 'FilledGame' },
];

const chattingData: DataProps[] = [
  { title: '채팅', iconColor: 'black', iconType: 'EmptyGame' },
  { title: '얘는 ', iconColor: 'black', iconType: 'EmptyGame' },
  { title: '사이드 바를', iconColor: 'black', iconType: 'EmptyGame' },
  { title: '어케하더라?', iconColor: 'black', iconType: 'FilledGame' },
];
// 이거 채팅은 좀 달랐던거 같은데 어떻게 했더라???

const mainData: DataProps[] = [
  { title: 'FPS', iconColor: 'black', iconType: 'EmptyGame' },
  { title: '아케이드', iconColor: 'black', iconType: 'FilledGame' },
  { title: '아케이드', iconColor: 'black', iconType: 'FilledGame' },
  { title: '아케이드', iconColor: 'black', iconType: 'FilledGame' },
  { title: '아케이드', iconColor: 'black', iconType: 'FilledGame' },
  { title: '아케이드', iconColor: 'black', iconType: 'FilledGame' },
];
