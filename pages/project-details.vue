<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Project Details" />
        <ProjectDetails />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import ProjectDetails from "~/components/Page/ProjectDetails";
import Footer from "~/components/Home/Footer";
export default {
    name: "project-details",
    components: {
        Footer,
        ProjectDetails,
        PageTitle,
        PageHeader,
    },

    mounted() {
        $(".project-carousel-2").owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            dots: false,
            margin: 30,
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
    head() {
        return {
            title: "CODIUX | Project Details",
        };
    },
};
</script>

<style scoped>
</style>
