<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Review" />
        <Review />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import Review from "~/components/Page/Review";
import Footer from "~/components/Home/Footer";
export default {
    name: "review",
    components: {
        Footer,
        Review,
        PageTitle,
        PageHeader,
    },
    head() {
        return {
            title: "CODIUX | Review",
        };
    },
};
</script>

<style scoped>
</style>
