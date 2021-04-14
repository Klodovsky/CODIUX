<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Services-2" />
        <Services />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import Services from "~/components/Page/Services";
import Footer from "~/components/Home/Footer";
export default {
    name: "services-2",
    components: {
        Footer,
        Services,
        PageTitle,
        PageHeader,
    },
    head() {
        return {
            title: "CODIUX | Service - 2",
        };
    },
};
</script>

<style scoped>
</style>
