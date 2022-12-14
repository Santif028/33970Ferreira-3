class Curso {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

const curso1 = new Curso("Desarrollo Web", 16560)
const curso2 = new Curso("JavaScript", 16560)
const curso3 = new Curso("React Js", 16560)
const curso4 = new Curso("Programación Backend", 38800)

const cursos = [curso1, curso2, curso3, curso4]

console.table(cursos)

let agregarCurso = prompt("¿Desea agregar otro curso?").toLowerCase()

const precios = cursos.map(curso => curso.precio)

if (agregarCurso == "si") {
    const curso = new Curso(prompt("Ingrese el nombre"), parseInt(prompt("Ingrese el precio")))
    cursos.push(curso)
    console.table(cursos)
    console.log(`De acuerdo su precio final es ${precios.reduce((prev, act) => prev + act, 0)}`)
} else if (agregarCurso == "no"){
    console.log(`De acuerdo su precio final es ${precios.reduce((prev, act) => prev + act, 0)}`)
}
