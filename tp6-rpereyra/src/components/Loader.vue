<template lang="html">
  <v-dialog
    v-model="loading"
    persistent
    width="300"
    >
    <v-card
      color="pink"
      dark
      >
      <v-card-text>
        Loading
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
          ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="js">
  export default  {
    name: 'Loader',
    props: {
      loading: Boolean,
    }
}
</script>
