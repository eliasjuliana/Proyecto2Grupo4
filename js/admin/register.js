import { validateUsername, validatePassword, validateEmail } from "../login/validators.js"

const formLogin = document.getElementById('form-login');
const fieldUser = document.getElementById('input-user');
const fieldEmail = document.getElementById('input-email')
const fieldPassword = document.getElementById('input-password');
const fieldPasswordAgain = document.getElementById('input-passwordAgain')


formLogin.addEventListener('submit',(e) => {
    e.preventDefault()

    const user = fieldUser.value;
    const email = fieldEmail.value;
    const password = fieldPassword.value;
    const passwordAgain = fieldPasswordAgain.value;

    if (validateUsername(user, fieldUser)  && validateEmail(email, fieldEmail) && validatePassword(password, fieldPassword) && validatePassword(passwordAgain, fieldPasswordAgain) && password === passwordAgain)
    {
        Swal.fire({
            position: 'bottom-center',
            icon: 'success',
            title: 'Cuenta registrada!',
            showConfirmButton: false,
            timer: 1500
          })
    }  else {
        Swal.fire({
            icon: 'error',
            title: 'Hubo un error al crear tu cuenta!',
        })
}})

