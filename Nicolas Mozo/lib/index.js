Vue.component('filter-user', {
	template: `
		<select v-on:change="updateActiveSex">
			<option 
				v-for="sex in sexs" 
				:value="sex.toLowerCase()"> 
				{{ sex }} 
			</option>
		</select>
	`,
	props: ['sexs', 'active'],
	methods: {
		updateActiveSex(event) {
			this.active(event.target.value) 
		}
	}
})

Vue.component('form-user', {
	template: `
		<section :id="getHashCode()">
			<form @submit.prevent="refresh()">
				<input type="text" v-model="user.name" placeholder="Name">
				<input type="number" v-model="user.age" placeholder="Age">
				<filter-user :sexs="sexsLabels" :active="updateActiveSex"></filter-user>
				<button> Agregar </button>
			</form>
		</section>
	`,
	props: ['ready'],
	data: 
		() => {
			return {
				id: 0,
				user: {		
					name: '',
					age: 0,
					sex: ''
				},
				sexsLabels: ['Female', 'Male', 'Undefined']
			}
		},
	methods: {
		getHashCode(){
			return "user_" + this.user.id;
		},
		refresh(){
			
			if(!this.validate()){
				alert("Completa todos los campos macho")
				return;
			}

			this.user.id = this.id;
			this.id++;
			
			this.ready(Object.assign({}, this.user));
			this.reset();
		},
		reset(){			
			this.user.name = "";
			this.user.age = 0;
			this.user.sex = "";
		},
		updateActiveSex(result){
			this.user.sex = result
		},
		validate(){

			if(this.user.name == "" || this.user.age == 0 || this.user.sex == "")
				return false

			return true
		}
	}
});

Vue.component('item-user', {
	props: ['user'],
	template: `
		<li>
			<h2> {{ user.name }} </h2>
			<h4> {{ user.sex }} </h4>
			<b> {{ user.age }} years old </b>
		</li>
	`
})