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
  category?: string;
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
  { category: 'all', title: '전체', type: 'emptyGame' },
  { category: 'action', title: '액션', type: 'action' },
  { category: 'sport', title: '스포츠', type: 'sport' },
  { category: 'shooting', title: '슈팅', type: 'shooting' },
  { category: 'racing', title: '레이싱', type: 'racing' },
  { category: 'rpg', title: 'RPG', type: 'rpg' },
  { category: 'puzzle', title: '퍼즐', type: 'puzzle' },
  { category: 'simulation', title: '시뮬레이션', type: 'simulation' },
  { category: 'horror', title: '공포', type: 'horror' },
  { category: 'puzzle', title: '퍼즐', type: 'puzzle' },
  { category: 'adventure', title: '어드밴쳐', type: 'adventure' },
  { category: 'etcetera', title: '기타', type: 'etcetera' },
];