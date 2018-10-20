<template>
    <v-layout column>
        <v-flex xs12 justify-end>
            <div class="title mb-2">New Person</div>
            <PersonForm :parentPossibleGenders="parentPossibleGenders"/>
        </v-flex>
    </v-layout>
</template>

<script>
// @ is an alias to /src
import PersonForm from "@/components/PersonForm.vue";

export default {
  name: "PersonCreate",
  props: {
    parentPossibleGenders: Array
  },
  components: {
    PersonForm
  }
};
</script>
