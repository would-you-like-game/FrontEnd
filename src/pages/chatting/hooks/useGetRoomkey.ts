import useSWR from 'swr';

export const useGetRoomkey = (nickname: string) => {
  const { data: chattingData } = useSWR(`/chatroom?page=1&size=10`);

  if (chattingData && chattingData.result) {
    const matchingUser = chattingData.result.find(
      (user) => user.nickname === nickname
    );
    return matchingUser['roomKey'];
  }

  return null;
};
