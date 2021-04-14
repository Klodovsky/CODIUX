<template>
    <div>
        <Header />
        <SliderTwo />
        <Brand />
        <ServiceTwo />
        <About />
        <Counter />
        <Team />
        <Tab />
        <Blog />
        <TeamTwo />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Home/Header";
import SliderTwo from "~/components/HomeTwo/SliderTwo";
import Brand from "~/components/HomeTwo/Brand";
import ServiceTwo from "~/components/HomeTwo/ServiceTwo";
import About from "~/components/Home/About";
import Counter from "~/components/Home/Counter";
import Team from "~/components/Home/Team";
import Tab from "~/components/Home/Tab";
import Blog from "~/components/Home/Blog";
import TeamTwo from "~/components/HomeTwo/TeamTwo";
import Footer from "~/components/Home/Footer";
export default {
    name: "index-2",
    components: {
        Footer,
        TeamTwo,
        Blog,
        Tab,
        Team,
        Counter,
        About,
        ServiceTwo,
        Brand,
        SliderTwo,
        Header,
    },
    head() {
        return {
            title: "CODIUX | Vue Nuxt It Solutions Services Company",
        };
    },
};
</script>

<style scoped>
</style>
