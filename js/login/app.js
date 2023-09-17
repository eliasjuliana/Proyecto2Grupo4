import { User, UserWithoutPassword } from '../login/User.js';
import { validatePassword, validateUsername } from '../login/validators.js';

const Logueado = JSON.parse(sessionStorage.getItem('Logueado'));
if (Logueado) {
  window.location.href = '../pages/admin.html';
}

const userAdmin = new User('admin', 'admin', 'admin@gmail.com');


const formLogin = document.getElementById('form-login');
const fieldUser = document.getElementById('input-user');
const fieldPassword = document.getElementById('input-password');
const alertCredentials = document.getElementById('alert-login');

formLogin.addEventListener('submit', (e) => {

  e.preventDefault();

  const user = fieldUser.value;
  const password = fieldPassword.value;


  if (
    validateUsername(user, fieldUser) &&
    validatePassword(password, fieldPassword)
  ) {

    fieldUser.classList.remove('is-invalid');
    fieldPassword.classList.remove('is-invalid');

    if (
      user === userAdmin.user &&
      password === userAdmin.password
    ) {
      alertCredentials.classList.add('d-none');

      const userLogueado = new UserWithoutPassword(
        user,
        'admin@gmail.com'
      );

      sessionStorage.setItem('Logueado', true);
      sessionStorage.setItem('usuario', JSON.stringify(userLogueado));

      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        toast: true,
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast'
        },
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Logueado Correctamente!',
        text: 'Bienvenido '
      }).then(() => {
          window.location.href = '../pages/admin.html';
        });
    } else {
      alertCredentials.classList.remove('d-none');
    }
  }
});
