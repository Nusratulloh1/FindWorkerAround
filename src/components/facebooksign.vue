<template>
      <facebook-login 
          class="button"
      appId="901841913955174"
      @login="getUserData"
      @get-initial-status="getUserData"
      >
    </facebook-login>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs';
export default {
        components: {
        facebookLogin
    },
  data () {

    return {
     
    }
  },
  methods: {

  }
}
</script>

<style>

</style>