<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Service-Details" />
        <ServiceDetails />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import ServiceDetails from "~/components/Page/ServiceDetails";
import Footer from "~/components/Home/Footer";
export default {
    name: "service-details",
    components: {
        Footer,
        ServiceDetails,
        PageTitle,
        PageHeader,
    },
    head() {
        return {
            title: "CODIUX | Service Details",
        };
    },
};
</script>

<style scoped>
</style>
