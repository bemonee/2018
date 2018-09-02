function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.count = function () {
  return this.observerList.length;
};

ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function (obj, startIndex) {
  var i = startIndex;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }

  return -1;
};

ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice(index, 1);
};


const Vehiculo = function (marca, modelo, valor, color) {
  this.marca = marca;
  this.modelo = modelo;
  this.valor = valor;
  this.color = color;

};

const Mecanico = function () {
  this.name = '';
  this.setNameRandom = function () {
    const names = ['Miguel', 'Pedro', 'Jorge', 'Martin'];
    const i = Math.floor(Math.random() * (0 - 4)) + 4;
    this.name = names[i];
    console.log(i);
  }

};
function Observer() {
  this.update = function () {
    // ...
  };
};
function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function (observer) {
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};
Subject.prototype.notify = function (context) {
  const observerCount = this.observers.count();
  for (var i = 0; i < observerCount; i++) {
    this.observers.observerList[i].update(context);
  }
};



// Extend an object with an extension
function extend(obj, extension) {
  for (var key in extension) {
    obj[key] = extension[key];
  }
}

//get all attributtes dom

const addButton = document.querySelector('#add'),
  tableBody = document.querySelector('#bodyTable');
const mc = new Mecanico();

extend(mc, new Observer());
mc.update = function (context) {
  mc.setNameRandom();
  const tbody = document.querySelector('#tbody'),
    check = document.createElement('input'),
    tr = document.createElement('tr');
  check.setAttribute('type', 'checkbox');
  if (this != null) {
    check.checked = true;
  }
  const td = document.createElement('td'),
    td1 = document.createElement('td');
  td.appendChild(document.createTextNode(this.name));
  td.appendChild(check);
  td1.appendChild(check);
  tr.appendChild(td);
  tr.appendChild(td1);
  tbody.appendChild(tr);
}

const addNewObserver = function () {
  const modelo = document.querySelector('#modelo'),
    marca = document.querySelector('#marca'),
    valor = document.querySelector('#valor'),
    color = document.querySelector('#color');
  const pp = new Vehiculo(modelo.value, marca.value, valor.value, color.value);
  extend(pp, new Subject());
  const tr = document.createElement('tr');
  const array = [];
  const text = [];
  text.push(pp.modelo);
  text.push(pp.marca);
  text.push(pp.color);
  text.push(pp.valor);
  const updateBtn = document.createElement('button');
  updateBtn.setAttribute('class', 'btn btn-danger');
  const text4 = document.createTextNode('Update');
  updateBtn.appendChild(text4);
  updateBtn.addEventListener('click', () => pp.notify("PUTO"));
  for (var i = 0; i < 5; i++) {
    array.push(document.createElement('td'));
    if (i == 4) {
      array[i].appendChild(updateBtn);
    } else {
      array[i].appendChild(document.createTextNode(text[i]));
    }
    tr.appendChild(array[i]);
  }
  pp.addObserver(mc);
  tableBody.appendChild(tr);
}
addButton.addEventListener('click', addNewObserver);
