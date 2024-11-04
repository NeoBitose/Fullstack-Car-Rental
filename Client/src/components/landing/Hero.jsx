function Hero() {
    return (
        <section id="Hero" class="hero d-lg-flex mt-3">
            <div class="desc-hero d-flex align-items-center">
                <div class="desc-hero-content">
                    <h1 class="mb-3">
                        Sewa & Rental Mobil Terbaik di kawasan Jember
                    </h1>
                    <p class="mb-3">
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                        untuk sewa mobil selama 24 jam.
                    </p>
                    <a href="/cars">
                        <button class="btn btn-success">Mulai Sewa Mobil</button>
                    </a>
                </div>
            </div>
            <div class="img-hero">
                <img src="/images/img_car.png" class="img-fluid" alt="hero image" />
            </div>
        </section>
    )
}

export default Hero