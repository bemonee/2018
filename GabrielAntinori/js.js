
class Hero {
  constructor(name, ability) {
    
    this.name = name;
    this.ability = ability;

  }
  
}


function ok(){
  const name = document.getElementById('in_nombre').value;
  const ability = document.getElementById('in_habilidad').value;

  if(name != '' && ability != ''){
    const heroe = new Hero(name,ability);
    this.save(heroe);
  }else{
    alert('Datos incompletos')
  }

}

function save(heroe){
  const ul = document.getElementById('list');
  const li = document.createElement('li');

  li.textContent = heroe.name + " " + heroe.ability;
  ul.appendChild(li);
}