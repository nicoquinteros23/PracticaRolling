/*
Consignas

Crear un pequeño proyecto HTML+JS en el cual ingresemos por prompt una cadena de texto y como resultado a lo que será una “busqueda” la pagina HTML nos muestre una tabla o lista de los países del siguiente array que incluyan esa cadena en el nombre.

Opcional: como extra pueden programar que en caso de ingresar una sola letra, en lugar de mostrar los países que la incluyan en el nombre, solo mostrarán los países que empiecen con esa letra en el nombre.

Presentación
Crear una rama nueva en el repositorio con el nombre desafío11, pusherlo al repositorio remoto y crear una pull request, presentar el link a la pull request. Pueden agregarme como colaborador si desean practicar como sería que alguien les supervise el pull y lo autorice a mergear o no dependiendo si esta correcto.
*/

const paisesLatinoamericanos = [
  {
    nombre: "Argentina",
    ubicacion: "Sudamérica",
    habitantes: 44938712,
    capital: "Buenos Aires",
  },
  {
    nombre: "Brasil",
    ubicacion: "Sudamérica",
    habitantes: 213918000,
    capital: "Brasilia",
  },
  {
    nombre: "Chile",
    ubicacion: "Sudamérica",
    habitantes: 19296289,
    capital: "Santiago",
  },
  {
    nombre: "Colombia",
    ubicacion: "Sudamérica",
    habitantes: 50372424,
    capital: "Bogotá",
  },
  {
    nombre: "Costa Rica",
    ubicacion: "Centroamérica",
    habitantes: 5127582,
    capital: "San José",
  },
  {
    nombre: "Cuba",
    ubicacion: "Caribe",
    habitantes: 11333483,
    capital: "La Habana",
  },
  {
    nombre: "Ecuador",
    ubicacion: "Sudamérica",
    habitantes: 17643054,
    capital: "Quito",
  },
  {
    nombre: "El Salvador",
    ubicacion: "Centroamérica",
    habitantes: 6486201,
    capital: "San Salvador",
  },
  {
    nombre: "Guatemala",
    ubicacion: "Centroamérica",
    habitantes: 18249339,
    capital: "Ciudad de Guatemala",
  },
  {
    nombre: "Honduras",
    ubicacion: "Centroamérica",
    habitantes: 9757654,
    capital: "Tegucigalpa",
  },
  {
    nombre: "México",
    ubicacion: "Norteamérica",
    habitantes: 126190788,
    capital: "Ciudad de México",
  },
  {
    nombre: "Nicaragua",
    ubicacion: "Centroamérica",
    habitantes: 6624554,
    capital: "Managua",
  },
  {
    nombre: "Panamá",
    ubicacion: "Centroamérica",
    habitantes: 4314768,
    capital: "Ciudad de Panamá",
  },
  {
    nombre: "Paraguay",
    ubicacion: "Sudamérica",
    habitantes: 7132530,
    capital: "Asunción",
  },
  {
    nombre: "Perú",
    ubicacion: "Sudamérica",
    habitantes: 33172813,
    capital: "Lima",
  },
  {
    nombre: "Puerto Rico",
    ubicacion: "Caribe",
    habitantes: 3193694,
    capital: "San Juan",
  },
  {
    nombre: "República Dominicana",
    ubicacion: "Caribe",
    habitantes: 10847904,
    capital: "Santo Domingo",
  },
  {
    nombre: "Uruguay",
    ubicacion: "Sudamérica",
    habitantes: 3477000,
    capital: "Montevideo",
  },
  {
    nombre: "Venezuela",
    ubicacion: "Sudamérica",
    habitantes: 28435943,
    capital: "Caracas",
  },
];

const cuerpoTablaPaises = document.getElementById("cuerpoTabla");
const cuerpoTablaPaises1 = document.getElementById("cuerpoTabla1");
let bandera = false;

const pintarTabla = () => {
  for (let pais of paisesLatinoamericanos) {
    cuerpoTabla.innerHTML += `<tr>
      <th>${pais.nombre}</th>
      <th>${pais.capital}</th>
      </tr>`;
  }
};
pintarTabla();

const Busqueda = () => {
    
    bandera = false;
   
  const busqueda = prompt("Ingrese un pais para buscar");

  for (let pais of paisesLatinoamericanos) {
    if (pais.nombre.toLowerCase() === busqueda.toLowerCase()) {
      alert("Se encontro el pais");
      cuerpoTabla1.innerHTML += `<tr>
      <th>${pais.nombre}</th>
      <th>${pais.capital}</th>
      </tr>`;
      bandera = true;
    } 
  }
  if (bandera === false) {
    cuerpoTabla1.innerHTML += `<tr>
    <th>${"No se encontró: " + busqueda}</th>
    </tr>`;
  }
  
};
