<template lang="html">
  <tr class="d-flex">
    <td class="col-9">{{parentPerson.name}}</td>
    <td class="col-1 text-center">{{parentPerson.age}}</td>
    <td class="col-1 text-center text-uppercase">{{parentPerson.gender}}</td>
    <td class="col-1 text-center">
        <button type="button" class="btn btn-sm btn-outline-light" @click="onDelete(parentPerson.id)">Delete</button>
    </td>
  </tr>
</template>

<script lang="js">
  export default  {
    name: 'person-row',
    props: {
      parentPerson: Object
    },
    methods: {
      onDelete (id) {
        this.$emit('clicked', id);
      }
    }
}
</script>
