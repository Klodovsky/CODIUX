<template>
    <div class="counter-area fix area-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="counter-image">
                        <div class="rotmate-image rotateme">
                            <img src="/img/about/circle.png" alt="" />
                        </div>
                        <div class="top-img">
                            <img src="/img/about/self.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="fun-text-all">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div
                                class="fun_text wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <span class="counter-icon"
                                    ><i class="ti-layers"></i
                                ></span>
                                <span class="counter">2510</span>
                                <h4>Total projects</h4>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div
                                class="fun_text wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <span class="counter-icon"
                                    ><i class="ti-world"></i
                                ></span>
                                <span class="counter">80</span>
                                <h4>Worldwide</h4>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div
                                class="fun_text wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <span class="counter-icon"
                                    ><i class="ti-cup"></i
                                ></span>
                                <span class="counter">50</span>
                                <h4>Awards win</h4>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div
                                class="fun_text wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <span class="counter-icon"
                                    ><i class="ti-user"></i
                                ></span>
                                <span class="counter">605</span>
                                <h4>Team member</h4>
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
    name: "Counter",
    mounted() {
        var count = $(".counter");
        count.counterUp({
            delay: 40,
            time: 3000,
        });
    },
};
</script>

<style scoped>
</style>
