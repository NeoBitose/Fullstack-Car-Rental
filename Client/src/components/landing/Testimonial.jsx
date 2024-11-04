function Testimonial() {
    return (
        <section id="testimonial" class="testimonial contains">
        <h4 class="text-center fw-bold mb-3">Testimonial Kami</h4>
        <p class="text-center font-weight-normal mb-3 mb-sm-4">Berbagai review positif dari para pelanggan kami</p>
        <div id="carouselExample" class="carousel slide py-3">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="card border-0 bg-info p-5">
                        <div class="d-flex gap-3 flex-column flex-lg-row justify-content-center ms-0 ms-sm-5 ms-lg-0">
                            <div class="col-lg-2 d-flex align-items-center justify-content-center">
                                <img src="/images/img_testi.png" class="img-fluid img-circle" width="70" alt="testi img" />
                            </div>
                            <div class="col-lg-7">
                                <div class="d-flex justify-content-center justify-content-lg-start ">
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                </div>
                                <div class="row">
                                    <div class="col-sm-7 col-lg-12">
                                        <p class="my-2">
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                        </p>
                                        <p class="fw-normal">John Dee 32, Bromo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card border-0 bg-info p-5">
                        <div class="d-flex gap-3 flex-column flex-lg-row justify-content-center ms-0 ms-sm-5 ms-lg-0">
                            <div class="col-sm-2 d-flex align-items-center justify-content-center">
                                <img src="/images/img_testi.png" class="img-fluid img-circle" width="70" alt="" />
                            </div>
                            <div class="col-sm-7">
                                <div class="d-flex justify-content-center justify-content-sm-start">
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                </div>
                                <p class="my-2">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p class="fw-normal">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card border-0 bg-info p-5">
                        <div class="d-flex gap-3 flex-column flex-lg-row justify-content-center ms-0 ms-sm-5 ms-lg-0">
                            <div class="col-sm-2 d-flex align-items-center justify-content-center">
                                <img src="/images/img_testi.png" class="img-fluid img-circle" width="70" alt="" />
                            </div>
                            <div class="col-sm-7">
                                <div class="d-flex justify-content-center justify-content-sm-start">
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                </div>
                                <p class="my-2">“
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p class="fw-normal">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
    )
}

export default Testimonial