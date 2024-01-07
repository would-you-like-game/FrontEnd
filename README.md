# GameCrews

#### FE : 강신범, 이소현

#### BE : 박성균, 이채원

<br>
<br>

# 1. 프로젝트 개요

**게임크루(GameCrews)**
실시간 채팅과 커뮤니티를 기반으로 게임 같이 할 친구를 찾을 수 있는 서비스

<br>
<br>

# 2. 프로젝트 기간

- ### 2023. 10. 05 ~ 2023. 11. 13 (6주)
- 기획 및 설계 : 1주
- 프로젝트 구현 : 5주

<br>
<br>

# 3. 기술 스택

<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/AmazonS3-FF9900?style=for-the-badge&logo=AmazonS3&logoColor=white"/> <img src="https://img.shields.io/badge/AmazonCloudFront-FF9900?style=for-the-badge&"/> <img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"/> <img src="https://img.shields.io/badge/emotion-FE5196?style=for-the-badge"/> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>

## 4. 멤버 및 역할

### 😏 [강신범](https://github.com/kangsinbeom)

- _역할_

  1. **UI 기능 구현**

  - 디테일, 메인, 글작성 페이지 UI
  - Router 설정
  - 공통컴포넌트 (button, sidebar, carousel, header ...)
  - custon hook을 통한 관심사 분리 및 가독성 증가 (useInput, usePagination ...)

  2. **AWS S3 및 CloudFront를 활용한 서버 배포 (협업)**

  - 배포 및 CI/CD 설정
  - 서브 도메인 설정 및 세팅

### 😎 [이소현](https://github.com/HyeonE0103)

- _역할_

  1. **한일 1**

  -
  -
  -
  -

  2. **한일 2**

  -
  -

## 4. 주요 기능

### 📌 로그인 / 회원가입

- 이메일과 비밀번호를 이용한 로그인 / 회원가입 기능을 통해 유저들과 의사소통이 가능합니다.

<br>

### 📌 게시글 CRUD

- 회원가입을 한 사용자는 게시글을 작성해서 게임 모집을 할 수 있습니다. 원하는 게시글에 신청을 하게 되면 작성자는 인원들을 추려 게임을 할 인원들을 선정할 수 있습니다.

<br>

### 📌 채팅

- 선정 된 인원들과 채팅을 통해 세부 일정 및 게임에 대한 생각을 공유할 수 있습니다.

<br>

## 5. 트러블 슈팅

### ⛔️ 문제 1 : 서브 도메인 설정 및 SSL 발급

📝 **작성자 : 강신범**

- 내용 : 도메인 등록과정에서 구매한 도메인을 통해 Backend server(EC2) 도메인 등록 후 CloudFront에 대체 도메인을 설정하려고 하였음.
  <br> 과정에서 도메인이 제대로 등로이 되지 않아서 gabia와 Route53을 다시 확인하였다.

✅ **해결방안**

- Gabia에서 레코드 설정을 다시 해주었고, Route53에서 레코드에 추가가 되지 않은 것을 확인 한 후 다시 설정을 해주었다
- 🔗 [관련 링크](https://gnae16.tistory.com/169)

<br>

### ⛔️ 문제 2 : 동적 스타일링 타입 설정

📝 **작성자 : 강신범**

- 내용 : button을 여러 스타일이 적용될 수 있게끔 동적으로 스타일링을 하고 싶었고 그 과정에서 props로 스타일링 값을 내리는 방법으로 구현을 하게 됨
  <br> 스타일링 간에 type에 관련된 에러가 발생하게 되었음.

✅ **해결방안**

- type 지정 중 keyof ColorType형태로 설정해 주었음

```
import { Theme } from '@/styles/theme';
import { ColorsType } from '@/type/themeType';
import styled from '@emotion/styled';

type ButtonWrapperProps = {
  color: keyof ColorsType;
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  background-color: ${(props) => Theme.colors[props.color]};
`;
}
```

- 🔗 [관련 링크](https://www.notion.so/Dymanic-styling-type-setting-c608d2d6e94f4277b44c5c31717b4248)

### ⛔️ 문제 3 : recoil과 함께 사용하는 custom hook

📝 **작성자 : 강신범**

- 내용 : 전역으로 관리하는 submit event에 사용되는 값이 담긴 객체 있어서 애초에 useState를 통해서 설정하지 않고 바로 recoil을 통해서 관리하는 것이 좋을 것 같다는 생각에 custom hook을 만들게 되었음
  <br> recoilState에 설정된 초기값에는 number type도 포함되어있는데 input을 통해서 setter에 부여되는 값의 형식은 string type이여서 이와 관련되서 설정을 해주어야 했음

✅ **해결방안**

- 조건문을 통해서 number type의 값을 처리를 해서 사용하는 방법으로 구현을 하게 됨

```
if (name === 'totalNumber') {
        const newForm = {
          ...form,
          [name]: Number(value) ? Number(value) : '',
        };
        setForm(newForm);
      } else {
        const newForm = {
          ...form,
          [name]: value,
        };
        setForm(newForm);
      }
}
```

- 🔗 [관련 링크](https://www.notion.so/)

## 6. 아키텍쳐

![gamecrews (1) (1)](https://github.com/would-you-like-game/FrontEnd/assets/83047601/0fa0c162-8055-4d6e-b86f-dc70a695fc27)
