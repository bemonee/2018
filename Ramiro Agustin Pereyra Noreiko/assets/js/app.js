var app = new Vue({
    el: '#app',
    data: {
        // Flexible input definition
        possibleGenders: ["m", "f"], // "Les disputades" compatibility
        possibleAges: Array.from({
            length: 100
        }, (v, k) => k + 1), // 0...100
        // Two-way binding
        person: {
            name: "",
            age: 0,
            gender: ""
        },
        // Section core properties
        persons: [],
        validationError: "",
        filter: null
    },
    computed: {
        formIsInvalid: function () {
            return (this.validationError.length > 0);
        },
        thereArePersons: function () {
            return (this.persons.length > 0);
        },
        thereAreFilteredPersons: function () {
            return (this.getFilteredPersons.length > 0);
        },
        getFilteredPersons: function () {
            if (this.filter === null) {
                return this.persons;
            }
            const f = this.filter;
            return this.persons.filter(p =>
                p.gender === f
            );
        }
    },
    methods: {
        onSubmit: function () {
            if (this.validateForm()) {
                this.persons.push({
                    name: this.person.name,
                    age: this.person.age,
                    gender: this.person.gender
                });
                this.clearInputs();
            }
        },
        validateForm: function () {
            if (this.person.name.length < 1) {
                this.validationError = "Name is required.";
                return false;
            }

            const fromAge = this.possibleAges[0];
            const toAge = this.possibleAges[this.possibleAges.length - 1];
            if (this.person.age < fromAge || this.person.age > toAge) {
                this.validationError = "Age is required.";
                return false;
            }

            if (this.possibleGenders.indexOf(this.person.gender) === -1) {
                this.validationError = "Gender is required.";
                return false;
            }

            this.validationError = "";
            return true;
        },
        setFilter: function (gender, $event) {
            this.filter = gender;
        },
        clearFilter: function () {
            this.filter = null
        },
        clearInputs: function () {
            this.person.name = "";
            this.person.age = 0;
            this.person.gender = "";
        }
    }
})