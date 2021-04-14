<template>
    <div class="contact-area area-padding">
        <div class="container">
            <div class="row">
                <div class="contact-inner">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="contact-icon text-center">
                            <div class="single-icon">
                                <i class="ti-mobile"></i>
                                <p>
                                    Call : (+1) 123-456-789<br />
                                    <span>Monday-Friday (10 AM - 6 PM)</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="contact-icon text-center">
                            <div class="single-icon">
                                <i class="ti-email"></i>
                                <p>
                                    Email : name@domain.com<br />
                                    <span>Web: www.website.com</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="contact-icon text-center">
                            <div class="single-icon">
                                <i class="ti-location-pin"></i>
                                <p>
                                    Location : California<br />
                                    <span>Menlo Park, CA, United States</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="map-area">
                        <iframe
                            width="550"
                            height="334"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101322.76848773999!2d-122.2251150260639!3d37.47638452917466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa6b1117280ff%3A0xebbf998e5df289ab!2sMenlo%20Park%2C%20Californie%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2stn!4v1618360787424!5m2!1sfr!2stn"
                            className="google-map__contact"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="contact-form">
                        <div class="row">
                            <form
                                id="contactForm"
                                method="POST"
                                action="#"
                                class="contact-form"
                            >
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <input
                                        type="text"
                                        id="name"
                                        class="form-control"
                                        placeholder="Name"
                                        required
                                        data-error="Please enter your name"
                                    />
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <input
                                        type="email"
                                        class="email form-control"
                                        id="email"
                                        placeholder="Email"
                                        required
                                        data-error="Please enter your email"
                                    />
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <input
                                        type="text"
                                        id="msg_subject"
                                        class="form-control"
                                        placeholder="Subject"
                                        required
                                        data-error="Please enter your message subject"
                                    />
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <textarea
                                        id="message"
                                        rows="7"
                                        placeholder="Massage"
                                        class="form-control"
                                        required
                                        data-error="Write your message"
                                    ></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div
                                    class="col-md-12 col-sm-12 col-xs-12 text-center"
                                >
                                    <button
                                        type="submit"
                                        id="submit"
                                        class="add-btn contact-btn"
                                    >
                                        Send Message
                                    </button>
                                    <div
                                        id="msgSubmit"
                                        class="h3 text-center hidden"
                                    ></div>
                                    <div class="clearfix"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactDetails",
};
</script>

<style scoped>
</style>
