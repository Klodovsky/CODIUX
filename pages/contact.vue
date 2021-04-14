<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Contact" />
        <ContactDetails />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import ContactDetails from "~/components/Page/ContactDetails";
import Footer from "~/components/Home/Footer";
export default {
    name: "contact",
    components: {
        Footer,
        ContactDetails,
        PageTitle,
        PageHeader,
    },
    head() {
        return {
            title: "CODIUX | Contact",
        };
    },
};
</script>

<style scoped>
</style>
