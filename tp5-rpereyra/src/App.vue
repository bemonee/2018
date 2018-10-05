<template>
  <main id="app" class="container-fluid">
    <PersonForm
      msg="Please fill the form"
      :parentPossibleGenders="possibleGenders"
      :parentPersons="persons"
      @interface="handlePersonsUpdate"
    />
    <PersonTable
      :parentPersons="persons"
      :parentPossibleGenders="possibleGenders"
      @interface="handlePersonsUpdate"
    />
  </main>
</template>

<script>
import PersonForm from "./components/PersonForm.vue";
import PersonTable from "./components/PersonTable.vue";

export default {
  name: "app",
  components: {
    PersonForm,
    PersonTable
  },
  data() {
    return {
      persons: [],
      possibleGenders: ["m", "f"] // "Les disputades" compatibility
    };
  },
  methods: {
    handlePersonsUpdate(persons) {
      this.persons = persons;
    }
  }
};
</script>