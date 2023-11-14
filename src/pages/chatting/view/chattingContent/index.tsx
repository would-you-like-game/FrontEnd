import { ChattingBottom, ChattingMiddle } from '..';
import * as s from './style';
import { useGetPathname, useInput } from '@/hooks';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useGetRoomkey } from '../../hooks';
import * as SockJS from 'sockjs-client';
import StompJs from 'stompjs';
import useSWR from 'swr';

export const ChattingContent = () => {
  const pathname = useGetPathname();
  const chatUserName = pathname[1];
  const roomKey = useGetRoomkey(chatUserName);
  const stompRef = useRef<StompJs.Client>(null);
  const URL = import.meta.env.VITE_URL;
  const [msg, onChangeMsg, setMsg] = useInput<string>('');
  const [chat, setChat] = useState([]);
  const { data: userData } = useSWR(`/user`);

  const connect = () => {
    const socket = new SockJS(`${URL}/chat`);
    const stomp = StompJs.over(socket);

    stomp.connect(
      {},
      () => {
        stomp.debug = null;
        console.log('Connect succeeded');
        stompRef.current = stomp;

        stomp.subscribe(
          `/sub/${roomKey}`,
          ({ body }) => {
            console.log(JSON.parse(body));
            setChat((preChat) => [...preChat, JSON.parse(body)]);
          },
          { id: roomKey }
        );
        onSendMsg(`${userData.nickname}님이 입장하셨습니다.`);
      },
      (error) => {
        console.log('Connet failed', error);
      }
    );
  };

  useEffect(() => {
    if (userData) {
      connect();
    }
    return () => {
      if (stompRef.current) {
        stompRef.current.unsubscribe(roomKey);
        stompRef.current.disconnect(() => {
          userData && onSendMsg(`${userData.nickname} : 님이 나가셨습니다.`);
          setChat([]);
        });
      }
    };
  }, [userData, roomKey]);

  const onSendMsg = (msg: string) => {
    if (stompRef.current) {
      stompRef.current.send(
        '/pub/send/message',
        {},
        JSON.stringify({
          roomKey: roomKey,
          nickname: userData.nickname,
          msg: msg,
        })
      );
      setMsg('');
    }
  };

  const onKeyDownMsg = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMsg(msg);
    }
  };

  return (
    <s.ChattingContent>
      {userData && <ChattingMiddle chat={chat} nickname={userData.nickname} />}
      <ChattingBottom
        msg={msg}
        setMsg={setMsg}
        onChangeMsg={onChangeMsg}
        onKeyDown={onKeyDownMsg}
        onSendMsg={onSendMsg}
      />
    </s.ChattingContent>
  );
};
