<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Team" />
        <OurTeam />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import OurTeam from "~/components/Page/OurTeam";
import Footer from "~/components/Home/Footer";
export default {
    name: "team",
    components: {
        Footer,
        OurTeam,
        PageTitle,
        PageHeader,
    },
    head() {
        return {
            title: "CODIUX | Team",
        };
    },
};
</script>

<style scoped>
</style>
