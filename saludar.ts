interface persona{
    nombre:string,
    edad: number,
    Cumpleaños: string
}

const Persona:persona[] = [
    {nombre: "kevyn", edad: 20, Cumpleaños: "06/10/2005"}
]


console.log(`hola ${Persona[0].nombre}, tienes estos años: ${Persona[0].edad} y uy ya casi cumples ${Persona[0].Cumpleaños}`)




