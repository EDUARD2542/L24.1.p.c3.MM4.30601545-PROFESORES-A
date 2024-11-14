/*PROFESORES-A
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y
sexo (F - M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne otro arreglo de objetos con solamente los profesores de una categoría dada.
Función: profesoresCategoria.
Parámetros: profesores (array de objetos profesor), categoria (un número).
Retorno: array de objetos profesor que pertenecen a la categoría indicada.*/

const profesores = [
    {categoria: 1, nombre: 'Ana', sexo: 'F'},
    {categoria: 2, nombre: 'Carlos', sexo: 'M'},
    {categoria: 3, nombre: 'Diana', sexo: 'F'},
    {categoria: 3, nombre: 'Eduardo', sexo: 'M'},
    {categoria: 1, nombre: 'Fernanda', sexo: 'F'},
    {categoria: 1, nombre: 'Gabriel', sexo: 'M'},
    {categoria: 2, nombre: 'Hernan', sexo: 'M'},
    {categoria: 2, nombre: 'Isabel', sexo: 'F'},
    {categoria: 3, nombre: 'Javier', sexo: 'M'},
    {categoria: 4, nombre: 'Karla', sexo: 'F'},
    {categoria: 4, nombre: 'Luis', sexo: 'M'},
    {categoria: 4, nombre: 'Marta', sexo: 'F'},
    {categoria: 5, nombre: 'Natalia', sexo: 'F'},
    {categoria: 5, nombre: 'Oscar', sexo: 'M'},
]

const profesoresCategoria = (profesores, categoria) => {
    let profCategoria = [];
    for (let i = 0; i < profesores.length; i++) {
        if (profesores[i].categoria == categoria) {
            profCategoria.push(profesores[i].nombre)
        }
    }
    return profCategoria
}

let salida = document.getElementById('salida')
salida.innerHTML = JSON.stringify(profesoresCategoria(profesores, 1))