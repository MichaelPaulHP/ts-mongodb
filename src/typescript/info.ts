

// ------------
// beneficios
// ------------
const myArray = ['a','b','c']
// const myStr = myArray.find((n) => n === 5)
// const res = myStr.length
// Cannot read property 'length' of undefined
// https://kotlinlang.org/docs/null-safety.html

/*if(myStr) {
  const res2 = myStr / 435
}*/

// descubrir errores en tiempo de desarrollo
// reducir errores en tiempo de ejecucion

/*

calcularEdad(fechaNacimiento){
  return new Date().getFullYear() - fechaNacimiento.getFullYear()
}
calcularEdad('2000/01/04')

*/
function calcularEdad(fechaNacimiento: Date){
  return new Date().getFullYear() - fechaNacimiento.getFullYear()
}
// calcularEdad('2000/01/22')



// ------------
// Types
// ------------

const a: string  | number | boolean | null | undefined  = 'hola'

// ------------
// Variables
// ------------

// const | let
const username = 'Pedrito'
let age = 20
age = 21
// declarar explicitamente
const isAdult: boolean = true
const aNumber: number = 1
// declarar implicitamente
const aString = 'hola'
const aBoolean = true

// type


type Color = "red" | "green" | "blue"


type Lapiz ={color: 'yellow', borrador: boolean}
type Plumon = { grosor: number}

type SuperPlumon = Lapiz & Plumon

const superPlumon: SuperPlumon = {
  color: 'yellow',
  grosor: 1,
  borrador: false
}

Promise.allSettled([])



// ------------
// Functions
// ------------

// declarar
function buildModal() {
  const onClick = () => {
    console.log("onClick")
  }

  return {
    title: "Hello World",
    onClick
  }
}
//  default parameters
function buildTag(text: string, Color: Color = "red")  {
  return {
    text,
    Color
  }
}
// optional parameters
const  arr = [1,2,3,4,5,6,7,8,9,10]
const sorted = arr.sort() // ver params

// ------------
// Interfaces
// ------------

interface GetPersonResponse {
  name: string
  age: number
}

interface Modal {
  title: {
    text: string
    color: Color
  }
  onClick: () => void,

  subTitle?: string
  description: string | null
}

// ------------
// Classes
// ------------

class PDF {} // abrir proyecto angular con pdfs



