<template lang="html">
<div class="col-12" v-show="formIsInvalid">
  <div class="alert alert-danger" role="alert">
    {{ validationError }}
  </div>
</div>
</template>

<script lang="js">
  export default  {
    name: 'form-validation-alert',
    props: {
      formIsInvalid: Boolean,
      validationError: String
    }
}
</script>
