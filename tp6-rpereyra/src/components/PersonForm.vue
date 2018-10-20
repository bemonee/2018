<template lang="html">
  <v-layout wrap>
    <v-flex md6 xs12 justify-end>
      <v-alert v-if="formIsInvalid" :value="true" color="error" icon="error" class="my-3"> {{ validationError }} </v-alert>
      <v-form ref="form">
        <v-text-field
          v-model="person.name"
          label="Name and Surname"
          color="pink"
          ></v-text-field>
        <v-text-field
          v-model.number="person.age"
          :min="ageRange.min" :max="ageRange.max"
          label="Age"
          type="number"
          color="pink"
          ></v-text-field>
        <v-radio-group v-model="person.gender" row>
          <v-radio v-for="gender in parentPossibleGenders" :key="gender" name="genderRadio" :id="gender + 'Radio'"
            :value="gender" :label="gender" color="pink"></v-radio>
        </v-radio-group>
        <v-btn color="pink"
          @click="onSubmit"
          >
          submit
        </v-btn>
        <v-btn @click="onClear">clear</v-btn>
      </v-form>
      <Loader :loading="loading"></Loader>
    </v-flex>
  </v-layout>
</template>

<script lang="js">
import PersonService from '@/services/personService'
import Loader from "./Loader.vue";

export default {
  name: 'person-form',
  props: {
    parentPerson: Object,
    parentPossibleGenders: Array
  },
  components: {
    Loader
  },
  beforeMount() {
    this.possibleGenders = this.parentPossibleGenders;
  },
  data() {
    return {
      ageRange: {
        min: 0,
        max: 200
      },
      person: {
        name: "",
        age: "",
        gender: ""
      },
      possibleGenders: [],
      validationError: "",
      loading: false
    }
  },
  created() {
    if(this.$route.params.id) {
      this.loading = true;
      PersonService.getOne(this.$route.params.id)
        .then((person) => {
          this.person = person;
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });
    }
  },
  methods: {
    onSubmit() {
      if (this.validateForm()) {
        this.loading = true;
        if(this.$route.params.id) {
          PersonService.update(this.person)
            .then((person) => {
              this.onClear();
              this.loading = false;
              this.$router.push({ name: "persons" });
            })
            .catch((err) => {
              this.onClear();
              this.validationError = err
              this.loading = false;
            });
        } else {
          PersonService.create(this.person)
            .then((person) => {
              this.onClear();
              this.loading = false;
              this.$router.push({ name: "persons" });
            })
            .catch((err) => {
              this.onClear();
              this.validationError = err;
              this.loading = false;
            });
        }
      }
    },
    onClear() {
        this.$refs.form.reset();
        this.validationError = "";
    },
    validateForm() {
      if (!this.person.name) {
        this.validationError = "Name is required.";
        return false;
      }

      const ageIsInteger = Number.isInteger(this.person.age);
      const ageIsInRange = (this.person.age >= this.ageRange.min && this.person.age <= this.ageRange.max);
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
    }
  },
  computed: {
    formIsInvalid() {
      return (this.validationError.length > 0);
    }
  }
}
</script>