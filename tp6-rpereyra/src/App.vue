<template>
  <main id="app">
    <v-app id="inspire" dark>
      <v-navigation-drawer clipped fixed v-model="drawer" app>
        <v-list dense>
          <router-link :to="{ name: 'persons' }">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>group</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Persons</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Persons Managment</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <router-view
            :parentPossibleGenders="possibleGenders"
          ></router-view>
        </v-container>
      </v-content>
    </v-app>
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
      possibleGenders: ["m", "f"], // "Les disputades" compatibility
      drawer: true
    };
  }
};
</script>

<style>
a,
a:hover {
  color: #ffffff !important;
  text-decoration: none;
}
</style>