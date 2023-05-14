/*1- Calcular el total de sueldos del siguiente array de personas:

const personas = [
    { nombre: 'Juan', edad: 25, ciudad: 'Buenos Aires', sueldo: 50000 },
    { nombre: 'María', edad: 30, ciudad: 'Rosario', sueldo: 65000 },
    { nombre: 'Pedro', edad: 40, ciudad: 'Córdoba', sueldo: 80000 },
    { nombre: 'Lucía', edad: 35, ciudad: 'Mendoza', sueldo: 75000 }
    ];

2- A partir del mismo array de personas crear un nuevo array solo con los mayores de 30.


/*
Presentación
Crear una rama nueva en el repositorio con el nombre desafío10, pusherlo al repositorio remoto y crear una pull request, presentar el link a la pull request.
*/

//1- Calcular el total de sueldos del siguiente array de personas:

const personas = [
  { nombre: "Juan", edad: 25, ciudad: "Buenos Aires", sueldo: 50000 },
  { nombre: "María", edad: 30, ciudad: "Rosario", sueldo: 65000 },
  { nombre: "Pedro", edad: 40, ciudad: "Córdoba", sueldo: 80000 },
  { nombre: "Lucía", edad: 35, ciudad: "Mendoza", sueldo: 75000 },
];

function CalcularSueldo() {
  const sueldos = personas.map((persona) => persona.sueldo);
  console.log(sueldos);
  const totalSueldos = sueldos.reduce((acum, sueldo) => acum + sueldo);
  console.log(totalSueldos);
  console.log("-------------------");
}

//2- A partir del mismo array de personas crear un nuevo array solo
//con los mayores de 30.

function mayor30() {
    const mayoresDe30 = personas.filter((persona) => persona.edad > 30);
    console.log(mayoresDe30);
    console.log("-------------------");
    }

   /* 3- Calcular la ganancia de vender 3 productos de cada uno del siguiente array de productos 
    pero solo de los que tienen la propiedad de sold en true, teniendo en cuenta que 
    la ganancia por venta es del 30%.
    */

    const productos = [
    { nombre: 'Camisa', precio: 150, stock: 20, vendidos: 5, sold: true },
    { nombre: 'Pantalón', precio: 250, stock: 15, vendidos: 8, sold: false },
    { nombre: 'Zapatillas', precio: 500, stock: 10, vendidos: 3, sold: true },
    { nombre: 'Bolso', precio: 300, stock: 25, vendidos: 12, sold: false },
    { nombre: 'Cinturón', precio: 100, stock: 30, vendidos: 10, sold: true },
    { nombre: 'Sombrero', precio: 200, stock: 5, vendidos: 1, sold: false },
    { nombre: 'Bufanda', precio: 50, stock: 50, vendidos: 20, sold: true },
    { nombre: 'Guantes', precio: 80, stock: 40, vendidos: 18, sold: false },
    { nombre: 'Gorra', precio: 120, stock: 8, vendidos: 2, sold: true },
    { nombre: 'Gafas de sol', precio: 180, stock: 12, vendidos: 6, sold: false },
    { nombre: 'Pulsera', precio: 20, stock: 60, vendidos: 30, sold: true },
    { nombre: 'Collar', precio: 40, stock: 45, vendidos: 25, sold: false },
    { nombre: 'Anillo', precio: 60, stock: 35, vendidos: 15, sold: true },
    { nombre: 'Pendientes', precio: 30, stock: 55, vendidos: 22, sold: false },
    { nombre: 'Reloj', precio: 400, stock: 6, vendidos: 4, sold: true }
    ];

   
    function ganancia(){
       
    const p = productos.filter( producto => producto.sold === true);
    const ganancia = p.map( producto => producto.precio * 3 * 0.3);
    console.log(ganancia);
    const totalGanancia = ganancia.reduce((acum, ganancia) => acum + ganancia);     
    console.log("TOTAL = "+totalGanancia);
    }

 





    




