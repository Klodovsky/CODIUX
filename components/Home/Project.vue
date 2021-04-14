<template>
    <div class="project-area area-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="section-headline text-center">
                        <h3>Our successful goal</h3>
                        <p>
                            Dummy text is also used to demonstrate the
                            appearance of different typefaces and layouts
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="project-carousel">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single-awesome-project">
                            <div class="awesome-img">
                                <a href="#">
                                    <img src="/img/project/p1.jpg" alt="" />
                                </a>
                                <div class="add-actions text-center">
                                    <a
                                        class="venobox"
                                        data-gall="myGallery"
                                        href="/img/project/p1.jpg"
                                    >
                                        <i class="port-icon ti-zoom-in"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="project-dec">
                                <h4>Project management</h4>
                                <p>
                                    Our development opt in to the projects they
                                    genuinely want to work on, committing
                                    wholeheartedly to delivering.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single-awesome-project">
                            <div class="awesome-img">
                                <a href="#">
                                    <img src="/img/project/p2.jpg" alt="" />
                                </a>
                                <div class="add-actions text-center">
                                    <a
                                        class="venobox"
                                        data-gall="myGallery"
                                        href="/img/project/p2.jpg"
                                    >
                                        <i class="port-icon ti-zoom-in"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="project-dec">
                                <h4>Product design</h4>
                                <p>
                                    Our development opt in to the projects they
                                    genuinely want to work on, committing
                                    wholeheartedly to delivering.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single-awesome-project">
                            <div class="awesome-img">
                                <a href="#">
                                    <img src="/img/project/p3.jpg" alt="" />
                                </a>
                                <div class="add-actions text-center">
                                    <a
                                        class="venobox"
                                        data-gall="myGallery"
                                        href="/img/project/p3.jpg"
                                    >
                                        <i class="port-icon ti-zoom-in"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="project-dec">
                                <h4>Server security</h4>
                                <p>
                                    Our development opt in to the projects they
                                    genuinely want to work on, committing
                                    wholeheartedly to delivering.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <!-- single-awesome-project start -->
                        <div class="single-awesome-project">
                            <div class="awesome-img">
                                <a href="#">
                                    <img src="/img/project/p4.jpg" alt="" />
                                </a>
                                <div class="add-actions text-center">
                                    <a
                                        class="venobox"
                                        data-gall="myGallery"
                                        href="/img/project/p4.jpg"
                                    >
                                        <i class="port-icon ti-zoom-in"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="project-dec">
                                <h4>Industry support</h4>
                                <p>
                                    Our development opt in to the projects they
                                    genuinely want to work on, committing
                                    wholeheartedly to delivering.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single-awesome-project">
                            <div class="awesome-img">
                                <a href="#">
                                    <img src="/img/project/p5.jpg" alt="" />
                                </a>
                                <div class="add-actions text-center">
                                    <a
                                        class="venobox"
                                        data-gall="myGallery"
                                        href="/img/project/p5.jpg"
                                    >
                                        <i class="port-icon ti-zoom-in"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="project-dec">
                                <h4>Technical solution</h4>
                                <p>
                                    Our development opt in to the projects they
                                    genuinely want to work on, committing
                                    wholeheartedly to delivering.
                                </p>
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
    name: "Project",
    mounted() {
        var Project_carousel = $(".project-carousel");
        Project_carousel.owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            dots: false,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                700: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });
    },
};
</script>

<style scoped>
</style>
