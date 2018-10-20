<template lang="html">
  <v-layout align-end column>
    <v-flex xs12>
      <v-btn-toggle v-model="filter" class="my-2 ml-auto">
        <v-btn flat value="left" @click="clearFilter">
          All
        </v-btn>
        <v-btn v-for="gender in parentPossibleGenders" @click="setFilter(gender)" flat>
          {{ gender }}
        </v-btn>
      </v-btn-toggle>
    </v-flex>
  </v-layout>
</template>

<script lang="js">
  export default  {
    name: 'gender-filter',
    props: {
      parentPossibleGenders: Array,
    },
    data() {
      return {
        filter: null
      }
    },
    methods: {
      setFilter(gender) {
        this.filter = gender;
        this.$emit('interface', this.filter);
      },
      clearFilter() {
        this.filter = null;
        this.$emit('interface', this.filter);
      }
    }
}
</script>
