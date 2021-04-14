<template>
  <div class="reviews-area area-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>Customer say some words</h3>
            <p>Help agencies to define their new business objectives and then create professional software.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="Reviews-content">
            <div class="testimonial-carousel item-indicator">
              <div class="single-testi">
                <div class="testi-text">
                  <div class="clients-text">
                    <div class="client-rating">
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                    </div>
                    <p>When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing a selection. help agencies.</p>
                    <div class="testi-img ">
                      <div class="guest-details">
                        <h4>Edward</h4>
                        <span class="guest-rev">Genarel customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-testi">
                <div class="testi-text">
                  <div class="clients-text">
                    <div class="client-rating">
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                    </div>
                    <p>When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing a selection. help agencies.</p>
                    <div class="testi-img ">
                      <div class="guest-details">
                        <h4>Charlotte</h4>
                        <span class="guest-rev">Genarel customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-testi">
                <div class="testi-text">
                  <div class="clients-text">
                    <div class="client-rating">
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                    </div>
                    <p>When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing a selection. help agencies.</p>
                    <div class="testi-img ">
                      <div class="guest-details">
                        <h4>Daniel</h4>
                        <span class="guest-rev">Genarel customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-testi">
                <div class="testi-text">
                  <div class="clients-text">
                    <div class="client-rating">
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                      <a href="#"><i class="ti-star"></i></a>
                    </div>
                    <p>When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing a selection. help agencies.</p>
                    <div class="testi-img ">
                      <div class="guest-details">
                        <h4>Graham</h4>
                        <span class="guest-rev">Genarel customer</span>
                      </div>
                    </div>
                  </div>
                </div>
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
        name: "Reviews",
      mounted() {
        var review = $('.testimonial-carousel');
        review.owlCarousel({
          loop:true,
          nav:false,
          margin:15,
          center:true,
          dots:true,
          autoplay:false,
          responsive:{
            0:{
              items:1
            },
            768:{
              items:2
            },
            1000:{
              items:3
            }
          }
        });
      }
    }
</script>

<style scoped>

</style>
