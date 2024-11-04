function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-info">
            <div class="contains d-flex justify-content-between">
                <div class="d-flex justify-content-between align-items-center nav-mobile">
                    <a class="navbar-brand" href="#">
                        <div class="logo-box bg-primary"></div>
                    </a>
                    <button class="navbar-toggler border-0 px-0" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="offcanvas offcanvas-end w-50" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header pb-1 pb-sm-2">
                        <h6 class="offcanvas-title fw-bold" id="offcanvasNavbarLabel">BCR</h6>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body pt-1 pt-sm-2 ms-lg-auto">
                        <ul class="navbar-nav nav nav-pills">
                            <li class="nav-item my-auto">
                                <a href="#service" class="nav-link ms-lg-3 text-dark fw-normal">Our Services</a>
                            </li>
                            <li class="nav-item my-auto">
                                <a href="#why-us" class="nav-link ms-lg-3 text-dark fw-normal">Why Us</a>
                            </li>
                            <li class="nav-item my-auto">
                                <a href="#testimonial" class="nav-link ms-lg-3 text-dark fw-normal">Testimonial</a>
                            </li>
                            <li class="nav-item my-auto">
                                <a href="#faq" class="nav-link ms-lg-3 text-dark fw-normal">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link ms-lg-3 text-dark fw-normal" aria-current="page">
                                    <button class="btn btn-success">Register</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar