<template lang="html">
  <form class="form-row bg-secondary rounded p-2 align-items-stretch mt-3" @submit.prevent="onSubmit">
    <div class="col-12">
      <h1>Please fill the form</h1>
    </div>
    <div class="col-md-4 col-auto form-group">
      <label for="nameInput">Name and Surname</label>
      <input type="text" class="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Enter name"
        v-model="person.name">
    </div>
    <div class="col-auto form-group">
      <label for="ageInput">Age</label>
      <input type="number" :min="ageRange.min" :max="ageRange.max" class="form-control" id="ageInput"
        aria-describedby="ageHelp" placeholder="Enter Age" v-model.number="person.age">
    </div>
    <div class="col-auto form-group">
      <label>Gender</label>
      <div class="align-items-center">
        <div v-for="gender in parentPossibleGenders" class="custom-control custom-radio custom-control-inline" :key="gender">
          <input class="custom-control-input" type="radio" name="genderRadio" :id="gender + 'Radio'"
            :value="gender" v-model="person.gender">
          <label class="custom-control-label text-uppercase" :for="gender + 'Radio'">{{ gender }}</label>
        </div>
      </div>
    </div>
    <div class="col-auto align-self-center mt-3">
      <button type="submit" class="btn btn-outline-light">Submit</button>
    </div>
    <FormValidationAlert :formIsInvalid="formIsInvalid" :validationError="validationError"/>
  </form>
</template>

<script lang="js">
import FormValidationAlert from "./FormValidationAlert.vue";

export default {
  name: 'person-form',
  props: {
    parentPersons: Array,
    parentPossibleGenders: Array
  },
  components: {
    FormValidationAlert
  },
  beforeMount() {
    this.persons = this.parentPersons;
    this.possibleGenders = this.parentPossibleGenders;
  },
  updated() {
    this.persons = this.parentPersons;
  },
  data() {
    return {
      ageRange: {
        min: 0,
        max: 200
      },
      person: {
        id: 0,
        name: "",
        age: "",
        gender: ""
      },
      validationError: "",
      persons: [],
      possibleGenders: [],
      personCounter: 0
    }
  },
  methods: {
    onSubmit() {
      if (this.validateForm()) {
        this.persons.push({
          id: ++this.personCounter,
          name: this.person.name,
          age: this.person.age,
          gender: this.person.gender
        });
        this.clearInputs();
        this.$emit('interface', this.persons);
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
    clearInputs() {
      this.person.name = "";
      this.person.age = "";
      this.person.gender = "";
    }
  },
  computed: {
    formIsInvalid() {
      return (this.validationError.length > 0);
    }
  }
}
</script>