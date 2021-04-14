<template>
    <div>
        <Header />
        <Slider />
        <Welcome />
        <About />
        <Service />
        <Counter />
        <Team />
        <Project />
        <Quote />
        <Tab />
        <Blog />
        <Reviews />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Home/Header";
import Slider from "~/components/Home/Slider";
import Welcome from "~/components/Home/Welcome";
import About from "~/components/Home/About";
import Service from "~/components/Home/Service";
import Counter from "~/components/Home/Counter";
import Team from "~/components/Home/Team";
import Project from "~/components/Home/Project";
import Quote from "~/components/Home/Quote";
import Tab from "~/components/Home/Tab";
import Blog from "~/components/Home/Blog";
import Reviews from "~/components/Home/Reviews";
import Footer from "~/components/Home/Footer";

export default {
    components: {
        Footer,
        Reviews,
        Blog,
        Tab,
        Quote,
        Project,
        Team,
        Counter,
        Service,
        About,
        Welcome,
        Slider,
        Header,
    },
    head() {
        return {
            title: "CODIUX | Vue Nuxt It Solutions Services Company",
        };
    },
};
</script>

<style>
</style>
