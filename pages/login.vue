<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Login" />
        <Login />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import Login from "~/components/Page/Login";
import Footer from "~/components/Home/Footer";
export default {
    components: {
        Login,
        Footer,
        PageTitle,
        PageHeader,
    },
    head() {
        return {
            title: "CODIUX | Login",
        };
    },
};
</script>

<style scoped>
</style>
