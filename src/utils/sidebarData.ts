import { IconTypeProps } from '@/assets/icon';

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

interface DataProps extends IconTypeProps {
  title: string;
}

const mypageData: DataProps[] = [
  { title: '내가 쓴 게시물', type: 'emptyGame' },
  { title: '내가 참가한 게시물', type: 'filledGame' },
];

const chattingData: DataProps[] = [
  { title: '채팅', type: 'emptyGame' },
  { title: '얘는 ', type: 'emptyGame' },
  { title: '사이드 바를', type: 'emptyGame' },
  { title: '어케하더라?', type: 'filledGame' },
];
// 이거 채팅은 좀 달랐던거 같은데 어떻게 했더라???

const mainData: DataProps[] = [
  { title: '액션', type: 'action' },
  { title: '스포츠', type: 'sport' },
  { title: '슈팅', type: 'shooting' },
  { title: '레이싱', type: 'racing' },
  { title: 'RPG', type: 'rpg' },
  { title: '퍼즐', type: 'puzzle' },
  { title: '시뮬레이션', type: 'simulation' },
  { title: '공포', type: 'horror' },
  { title: '퍼즐', type: 'puzzle' },
  { title: '어드밴쳐', type: 'adventure' },
  { title: '기타', type: 'etcetera' },
];
