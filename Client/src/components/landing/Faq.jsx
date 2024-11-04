function Faq() {
    return (
        <section id="faq" className="faq contains">
            <div className="d-sm-flex faq-content">
                <div className="title-faq">
                    <h4 className="fw-bold mb-3 text-center text-sm-start">
                        Frequently Asked Question
                    </h4>
                    <p className=" text-center text-sm-start">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                </div>
                <div className="accord-faq">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Apa saja syarat yang dibutuhkan?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae aspernatur,
                                    error aliquid ad minus ullam fuga nobis officia! Nesciunt natus unde quam molestiae fuga,
                                    sint mollitia necessitatibus minima tempora.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae aspernatur,
                                    error aliquid ad minus ullam fuga nobis officia! Nesciunt natus unde quam molestiae fuga,
                                    sint mollitia necessitatibus minima tempora.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae aspernatur,
                                    error aliquid ad minus ullam fuga nobis officia! Nesciunt natus unde quam molestiae fuga,
                                    sint mollitia necessitatibus minima tempora.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Apakah Ada biaya antar-jemput?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae aspernatur,
                                    error aliquid ad minus ullam fuga nobis officia! Nesciunt natus unde quam molestiae fuga,
                                    sint mollitia necessitatibus minima tempora.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Bagaimana jika terjadi kecelakaan
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae aspernatur,
                                    error aliquid ad minus ullam fuga nobis officia! Nesciunt natus unde quam molestiae fuga,
                                    sint mollitia necessitatibus minima tempora.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq