// A constructor for defining new Cities
function City(options) {

  this.name = options.name || "Mar del Plata";
  this.nameTypeLocation = "city";
};

// A constructor for defining new Countries
function Country(options) {

  this.name = options.name || "Argentina";
  this.nameTypeLocation = "country";
};

// A constructor for defining new Continents
function Continent(options) {

  this.name = options.name || "America";
  this.nameTypeLocation = "continent";
};


function locationsFactory() {}

// Default type location
locationsFactory.prototype.typeClass = Continent;

// Our Factory method for creating new Vehicle instances
locationsFactory.prototype.createLocation = function(options) {

  switch (options.locationType) {
    case "City":
      this.typeClass = City;
      break;
    case "Country":
      this.typeClass = Country;
      break;
    case "Continent":
      this.typeClass = Continent;
      break;
  }

  return new this.typeClass(options);
};


function addLocation() {

  let typeOfLocation = document.getElementById('location').value;
  let nameOfLocation = document.getElementById('name').value;

  let newLocation = new locationsFactory();

  let location = newLocation.createLocation({
    locationType: typeOfLocation,
    name: nameOfLocation
  });

  this.addToTable(location);
  console.log(location);
};

function addToTable (location) {

  let newList = document.getElementsByTagName("list")[0];
  let ul = document.createElement('ul');
  let li = document.createElement('li');

  list.appendChild(ul);
  list.hidden = false;

  li.textContent = " - " + location.name + " is a, " + location.nameTypeLocation;
  ul.appendChild(li);
}
