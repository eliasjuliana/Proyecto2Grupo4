import { validateUsername, validateSurname , validateDescription, validatePassword, validateEmail } from "../login/validators.js";

const formContact = document.getElementById("form-contact")

const btnSubmit = document.getElementById("btn-submit")
const fieldName = document.getElementById("input-name")
const fieldSurname = document.getElementById("input-surname")
const fieldNumber = document.getElementById("input-number")
const fieldEmail = document.getElementById("input-email")
const fieldQuestion = document.getElementById("input-question")

let name = ""
let surname = ""
let number = ""
let email = ""
let question = ""

fieldName.addEventListener("blur", (e) => {
    const value = e.target.value
    if(validateUsername(value,fieldName)) {
        name = value
    }
})

fieldSurname.addEventListener("blur", (e) => {
    const value = e.target.value
    if(validateSurname(value,fieldSurname)) {
        surname = value
    }
})

fieldNumber.addEventListener("blur", (e) => {
    const value = e.target.value
    if(validatePassword(value,fieldNumber)) {
        number = value
    }
})

fieldEmail.addEventListener("blur", (e) => {
    const value = e.target.value
    if(validateEmail(value,fieldEmail)) {
        email = value
    }
})

fieldQuestion.addEventListener("blur", (e) => {
    const value = e.target.value
    if(validateEmail(value,fieldEmail)) {
        question = value
    }
})


btnSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    if(
        validateDescription(name,fieldName) &&
        validateSurname(surname, fieldSurname) &&
        validatePassword(number, fieldNumber) &&
        validateEmail(email, fieldEmail)
        ) {
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
                title: 'Mensaje Enviado!',
              })

            formContact.reset()
        }
})
