import Swal from 'sweetalert2';

export const sweetAlert = (text: 'logout') => {
  switch (text) {
    case 'logout':
      return Swal.fire({
        title: '로그아웃 하시겠습니까?',
        icon: 'question',
        showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
        confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
        cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
        confirmButtonText: '예', // confirm 버튼 텍스트 지정
        cancelButtonText: '아니오', // cancel 버튼 텍스트 지정
        reverseButtons: true, // 버튼 순서 거꾸로
      });
  }
};
