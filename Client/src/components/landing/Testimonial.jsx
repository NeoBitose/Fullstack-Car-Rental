function Testimonial() {
    return (
        <section id="testimonial" className="testimonial contains">
        <h4 className="text-center fw-bold mb-3">Testimonial Kami</h4>
        <p className="text-center font-weight-normal mb-3 mb-sm-4">Berbagai review positif dari para pelanggan kami</p>
        <div id="carouselExample" className="carousel slide py-3">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="card border-0 bg-info p-5">
                        <div className="d-flex gap-3 flex-column flex-lg-row justify-content-center ms-0 ms-sm-5 ms-lg-0">
                            <div className="col-lg-2 d-flex align-items-center justify-content-center">
                                <img src="/images/img_testi.png" className="img-fluid img-circle" width="70" alt="testi img" />
                            </div>
                            <div className="col-lg-7">
                                <div className="d-flex justify-content-center justify-content-lg-start ">
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                </div>
                                <div className="row">
                                    <div className="col-sm-7 col-lg-12">
                                        <p className="my-2">
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                        </p>
                                        <p className="fw-normal">John Dee 32, Bromo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card border-0 bg-info p-5">
                        <div className="d-flex gap-3 flex-column flex-lg-row justify-content-center ms-0 ms-sm-5 ms-lg-0">
                            <div className="col-sm-2 d-flex align-items-center justify-content-center">
                                <img src="/images/img_testi.png" className="img-fluid img-circle" width="70" alt="" />
                            </div>
                            <div className="col-sm-7">
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                </div>
                                <p className="my-2">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="fw-normal">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card border-0 bg-info p-5">
                        <div className="d-flex gap-3 flex-column flex-lg-row justify-content-center ms-0 ms-sm-5 ms-lg-0">
                            <div className="col-sm-2 d-flex align-items-center justify-content-center">
                                <img src="/images/img_testi.png" className="img-fluid img-circle" width="70" alt="" />
                            </div>
                            <div className="col-sm-7">
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                    <img src="/images/Star.png" alt="star" />
                                </div>
                                <p className="my-2">“
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="fw-normal">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>
    )
}

export default Testimonial