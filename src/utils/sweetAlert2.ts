import Swal from 'sweetalert2';
export const sweetAlert = (
  text: 'logout' | 'editPost' | 'login' | 'joinGame'
) => {
  switch (text) {
    case 'logout':
      return Swal.fire({
        title: '로그아웃하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: 'Logout',
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('token');
          window.location.reload();
        }
      });
    case 'editPost':
      return Swal.fire({
        title: '로그인시 이용가능합니다',
        showCancelButton: true,
        confirmButtonText: 'Login',
      });
    case 'login':
      return Swal.fire({
        title: '잘못된 비밀번호입니다',
      });
    case 'joinGame':
      return Swal.fire('참가신청 완료.');
  }
};
