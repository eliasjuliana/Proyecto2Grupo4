export class Categoria{
    constructor(datos,categoria){
        this.datos = datos;
        this.categoria = categoria;
        this.codigo = self.crypto.randomUUID();
    }
}