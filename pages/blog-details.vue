<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Blog Details" />
        <BlogDetails />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import BlogDetails from "~/components/Page/BlogDetails";
import Footer from "~/components/Home/Footer";

export default {
    name: "blog-details",
    components: {
        Footer,
        BlogDetails,
        PageTitle,
        PageHeader,
    },
    head() {
        return {
            title: "CODIUX | Blog Details",
        };
    },
};
</script>

<style scoped>
</style>
