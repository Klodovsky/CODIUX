<template>
  <div class="about-area about-2 fix">
    <div class="container-full">
      <div class="row">
        <div class="col-md-5 col-sm-4 col-xs-12">
          <div class="about-image">
            <div class="video-content ">
              <a href="https://www.youtube.com/watch?v=O33uuBh6nXA" class="video-play vid-zone">
                <i class="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-sm-8 col-xs-12">
          <div class="support-all about-content">
            <div class="section-headline right-headline white-headline">
              <h3>Technology <span class="color">more experts</span> that provides security</h3>
              <p>The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence "Lorem ipsum". Fortunately, the phrase 'Lorem Ipsum' is now recognized by electronic pre-press systems and, when found, an alarm can be raised.</p>
            </div>
            <div class="about-company">
              <div class="single-about">
                <span class="about-text">Professional team</span>
                <span class="about-text">Server secure payments</span>
                <span class="about-text">Live hat upport</span>
              </div>
              <div class="single-about">
                <span class="about-text">Goal achivment</span>
                <span class="about-text">Worldwide services company</span>
                <span class="about-text">Marketing expert policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "About",
      mounted() {
        $('.video-play').magnificPopup({
          type: 'iframe'
        });
      }
    }
</script>

<style scoped>

</style>
