<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Blog Grid" />
        <BlogGrid />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import BlogGrid from "~/components/Page/BlogGrid";
import Footer from "~/components/Home/Footer";
export default {
    name: "blog",
    components: {
        Footer,
        BlogGrid,
        PageTitle,
        PageHeader,
    },
    head() {
        return {
            title: "CODIUX | Blog Grid",
        };
    },
};
</script>

<style scoped>
</style>
