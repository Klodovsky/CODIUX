<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Register" />
        <Signup />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import Signup from "~/components/Page/Signup";
import Footer from "~/components/Home/Footer";
export default {
    components: {
        Signup,
        Footer,
        PageTitle,
        PageHeader,
    },
    head() {
        return {
            title: "CODIUX | Register",
        };
    },
};
</script>

<style scoped>
</style>
