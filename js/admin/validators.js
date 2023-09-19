//VALIDACION NOMBRE PELICULA
export const validateName = (value, field) => {
    // Minima long del nombre
    if (value.trim().length <= 1) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
    }

    // Maxima long del nombre
    if (value.trim().length >= 100) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
    }

    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    return true;
};

//VALIDACION IMAGEN
export const validateImage = (value, field) => {
    // Cantidad de caracteres menor a 4
    if (value.trim().length < 4) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
    }

    // Cantidad de caracteres mayor a 300
    if (value.trim().length > 3000) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
    }

    // const imageRegex = /^data:image\/(jpeg|jpg|png|gif);base64,([a-zA-Z0-9+/]+={0,2})$/;
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

    if (!regex.test(value)) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
    }

    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    return true;
};

//VALIDACION CATEGORIAS

export const validateCategory = (value, field) => {
    if (value === '') {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
    }

    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    return true;
};

//VALIDACION DESCRIPCION
export const validateDescription = (value, field) => {
    // Minima long de la descripcion
    if (value.trim().length <= 0) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
    }

    // Maxima long de la descripcion
    if (value.trim().length >= 150) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
    }

    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    return true;
};


//VALIDACION PUBLICACION

export const validatePublication = (value, field) => {
    if (value === '') {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
    }

    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    return true;
};

//VALIDACION TEMPORADAS

export const validateSeason = (value, field) => {
    if (value > 30 || value < 1) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
    }

    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    return true;
};

//VALIDACION EPISODIOS

export const validateEpisode = (value, field) => {
    if (value > 100 || value < 1) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
    }

    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    return true;
};


export const validateNumber = (value, campo) => {
    // Cantidad de digitos distinta a 10 caracteres
    // 381 123 4567
    if (value.trim().length !== 10) {
      campo.classList.add('is-invalid');
      campo.classList.remove('is-valid');
      return false;
    }
  
    // No tenga caracteres no numericos
    if (isNaN(Number(value))) {
      campo.classList.add('is-invalid');
      campo.classList.remove('is-valid');
      return false;
    }
  
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
};
