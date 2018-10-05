<template lang="html">
  <section class="form-row bg-secondary rounded p-2 mt-2" v-show="thereArePersons">
    <!-- Filters -->
    <GenderFilter :parentPossibleGenders="parentPossibleGenders" @interface="handleFilterModification"/>
    <!-- Persons table -->
    <div class="col-12">
      <table class="table table-bordered mt-2">
        <thead>
          <tr class="d-flex">
            <th scope="col" class="col-9">Name</th>
            <th scope="col" class="col-1 text-center">Age</th>
            <th scope="col" class="col-1 text-center">Gender</th>
            <th scope="col" class="col-1 text-center">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="thereAreFilteredPersons">
            <PersonRow v-for="person in getFilteredPersons" :parentPerson="person" @clicked="handlePersonDelete"/>
          </template>
          <template v-else>
            <tr>
              <td colspan="3">* No persons were found.</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="js">
  import GenderFilter from "./GenderFilter.vue";
  import PersonRow from "./PersonRow.vue";

  export default  {
    name: 'person-table',
    props: {
      parentPersons: Array,
      parentPossibleGenders: Array
    },
    components: {
      GenderFilter,
      PersonRow
    },
    data() {
      return {
        persons: [],
        filter: null
      }
    },
    beforeMount() {
      this.persons = this.parentPersons;
    },
    methods: {
      handleFilterModification (newFilter) {
        this.filter = newFilter;
      },
      handlePersonDelete (personId) {
        this.persons = this.persons.filter(person =>
          person.id !== personId
        );
        this.$emit('interface', this.persons);
      }  
    },
    computed: {
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
        return this.persons.filter(person =>
          person.gender === this.filter
        );
      }
    }
}
</script>
