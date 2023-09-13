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
    if (value.trim().length >= 200) {
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