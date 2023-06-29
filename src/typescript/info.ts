// ------------
// beneficios
// ------------
const myArray = ['a', 'b', 'c']
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
function calcularEdad(fechaNacimiento: Date) {
  return new Date().getFullYear() - fechaNacimiento.getFullYear()
}

// calcularEdad('2000/01/22')


// ------------
// Types
// ------------

const a: string | number | boolean | null | undefined = 'hola'

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
let anotherString = 'hola'
const aBoolean = true

const anArray:ReadonlyArray<number> = [1, 2, 3]
// anArray.push(4)

// type


type Color = "red" | "green" | "blue"
// const a: Color = 'red'
// console.log(typeof a) // string

type Lapiz = { color: 'yellow', borrador: boolean }
type Plumon = { grosor: number }

type SuperPlumon = Lapiz & Plumon

const superPlumon: SuperPlumon = {
  color: 'yellow',
  grosor: 1,
  borrador: false
}

// ------------
// Inferencia de tipos
// ------------


function printUserId(userId: number | string) {
  if (typeof userId === 'string') {
    return userId.toUpperCase()
  } else {
    return userId.toFixed().toUpperCase()
  }
}

//Promise.allSettled([])
type Result = { status: 'success', data: unknown } | { status: 'error', message: string }


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
function buildTag(text: string, Color: Color = "red") {
  return {
    text,
    Color
  }
}

// optional parameters
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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


export class PDF {
  getContent(): unknown[] {
    return []
  }

  print() {
    const content = this.getContent()
    console.log(content)
  }
}

class Contrato extends PDF {
  ID = 'Contrato'
  data: string


  constructor(data: string) {
    super();
    this.data = data;
  }

  override getContent() {
    return ['Contrato', this.data]
  }
}

class Pagare extends PDF {
  ID = 'Pagare'
  data: string


  constructor(data: string) {
    super();
    this.data = data;
  }

  override getContent() {
    return ['Pagare', this.data]
  }
}


export class AppPresenterService {

  constructor() {
  }

  createPdfs() {

    const contrato = new Contrato('asdasdasd')
    const pagare = new Pagare('asdasdasd')
    return [contrato, pagare]
  }

  printPDF(pdf: PDF) {
    pdf.print()
  }
}

export class AppComponent  {
  title = 'test_angular';
  pdfs: PDF[] = [];

  constructor(private appPresenterService: AppPresenterService) {
  }

  ngOnInit() {
    this.pdfs = this.appPresenterService.createPdfs()
  }


  onClick(pdf: PDF) {
    pdf.print()
  }

}
