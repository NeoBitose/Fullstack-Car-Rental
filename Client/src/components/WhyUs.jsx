function WhyUs() {
    return (
        <section id="why-us" className="why-us contains">
            <h4 className="fw-bold mb-3 text-center text-sm-start">Why Us?</h4>
            <p className="mb-3 mb-sm-4 text-center text-sm-start">Mengapa harus pilih Binar Car Rental?</p>
            <div className="d-lg-flex gap-4">
                <div className="col card mb-3 mb-lg-0">
                    <div className="card-body p-4">
                        <img src="/images/icon_complete.png" width="32" height="32" className="mb-3" alt="feature img" />
                            <h6 className="fw-bold mb-3">Mobile Lengkap</h6>
                            <p className="mb-0">
                                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                            </p>
                    </div>
                </div>
                <div className="col card mb-3 mb-lg-0">
                    <div className="card-body p-4">
                        <img src="/images/icon_price.png" width="32" height="32" className="mb-3" alt="feature img" />
                            <h6 className="fw-bold mb-3">Harga Murah</h6>
                            <p className="mb-0">
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                            </p>
                    </div>
                </div>
                <div className="col card mb-3 mb-lg-0">
                    <div className="card-body p-4">
                        <img src="/images/icon_24hrs.png" width="32" height="32" className="mb-3" alt="feature img" />
                            <h6 className="fw-bold mb-3">Layanan 24 Jam</h6>
                            <p className="mb-0">
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                            </p>
                    </div>
                </div>
                <div className="col card mb-3 mb-lg-0">
                    <div className="card-body p-4">
                        <img src="/images/icon_professional.png" width="32" height="32" className="mb-3" alt="feature img" />
                            <h6 className="fw-bold mb-3">Sopir Profesional</h6>
                            <p className="mb-0">
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                            </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs