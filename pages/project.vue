<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Project" pageName="Portfolio" />
        <Project />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import Project from "~/components/Page/Project";
import Footer from "~/components/Home/Footer";
export default {
    name: "project",
    components: {
        Footer,
        Project,
        PageTitle,
        PageHeader,
    },
    head() {
        return {
            title: "CODIUX | Project",
        };
    },
};
</script>

<style scoped>
</style>
