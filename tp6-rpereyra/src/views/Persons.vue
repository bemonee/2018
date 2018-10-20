<template>
  <v-layout column>
    <v-flex xs12 justify-end>
      <div class="title">Persons List</div>
      <PersonTable :parentPossibleGenders="parentPossibleGenders"/>
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import PersonTable from "@/components/PersonTable.vue";

export default {
  name: "Persons",
  props: {
    parentPossibleGenders: Array
  },
  components: {
    PersonTable
  },
};
</script>
