"use strict";

export const validateUsername = (value, field) => {

  if (value.trim().length < 4) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  if (value.trim().length > 20) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  field.classList.remove("is-invalid");
  // field.classList.add("is-valid");
  return true;
};

export const validatePassword = (value, field) => {

  if (value.trim().length < 4) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }


  if (value.trim().length > 20) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  field.classList.remove("is-invalid");
  // field.classList.add("is-valid");
  return true;
};




          //Validate Form Contact
export const validateDescription = (value, field) => {
  // Minima long de la descripcion
  if (value.trim().length <= 0) {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
      return false;
  }

  // Maxima long del nombre
  if (value.trim().length >= 500) {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
      return false;
  }

  field.classList.remove('is-invalid');
  field.classList.add('is-valid');
  return true;
};


export const validateEmail = (email, field) => {
  // Regex para Email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
      return false;
  }

  field.classList.remove('is-invalid');
  field.classList.add('is-valid');
  return true;
};

export const validateSurname = (value, field) => {

  if (value.trim().length < 4) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  if (value.trim().length > 20) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  field.classList.remove("is-invalid");
  field.classList.add("is-valid");
  return true;
};
