/**todo lo que seleccionemos al principioo 
 * debe ser seleccionado mediante el document
 *  Opcion de seleccion
 * 
 * clasicas
 * getElementByld
 * getElementsByClassName
 * 
 * 
 * Modernas
 * QuerySelector
 * Queryselectorall
 * nos permiten seleccionar por un selector css
 * etiqueta por ejemplo form
 * clase . por ejemplo form.control
 * id # por ejemplo #tittle
 * queryselector () si usamos un selector como de clase
 * solo vaa seleccionar la primera coincidencia
 * queryselector all selecciona todos.
 * Pasos para extraer la informacion delformulario
 * 1  Agregar un event listener del evento submit
 * 2 prevenir comportamiento por default
 * 3construir un form data dandole el elemento formulario
 * 4 extraer informacion usando formData
 * 5crear un objeto con infirmacion usando object.fromEntries
 */


const formEl = document.getElementById("albumform");
console.log(formEl);

const mainEl = document.querySelector("#albumcontainer");
console.log(mainEl);
//EVENTOS es cualquier accion que realiza el usuario en la pagina web

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(formEl);
    console.log(formData);
    const dataArray = [...formData];
    console.log(dataArray);

    const  dataObject = Object.fromEntries(dataArray);
    console.log(dataObject);
    //como agregar album todo en una sola linea
});
const card = `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
`;
 //manipulacion de interfaz
  //1 prpuesta llamada inner html dentro de ella podemos osbservar 
  //todo el html que vive dentro de la etiqueta sleccionada
//2 propiedad llamada textContent//
console.log(mainEl.innerHTML);
console.log("text content");
console.log(mainEl.textContent);

mainEl.innerHTML += "<h1> hola ch71 </hi>";
mainEl.innerHTML +=card;
console.log(mainEl.innerHTML);

//mainEl.textContent += "hola";
//mainEl.textContent += "card";

mainEl.insertAdjacentHTML ("afterbegin", "<p>insertado por insert adjacent html </p>",
  
);
mainEl.insertAdjacentHTML("beforeend", card);


