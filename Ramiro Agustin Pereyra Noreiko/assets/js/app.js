var app = new Vue({
    el: '#app',
    data: {
        // Flexible input definition
        possibleGenders: ["m", "f"], // "Les disputades" compatibility
        ageRange: {
            min: 0,
            max: 200
        },
        // Two-way binding
        person: {
            name: "",
            age: "",
            gender: ""
        },
        validationError: "",
        filter: null,
        // Section core properties
        persons: []
    },
    computed: {
        formIsInvalid() {
            return (this.validationError.length > 0);
        },
        thereArePersons() {
            return (this.persons.length > 0);
        },
        thereAreFilteredPersons() {
            return (this.getFilteredPersons.length > 0);
        },
        getFilteredPersons() {
            if (this.filter === null) {
                return this.persons;
            }
            return this.persons.filter(p =>
                p.gender === this.filter
            );
        }
    },
    methods: {
        onSubmit() {
            if (this.validateForm()) {
                this.persons.push({
                    name: this.person.name,
                    age: this.person.age,
                    gender: this.person.gender
                });
                this.clearInputs();
            }
        },
        validateForm() {
            if (this.person.name.length < 1) {
                this.validationError = "Name is required.";
                return false;
            }

            const ageIsInteger = Number.isInteger(this.person.age);
            const ageIsInRange = (this.person.age >= this.ageRange.min || this.person.age <= this.ageRange.max);
            if (!ageIsInteger || !ageIsInRange) {
                this.validationError = "Age is invalid.";
                return false;
            }

            if (this.possibleGenders.indexOf(this.person.gender) === -1) {
                this.validationError = "Gender is required.";
                return false;
            }

            this.validationError = "";
            return true;
        },
        setFilter(gender) {
            this.filter = gender;
        },
        clearFilter() {
            this.filter = null
        },
        clearInputs() {
            this.person.name = "";
            this.person.age = "";
            this.person.gender = "";
        }
    }
})