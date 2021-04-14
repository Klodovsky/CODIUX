<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
  export default {
    mounted() {
      $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
      });

      function wowAnimation(){
        new WOW({
          offset: 100,
          mobile: true
        }).init()
      }
      wowAnimation()

      var veno_box = $('.venobox');
      veno_box.venobox();



    }
  }
</script>
<style>
</style>
