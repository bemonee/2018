class Persona {
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }
}

function clicked (){
  let nombre = document.getElementById("name").value;
  let edad = document.getElementById('edad').value;
  if(nombre != '' && edad != ''){
    let persona = new Persona(nombre,edad);
    this.clean();
    this.addPerson(persona);
  }else{
    alert("Datos incompletos");
  }
}

function clean(){
  document.getElementById("name").value = "";
  document.getElementById("edad").value = "";
}

function addPerson(persona){
  let list = document.getElementsByClassName("listBelow")[0];
  let ul;
  let li = document.createElement('li');
  if(list.childElementCount == 0){
    let txt = document.createElement('h3');
    txt.textContent = 'Personas en cola';
    ul = document.createElement('ul');
    list.appendChild(ul);
    list.hidden = false;
    ul.appendChild(txt);
  }else{
    ul = list.children[0];
  }
  li.textContent = persona.nombre + ", " + persona.edad +" años.";
  ul.appendChild(li);
  console.log(li);
}