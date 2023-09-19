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
  return true;
};