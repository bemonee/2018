<template>
  <v-layout column>
    <v-flex xs12 justify-end>
      <div class="title mb-2">Person Modification</div>
      <PersonForm :parentPossibleGenders="parentPossibleGenders"/>
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import PersonForm from "@/components/PersonForm.vue";

export default {
  name: "PersonUpdate",
  props: {
    parentPossibleGenders: Array
  },
  data() {
    return {
      person: null
    };
  },
  components: {
    PersonForm
  },
};
</script>
