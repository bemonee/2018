<template lang="html">
  <v-layout column>
    <v-flex xs12>
      <router-link :to="{ name: 'personCreate', params: { parentPossibleGenders: parentPossibleGenders } }">
        <v-btn fixed fab dark large bottom right color="pink">
          <v-icon dark>add</v-icon>
        </v-btn>
      </router-link>
      <GenderFilter :parentPossibleGenders="parentPossibleGenders" @interface="handleFilterModification"/>
      <v-data-table
        :headers="headers"
        :items="getFilteredPersons"
        class="elevation-1"
        hide-actions
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.age }}</td>
          <td class="text-xs-center">{{ props.item.gender }}</td>
          <td class="text-xs-right">
            <router-link :to="{ name: 'personUpdate', params: { id: props.item.id, parentPossibleGenders: parentPossibleGenders }}">
              <v-btn flat icon color="white">
                <v-icon>edit</v-icon>
              </v-btn>
            </router-link>
            <v-btn flat icon color="red" @click="handlePersonDelete(props.item.id)">
              <v-icon>remove_circle_outline</v-icon>
            </v-btn>
          </td>
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="pink" icon="info">No persons were found.</v-alert>
        </template>
      </v-data-table>
      <Loader :loading="loading"></Loader>
    </v-flex>
  </v-layout>
</template>

<script lang="js">
  import PersonService from '@/services/personService'
  import GenderFilter from "./GenderFilter.vue";
  import Loader from "./Loader.vue";

  export default  {
    name: 'person-table',
    props: {
      parentPersons: Array,
      parentPossibleGenders: Array
    },
    components: {
      GenderFilter,
      Loader
    },
    data() {
      return {
        loading: false,
        persons: [],
        filter: null,
        headers: [
          { text: 'Name', value: 'name', align: 'left' },
          { text: 'Age', value: 'age', align: 'center' },
          { text: 'Gender', value: 'gender', align: 'center' },
          { text: '', value: 'actions', sortable: false, align: 'right' },
        ]
      }
    },
    created() {
      this.loading = true;
      PersonService.getAll()
        .then((persons) => {
          this.persons = persons;
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    methods: {
      handleFilterModification (newFilter) {
        this.filter = newFilter;
      },
      handlePersonDelete (personId) {
        this.loading = true;
        PersonService.delete(personId)
        .then((persons) => {
          PersonService.getAll()
            .then((persons) => {
              this.persons = persons;
              this.loading = false;
            })
            .catch((err) => {
              this.loading = false;
            });
        })
        .catch((err) => {
          this.loading = false;
        });
      }  
    },
    computed: {
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
