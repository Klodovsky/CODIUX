<template>
    <header class="header-one">
        <div class="topbar-area fix hidden-xs">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-sm-9">
                        <div class="topbar-left">
                            <ul>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-envelope"></i>
                                        name@domain.com</a
                                    >
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-phone-square"></i> (+1)
                                        123-456-789</a
                                    >
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-clock-o"></i> Mon -
                                        Fri: 10:00 - 18:00</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <div class="top-social">
                            <ul>
                                <li>
                                    <a href="#"><i class="fa fa-skype"></i></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-twitter"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-facebook"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-google"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="sticker" class="header-area header-area-3 hidden-xs">
            <div class="container">
                <div class="row">
                    <!-- logo start -->
                    <div class="col-md-3 col-sm-3">
                        <div class="logo">
                            <nuxt-link
                                class="navbar-brand page-scroll white-logo"
                                to="/"
                            >
                                <img src="/img/logo/logo2.png" alt="" />
                            </nuxt-link>
                            <nuxt-link
                                class="navbar-brand page-scroll black-logo"
                                to="/"
                            >
                                <img src="/img/logo/logo.png" alt="" />
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-md-9 col-sm-9">
                        <div class="header-right-link">
                            <!-- search option start -->
                            <div class="search-inner">
                                <form action="#">
                                    <div class="search-option">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                        />
                                        <button class="button" type="submit">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                    <a class="main-search" href="#"
                                        ><i class="fa fa-search"></i
                                    ></a>
                                </form>
                            </div>
                            <nuxt-link class="s-menu" to="/login"
                                >It Consultant</nuxt-link
                            >
                        </div>

                        <nav class="navbar navbar-default">
                            <div
                                class="collapse navbar-collapse"
                                id="navbar-example"
                            >
                                <div class="main-menu">
                                    <ul class="nav navbar-nav navbar-right">
                                        <li>
                                            <a class="pages" href="/">Home</a>
                                            <ul class="sub-menu">
                                                <li>
                                                    <nuxt-link to="/"
                                                        >Home 01</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/index-2"
                                                        >Home 02</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/index-3"
                                                        >Home 03</nuxt-link
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a class="pages" href="#">Page</a>
                                            <ul class="sub-menu">
                                                <li>
                                                    <nuxt-link to="/about"
                                                        >About</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/team"
                                                        >Team</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/review"
                                                        >Reviews</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/faq"
                                                        >FAQ</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/login"
                                                        >Login</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/signup"
                                                        >Signup</nuxt-link
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a class="pages" href="#"
                                                >Services</a
                                            >
                                            <ul class="sub-menu">
                                                <li>
                                                    <nuxt-link to="/services"
                                                        >Services</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/services-2"
                                                        >Services 2</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link
                                                        to="/service-details"
                                                        >Service
                                                        Details</nuxt-link
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a class="pages" href="#"
                                                >Project</a
                                            >
                                            <ul class="sub-menu">
                                                <li>
                                                    <nuxt-link to="/project"
                                                        >Portfolio</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link
                                                        to="/project-details"
                                                        >Project
                                                        details</nuxt-link
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a class="pages" href="#">Blog</a>
                                            <ul class="sub-menu">
                                                <li>
                                                    <nuxt-link to="/blog"
                                                        >Blog grid</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link
                                                        to="/blog-sidebar"
                                                        >Blog List</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link
                                                        to="/blog-details"
                                                        >Blog Details</nuxt-link
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <nuxt-link to="/contact"
                                                >contacts</nuxt-link
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <div class="mobile-menu-area hidden-lg hidden-md hidden-sm">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mobile-menu">
                            <div class="logo">
                                <nuxt-link to="/"
                                    ><img src="/img/logo/logo.png" alt=""
                                /></nuxt-link>
                            </div>
                            <nav id="dropdown">
                                <ul>
                                    <li>
                                        <a class="pages" href="/">Home</a>
                                        <ul class="sub-menu">
                                            <li>
                                                <nuxt-link to="/"
                                                    >Home 01</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/index-2"
                                                    >Home 02</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/index-3"
                                                    >Home 03</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="pages" href="#">Page</a>
                                        <ul class="sub-menu">
                                            <li>
                                                <nuxt-link to="/about"
                                                    >About</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/team"
                                                    >Team</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/review"
                                                    >Reviews</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/faq"
                                                    >FAQ</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/login"
                                                    >Login</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/signup"
                                                    >Signup</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="pages" href="#">Services</a>
                                        <ul class="sub-menu">
                                            <li>
                                                <nuxt-link to="/services"
                                                    >Services</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/services-2"
                                                    >Services 2</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/service-details"
                                                    >Service Details</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="pages" href="#">Project</a>
                                        <ul class="sub-menu">
                                            <li>
                                                <nuxt-link to="/project"
                                                    >Portfolio</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/project-details"
                                                    >Project details</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="pages" href="#">Blog</a>
                                        <ul class="sub-menu">
                                            <li>
                                                <nuxt-link to="/blog"
                                                    >Blog grid</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/blog-sidebar"
                                                    >Blog List</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/blog-details"
                                                    >Blog Details</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <nuxt-link to="/contact"
                                            >contacts</nuxt-link
                                        >
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderThree",
    mounted() {
        $(".search-option").hide();
        $(".main-search").on("click", function () {
            $(".search-option").animate({
                height: "toggle",
            });
        });

        var windows = $(window);
        var sticky = $("#sticker");

        windows.on("scroll", function () {
            var scroll = windows.scrollTop();
            if (scroll < 300) {
                sticky.removeClass("stick");
            } else {
                sticky.addClass("stick");
            }
        });

        var mean_menu = $("nav#dropdown");
        mean_menu.meanmenu();
    },
};
</script>

<style scoped>
</style>
