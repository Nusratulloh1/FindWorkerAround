<template>
    <div>
       <input 
          type="text"
          :placeholder="template"
          class="form-control"
          v-model="number"
          required
        >
    </div>
</template>
<script>
export default {
    props: [
      'template'
    ],
  data: function () {
      return {
          number: '',
          format: ''
      }
  },
//   mounted(){
//    let x = 1;

//    this.format = this.template.replace(/X+/g, () => '$' + x++)
//   },
  watch: {
      number() {
          this.number = this.number.replace(/[^0-9]/g, '')
             .replace(/^(\d{3})?(\d{2})?(\d{3})?(\d{2})?(\d{2})?/g, '$1$2$3$4$5')
             .substr(0, this.template.length);
      }
  }
}
</script>
<style scoped>

</style>