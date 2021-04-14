<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Services" />
        <Services />
        <Tab />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import Services from "~/components/Page/Services";
import Tab from "~/components/Home/Tab";
import Footer from "~/components/Home/Footer";
export default {
    name: "services",
    components: {
        Footer,
        Tab,
        Services,
        PageTitle,
        PageHeader,
    },
    head() {
        return {
            title: "CODIUX | Service",
        };
    },
};
</script>

<style scoped>
</style>
