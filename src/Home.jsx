import React from 'react'

const Home = () => {
  return (
    <main>
    
    <section class="hero-section d-flex" id="section_1">
        <div class="hero-container container d-flex flex-column justify-content-end">
            <div class="row h-100">

                <div class="col-lg-6 col-12 my-auto">
                    <h2>👋 Hi there, You're invited</h2>

                    <h1 class="text-white hero-title mb-4">We're getting married</h1>

                    <p class="text-white mb-2">
                        <i class="bi-check-circle-fill custom-icon me-1"></i> Wedding HTML Template
                    </p>

                    <p class="text-white">
                        <i class="bi-check-circle-fill custom-icon me-1"></i> Bootstrap v5.1.3 Layout
                    </p>

                    <a href="#section_2" class="custom-link custom-btn btn mt-4">Discover More</a>
                </div>

                <div class="col-lg-3 col-12 save-the-date-wrap mt-auto ms-lg-auto">
                    <div class="save-the-date-thumb">
                        <h4 class="save-the-date-title">Save the date</h4>

                        <div class="save-the-date-body">
                            <span class="date">14th October 2024</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <section class="about-section section-padding" id="section_2">
        <div class="container">
            <div class="row">

                <div class="col-lg-12 col-12">
                    <div class="section-title-wrap mb-5">
                        <h2 class="section-title">Love Story</h2>

                        <div class="section-title-bottom">
                            <span class="section-title-line"></span>
                            <i class="section-title-icon bi-heart-fill"></i>
                            <span class="section-title-line"></span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-12">
                    <div class="image-hover-thumb">
                        <img src={require("./images/vertical-shot-beautiful-smiling-girl.jpg")} class="about-image img-fluid" alt="" />
                    </div>
                </div>

                <div class="col-lg-3 col-12">
                    <div class="about-info-wrap d-flex flex-column">
                        <div class="about-info-title d-flex align-items-center my-3">
                            <h4>Jolie</h4>

                            <span class="about-tag ms-2">The Bride</span>
                        </div>

                        <p>Sarah is amazing. When I first met her I knew she was amazing and every passing day reminds me of just how amazing she is!</p>

                        <div class="social-icon-wrap mt-auto">
                            <ul class="social-icon ms-auto">
                                <li class="social-icon-item"><a href="#" class="social-icon-link bi-facebook"></a></li>

                                <li class="social-icon-item"><a href="#" class="social-icon-link bi-twitter"></a></li>

                                <li class="social-icon-item"><a href="#" class="social-icon-link bi-instagram"></a></li>

                                <li class="social-icon-item"><a href="#" class="social-icon-link bi-whatsapp"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-12">
                    <div class="image-hover-thumb">
                        <img src={require("./images/vertical-shot-young-handsome-guy-autumn-park.jpg")} class="about-image img-fluid" alt="" />
                    </div>
                </div>

                <div class="col-lg-3 col-12">
                    <div class="about-info-wrap d-flex flex-column">
                        <div class="about-info-title d-flex align-items-center my-3">
                            <h4>Bratt</h4>

                            <span class="about-tag ms-2">The Groom</span>
                        </div>

                        <p>I really love her incredibly unique blend of talents.</p>

                        <p>She's a talented artist, always excited about a genuinely loving person.</p>

                        <div class="social-icon-wrap mt-auto">
                            <ul class="social-icon ms-auto">
                                <li class="social-icon-item"><a href="#" class="social-icon-link bi-facebook"></a></li>

                                <li class="social-icon-item"><a href="#" class="social-icon-link bi-twitter"></a></li>

                                <li class="social-icon-item"><a href="#" class="social-icon-link bi-instagram"></a></li>

                                <li class="social-icon-item"><a href="#" class="social-icon-link bi-whatsapp"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="the-wedding-section section-bg section-padding" id="section_3">
        <div class="container">
            <div class="row">

                <div class="col-lg-12 col-12">
                    <div class="section-title-wrap mb-5">
                        <h2 class="section-title">The Wedding</h2>

                        <div class="section-title-bottom">
                            <span class="section-title-line"></span>
                            <i class="section-title-icon bi-heart-fill"></i>
                            <span class="section-title-line"></span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
                    <div class="image-hover-thumb">
                        <img src={require("./images/decorated-table-setting-wedding-celebration.jpg")} class="img-fluid" alt="" />
                    </div>

                    <div class="section-block">
                        <h3 class="my-3">The Reception</h3>

                        <p class="mb-2">
                            <i class="bi-geo-alt me-1"></i> 5th Avenue at, Central Park S
                        </p>

                        <p>
                            <i class="bi-clock me-1"></i> 5:00 PM
                        </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
                    <div class="image-hover-thumb">
                        <img src={require("./images/front-view-wedding-couple.jpg")} class="img-fluid" alt="" />
                    </div>

                    <div class="section-block">
                        <h3 class="my-3">Wedding Ceremony</h3>

                        <p class="mb-2">
                            <i class="bi-geo-alt me-1"></i> 5th Avenue at, Central Park S
                        </p>

                        <p>
                            <i class="bi-clock me-1"></i> 6:30 PM to 9:30 PM
                        </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12 d-flex flex-column">
                    <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8046.475092226252!2d-73.9752829999323!3d40.766655075110314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f07d5da561%3A0x61f6aa300ba8339d!2sThe%20Plaza!5e1!3m2!1sen!2ssg!4v1662129560604!5m2!1sen!2ssg" width="100%" height="310" allowfullscreen="" loading="lazy"></iframe>

                    <div class="section-block">
                        <h3 class="my-3">Location</h3>

                        <p class="mb-2">
                            <i class="bi-geo-alt me-1"></i> 5th Avenue at, Central Park S, New York, NY 10019, United States
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="people-section section-padding" id="section_4">
        <div class="container">
            <div class="row">

                <div class="col-lg-12 col-12">
                    <div class="section-title-wrap mb-5">
                        <h2 class="section-title">Groomsmen &amp; Bridesmaid</h2>

                        <div class="section-title-bottom">
                            <span class="section-title-line"></span>
                            <i class="section-title-icon bi-heart-fill"></i>
                            <span class="section-title-line"></span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-5 col-12 me-auto">
                    <nav>
                        <div class="nav nav-tabs flex-lg-column align-items-baseline" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-groomsmen-tab" data-bs-toggle="tab" data-bs-target="#nav-groomsmen" type="button" role="tab" aria-controls="nav-groomsmen" aria-selected="true">
                                        <h3>Groom Side</h3>
                                    </button>

                            <button class="nav-link" id="nav-bridesmaid-tab" data-bs-toggle="tab" data-bs-target="#nav-bridesmaid" type="button" role="tab" aria-controls="nav-bridesmaid" aria-selected="false">
                                        <h3>Bride Side</h3>
                                    </button>
                        </div>
                    </nav>
                </div>

                <div class="col-lg-8 col-md-6 col-12">
                    <div class="tab-content" id="nav-tabContent">

                        <div class="tab-pane fade show active" id="nav-groomsmen" role="tabpanel" aria-labelledby="nav-groomsmen-tab">
                            <div class="row">
                                <div class="col-lg-6 col-12">
                                    <div class="people-thumb image-hover-thumb">
                                        <img src={require("./images/attractive-laughing-guy-having-fun-smiling-happy.jpg")} class="people-image img-fluid" alt="" />
                                    </div>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <div class="section-block">
                                        <div class="d-flex align-items-center my-3">
                                            <h4 class="mb-0">Kevin</h4>

                                            <span class="about-tag ms-2">Cousin</span>
                                        </div>

                                        <p>Wedding Lite is free HTML template provided by Tooplate website. It is based on Bootstrap v5.1.3 CSS layout. You are free to use it for your wedding.</p>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <div class="people-thumb image-hover-thumb">
                                        <img src={require("./images/portrait-handsome-attractive-young-man-posing.jpg")} class="people-image img-fluid" alt="" />
                                    </div>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <div class="section-block">
                                        <div class="d-flex align-items-center my-3">
                                            <h4 class="mb-0">Wilson</h4>

                                            <span class="about-tag ms-2">Best friend</span>
                                        </div>

                                        <p>Feel free to make a PayPal contribution to contact [at] tooplate.com to support the open community of free HTML templates. Thank you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade show" id="nav-bridesmaid" role="tabpanel" aria-labelledby="nav-bridesmaid-tab">
                            <div class="row">
                                <div class="col-lg-6 col-12">
                                    <div class="people-thumb image-hover-thumb">
                                        <img src={require("./images/lifestyle-people-emotions-casual-concept.jpg")} class="people-image img-fluid" alt="" />
                                    </div>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <div class="section-block">
                                        <div class="d-flex align-items-center my-3">
                                            <h4 class="mb-0">Jennie</h4>

                                            <span class="about-tag ms-2">Sister</span>
                                        </div>

                                        <p>You may want to explore more HTML templates on Too CSS website which collects great templates.</p>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <div class="people-thumb image-hover-thumb">
                                        <img src={require("./images/portrait-beautiful-young-woman-standing-grey-wall.jpg")} class="people-image img-fluid" alt="" />
                                    </div>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <div class="section-block">
                                        <div class="d-flex align-items-center my-3">
                                            <h4 class="mb-0">Madam</h4>

                                            <span class="about-tag ms-2">Friend</span>
                                        </div>

                                        <p>You are not allowed to redistribute this template source files on any other website. Please contact Tooplate for more info.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </section>

    <section class="gallery-section section-bg section-padding" id="section_5">
        <div class="container">
            <div class="row">

                <div class="col-lg-12 col-12">
                    <div class="section-title-wrap mb-5">
                        <h2 class="section-title">Gallery</h2>

                        <div class="section-title-bottom">
                            <span class="section-title-line"></span>
                            <i class="section-title-icon bi-heart-fill"></i>
                            <span class="section-title-line"></span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-12">
                    <div class="gallery-thumb image-hover-thumb">
                        <a href="images/bearded-stylish-groom-suit-beautiful-blonde.jpg" class="popup-image">
                                    <img src={require("./images/bearded-stylish-groom-suit-beautiful-blonde.jpg")} class="gallery-image img-fluid" alt=""/>
                                </a>
                    </div>
                </div>

                <div class="col-lg-4 col-12 d-flex flex-column">
                    <div class="gallery-thumb gallery-thumb-small image-hover-thumb">
                        <a href="images/couple.jpg" class="popup-image">
                                    <img src={require("./images/couple.jpg")} class="gallery-image img-fluid" alt=""/>
                                </a>
                    </div>

                    <div class="gallery-thumb gallery-thumb-small image-hover-thumb">
                        <a href="images/groom-with-bride-are-knocking-glasses-with-champagne.jpg" class="popup-image">
                                    <img src={require("./images/groom-with-bride-are-knocking-glasses-with-champagne.jpg")} class="gallery-image img-fluid" alt=""/>
                                </a>
                    </div>
                </div>

                <div class="col-lg-4 col-12">
                    <div class="gallery-thumb image-hover-thumb">
                        <a href="images/bearded-stylish-groom-suit-beautiful-blonde.jpg" class="popup-image">
                                    <img src={require("./images/bearded-stylish-groom-suit-beautiful-blonde.jpg")} class="gallery-image img-fluid" alt=""/>
                                </a>
                    </div>
                </div>

                <div class="col-lg-4 col-12 d-flex flex-column">
                    <div class="gallery-thumb gallery-thumb-small image-hover-thumb">
                        <a href="images/bride-groom-having-their-wedding-with-guests-beach.jpg" class="popup-image">
                                    <img src={require("./images/bride-groom-having-their-wedding-with-guests-beach.jpg")} class="gallery-image img-fluid" alt=""/>
                                </a>
                    </div>

                    <div class="gallery-thumb gallery-thumb-small image-hover-thumb">
                        <a href="images/wedding-ceremony-place-nature-outside-summer.jpg" class="popup-image">
                                    <img src={require("./images/wedding-ceremony-place-nature-outside-summer.jpg")} class="gallery-image img-fluid" alt=""/>
                                </a>
                    </div>
                </div>

                <div class="col-lg-4 col-12">
                    <div class="gallery-thumb image-hover-thumb">
                        <a href="images/elegant-young-woman-fashionable.jpg" class="popup-image">
                                    <img src={require("./images/elegant-young-woman-fashionable.jpg")} class="gallery-image img-fluid" alt=""/>
                                </a>
                    </div>
                </div>

                <div class="col-lg-4 col-12 d-flex flex-column">
                    <div class="gallery-thumb gallery-thumb-small image-hover-thumb">
                        <a href="images/young-couple-broke-down-car-while-traveling.jpg" class="popup-image">
                                    <img src={require("./images/young-couple-broke-down-car-while-traveling.jpg")} class="gallery-image img-fluid" alt=""/>
                                </a>
                    </div>

                    <div class="gallery-thumb gallery-thumb-small image-hover-thumb">
                        <a href="images/young-couple-traveling-car-sunny-day.jpg" class="popup-image">
                                    <img src={require("./images/young-couple-traveling-car-sunny-day.jpg")} class="gallery-image img-fluid" alt=""/>
                                </a>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <section class="rsvp-section section-padding" id="section_6">
        <div class="container">
            <div class="row">

                <div class="col-lg-8 col-12 mx-auto">
                    <div class="rsvp-form-wrap">
                        <div class="section-title-wrap mb-5">
                            <h2 class="section-title">Rsvp</h2>

                            <div class="section-title-bottom">
                                <span class="section-title-line"></span>
                                <i class="section-title-icon bi-heart-fill"></i>
                                <span class="section-title-line"></span>
                            </div>
                        </div>

                        <h5 class="mb-4">Will you attend? <span class="text-muted">Please reserve before March 2th, 2022</span></h5>

                        <form class="custom-form rsvp-form" role="form">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12">
                                    <input type="text" name="name" id="name" class="form-control" placeholder="Full Name*" required="" />
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email Address*" required="" />
                                </div>

                                <div class="col-lg-4 col-12">
                                    <select name="guests" class="form-select" id="guests" aria-label="Guests">
                                                <option selected="">Number of Guests</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                </div>

                                <div class="col-lg-12 col-12">
                                    <textarea class="form-control" id="message" name="message" placeholder="Message (Optional)" rows="5"></textarea>
                                </div>

                                <div class="col-lg-3 col-5 mx-auto">
                                    <button type="submit" class="form-control">Send Invitation</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="contact-section section-bg section-padding" id="section_7">
        <div class="container">
            <div class="row">

                <div class="col-lg-12 col-12">
                    <div class="section-title-wrap mb-5">
                        <h2 class="section-title">Get in touch</h2>

                        <div class="section-title-bottom">
                            <span class="section-title-line"></span>
                            <i class="section-title-icon bi-heart-fill"></i>
                            <span class="section-title-line"></span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12">
                    <h4 class="mb-4">Visit Us</h4>

                    <p> 5th Avenue at, Central Park S,
                        <br/> New York, NY 10019, United States
                    </p>
                </div>

                <div class="col-lg-4 col-md-6 col-12 my-4 my-lg-0 my-md-0">
                    <h4 class="mb-4">Contact Information</h4>

                    <p class="mb-2">
                        <a href="mailto:hello@company.com">
                                    hello@company.com
                                </a>
                    </p>

                    <p>
                        <a href="tel: 090-080-0760">
                                    090-080-0760
                                </a>
                    </p>
                </div>

                <div class="col-lg-4 col-md-6 col-12">
                    <h4 class="mb-4">Socials</h4>

                    <ul class="social-icon">
                        <li class="social-icon-item"><a href="#" class="social-icon-link bi-twitter"></a></li>

                        <li class="social-icon-item"><a href="#" class="social-icon-link bi-instagram"></a></li>

                        <li class="social-icon-item"><a href="#" class="social-icon-link bi-whatsapp"></a></li>

                        <li class="social-icon-item"><a href="https://fb.com/tooplate" target="_blank" class="social-icon-link bi-facebook"></a></li>
                    </ul>

                    <p class="copyright-text mt-3 mb-0">Copyright © 2036 Wedding Lite Co., Ltd.
                        <br/> Design: <a href="https://www.tooplate.com" target="_parent">Tooplate</a>
                    </p>
                </div>

            </div>
        </div>
    </section>

</main>
  )
}

export default Home