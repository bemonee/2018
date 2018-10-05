<template lang="html">
  <div class="col-12 d-flex justify-content-end">
    <div class="btn-group" role="group" aria-label="button group">
      <button type="button" @click="clearFilter" :class="{active: filter == null}" class="btn btn-outline-light">All</button>
      <button type="button" v-for="gender in parentPossibleGenders" @click="setFilter(gender)" :class="{active: filter == gender}"
        class="btn btn-outline-light text-uppercase">
      {{ gender }}
      </button>
    </div>
  </div>
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
