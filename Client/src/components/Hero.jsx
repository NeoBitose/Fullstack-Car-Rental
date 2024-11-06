import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section id="Hero" className="hero d-lg-flex mt-3">
            <div className="desc-hero d-flex align-items-center">
                <div className="desc-hero-content">
                    <h1 className="mb-3">
                        Sewa & Rental Mobil Terbaik di kawasan Jember
                    </h1>
                    <p className="mb-3">
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                        untuk sewa mobil selama 24 jam.
                    </p>
                    <Link to="/filter">
                        <button className="btn btn-success">Mulai Sewa Mobil</button>
                    </Link>
                </div>
            </div>
            <div className="img-hero">
                <img src="/images/img_car.png" className="img-fluid" alt="hero image" />
            </div>
        </section>
    )
}

export default Hero