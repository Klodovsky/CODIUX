<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="About Us" />
        <Welcome />
        <About />
        <Counter />
        <OverView />
        <Reviews />
        <Footer />
    </div>
</template>

<script>
import PageTitle from "~/components/Page/PageTitle";
import PageHeader from "~/components/Page/PageHeader";
import Welcome from "~/components/Home/Welcome";
import About from "~/components/Home/About";
import Counter from "~/components/Home/Counter";
import OverView from "~/components/Page/OverView";
import Reviews from "~/components/Home/Reviews";
import Footer from "~/components/Home/Footer";
export default {
    name: "about",
    components: {
        Footer,
        Reviews,
        OverView,
        Counter,
        About,
        Welcome,
        PageHeader,
        PageTitle,
    },
    head() {
        return {
            title: "CODIUX | About Us",
        };
    },
};
</script>

<style scoped>
</style>
