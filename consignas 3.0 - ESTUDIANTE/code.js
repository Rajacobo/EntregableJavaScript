/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe "tu codigo a partir de aqui --------------- */
datosPersona.nombre = prompt("Ingrese su nombre: ")
let anio = prompt("Ingrese año de nacimiento: ")
datosPersona.edad = 2022 - anio
datosPersona.ciudad = prompt("Ingrese su ciudad de origen: ")
let validadcionJS = confirm("Te interesa JavaScript?")
console.log(validadcionJS)
if(validadcionJS){
  datosPersona.interesPorJs = "Si"
}else{
  datosPersona.interesPorJs="No"
}
console.log(datosPersona)
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  const spanNombre = document.querySelector("#nombre")
  const spanEdad= document.querySelector("#edad")
  const spanCiudad = document.querySelector("#ciudad")
  const spanInteresJs = document.querySelector("#javascript")
  spanNombre.innerText = datosPersona.nombre
  spanEdad.innerText = datosPersona.edad
  spanCiudad.innerText = datosPersona.ciudad
  spanInteresJs.innerText = datosPersona.interesPorJs
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let listadoMaterias = ""
  listado.forEach(materias => {
    listadoMaterias +=
    `
    <div class="caja">
    <img src="${materias.imgUrl}" alt ="${materias.lenguajes}">
    <p>Lenguajes: ${materias.lenguajes}</p>
    <p>Bimestre: ${materias.bimestre}</p>
    </div>
    `
  })
  let fila = document.querySelector("#fila")
  fila.innerHTML = listadoMaterias;
}

function alternarColorTema() {
/* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
document.body.classList.toggle('dark');



}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const sobreMi = document.querySelector('#sobre-mi')
document.addEventListener('keydown',(e) =>{
  tecla = e.key;
  if(tecla === "F" || tecla === "f"){
    console.log(tecla)
    sobreMi.classList.toggle('oculto')
  }
  })
