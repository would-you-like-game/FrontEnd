/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, FormEvent, useRef } from "react";

import styled from "styled-components";
import { ChatContainer, Message, InputArea } from "./styles/chatstyle";
import Input from "./ui/Input";
import * as SockJS from "sockjs-client";
import StompJs from "stompjs";

// interface ChatMessage {
//   nickname: string;
//   msg: string;
// }

interface ChatRooms {
  id: number;
  nickname: string;
  //   tagName: string;
  //   profileImageUrl: string;
  roomKey: string;
}

let stomp: any;

const Chat: React.FC<ChatRooms> = ({ roomKey, nickname }) => {
  const [messages, setMessages] = useState<{ nickname: string; msg: string }[]>(
    []
  );

  const stompClientRef = useRef<any>(null);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  
  const connect = () => {
    const sock = new SockJS(`http://211.107.164.212/chat`);
    // const user = useAppSelector(state=> state.user.nickname)
    stomp = StompJs.over(sock);
    stomp.connect(
      {},
      () => {
        stomp.debug = null;
        stompClientRef.current = stomp;
        stomp.subscribe(`/sub/1-2`, ({ body }) => {
          console.log(JSON.parse(body));
          // 구독할때 룸네임 넣어서 sub 하고
          // const newMessage = data.msg;
          // Imposters 값을 state에 저장
          // if (newMessage.imposters) {
          // }
          // // 새로운 메시지가 imposter 정보를 담고 있다면 imposters state를 업데이트
          // if (newMessage.imposter) {
          // }
          // 과거의 메세지와 현재 메세지 추가
          setMessages((prevMessages) => [...prevMessages, JSON.parse(body)]);
        });
        stomp.send(
          "/pub/send/message",
          {},
          JSON.stringify({
            roomKey: "1-2",
            nickname: "최은석 짱짱맨",
            msg: ` 님이 입장하셨습니다.`,
          })
        );
      },
      (err: Error) => {
        console.log("에러발생! 연결실패!", err);
      }
    );
  };

  useEffect(() => {
    connect();
    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.send(
          "/pub/send/message",
          {},
          JSON.stringify({
            roomKey: roomKey,
            nickname: nickname,
            msg: `${nickname} : 님이 나가셨습니다.`,
          })
        );
      }
    };
  }, []);

  const sendMessage = () => {
    if (stompClientRef.current) {
      stompClientRef.current.send(
        "/pub/send/message",
        {},
        JSON.stringify({
          roomKey: "1-2",
          nickname: nickname,
          msg: currentMessage,
        })
      );
      setCurrentMessage("");
    }
  };