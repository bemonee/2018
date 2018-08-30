let card = document.querySelector('#card_container');
let child_characters = document.querySelector('#child_characters');

child_characters.style.maxHeight = `${card.clientHeight}px`;

function Warrior(options) {
	this.name = options.name || 'Juan';
	this.gender = options.gender || 'Male';
	this.health = options.health || 200;
	this.colorSkin = options.colorSkin || 'black';
	this.height = options.height || 1.8;
	this.weapon = options.weapon || 'Axe';
	this.isDead = options.isDead || false;
}
function Archer(options) {
	this.name = options.name || 'Pepe';
	this.gender = options.gender || 'Male';
	this.health = options.health || 100;
	this.colorSkin = options.colorSkin || 'white';
	this.height = options.height || 1.7;
	this.weapon = options.weapon || 'Bow';
	this.isDead = options.isDead || false;
}
function Mage(options) {
	this.name = options.name || 'Marta';
	this.gender = options.gender || 'Female';
	this.health = options.health || 75;
	this.colorSkin = options.colorSkin || 'white';
	this.height = options.height || 1.5;
	this.weapon = options.weapon || 'Oracle';
	this.isDead = options.isDead || false;
}
function Hunter(options) {
	this.name = options.name || 'Rogelio';
	this.gender = options.gender || 'Male';
	this.health = options.health || 150;
	this.colorSkin = options.colorSkin || 'brown';
	this.height = options.height || 1.63;
	this.weapon = options.weapon || 'Sword';
	this.isDead = options.isDead || false;
}

function CharacterFactory() { }
CharacterFactory.prototype.character = Archer
CharacterFactory.prototype.createCharacter = (options) => {
	switch (options.type) {
		case 'archer':
			this.character = Archer;
			break;
		case 'warrior':
			this.character = Warrior;
			break;
		case 'hunter':
			this.character = Hunter;
			break;
		case 'mage':
			this.character = Mage;
			break;
	}
	return new this.character(options);
}
var factory = new CharacterFactory();
var character_list = [];

const read_selectors = () => {
	const form = document.querySelector('#form');
	const name = form.querySelector('#name_input').value;
	const gender = form.querySelector('[name="gender"]:checked').value;
	const color = form.querySelector('#color_input').value;
	const height = form.querySelector('#height_input').value;
	const weapon = form.querySelector('#weapon_input').value;
	const character_class = form.querySelector('#character_input').value;

	if (name.trim() !== '' && gender.trim() !== '' && color.trim() !== '', height.trim() !== '' && weapon.trim() !== '' && character_class.trim() !== '') {
		let configuration = {
			type: character_class,
			name: name,
			gender: gender,
			colorSkin: color,
			height: height,
			weapon: weapon
		};

		const character = factory.createCharacter(configuration);
		character_list.push(character);

		const table = document.querySelector('.table'),
			tbody = table.querySelector('tbody'),
			tr = document.createElement('tr'),
			td_class_content = document.createTextNode(character_class.charAt(0).toUpperCase() + character_class.slice(1)),
			td_class = document.createElement('td'),
			td_name_content = document.createTextNode(character.name),
			td_name = document.createElement('td'),
			td_gender_content = document.createTextNode(character.gender),
			td_gender = document.createElement('td'),
			td_color_content = document.createTextNode(character.colorSkin),
			td_color = document.createElement('td'),
			td_height_content = document.createTextNode(character.height),
			td_height = document.createElement('td'),
			td_weapon_content = document.createTextNode(character.weapon),
			td_weapon = document.createElement('td'),
			td_health_content = document.createTextNode(character.health),
			td_health = document.createElement('td'),
			td_dead_content = document.createTextNode(character.isDead),
			td_dead = document.createElement('td');

		td_class.append(td_class_content);
		td_name.append(td_name_content);
		td_gender.append(td_gender_content);
		td_color.append(td_color_content);
		td_height.append(td_height_content);
		td_weapon.append(td_weapon_content);
		td_health.append(td_health_content);
		td_dead.append(td_dead_content);

		tr.appendChild(td_class);
		tr.appendChild(td_name);
		tr.appendChild(td_gender);
		tr.appendChild(td_color);
		tr.appendChild(td_height);
		tr.appendChild(td_weapon);
		tr.appendChild(td_health);
		tr.appendChild(td_dead);
		tbody.appendChild(tr);
	}
}

const btn_submit = document.querySelector('#btn_submit');
btn_submit.addEventListener('click', read_selectors);

