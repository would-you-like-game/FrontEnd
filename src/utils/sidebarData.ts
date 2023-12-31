import { IconTypeProps } from '@/assets/icon';

export const sidebarData = (data: string) => {
  switch (data) {
    case 'mypage':
      return mypageData;

    default:
      return mainData;
  }
};

type DataProps = IconTypeProps & {
  title: string;
  category: string;
};

const mypageData: DataProps[] = [
  { category: '', title: '프로필', type: 'filledGame' },
  { category: 'mypost', title: '내가 쓴 게시물', type: 'emptyGame' },
  { category: 'participate', title: '내가 참가한 게시물', type: 'filledGame' },
];

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
  { category: 'adventure', title: '어드밴쳐', type: 'adventure' },
  { category: 'etcetera', title: '기타', type: 'etcetera' },
];
