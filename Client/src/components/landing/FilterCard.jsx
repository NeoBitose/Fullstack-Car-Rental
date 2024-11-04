function FilterCard() {
    return (
        <section id="filter-card" className="filter-card contains">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="row py-3 px-4">
                                <div className="mt-2 mt-lg-0 col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                                    <label>Tipe Driver</label>
                                    <select className="form-select mt-2" id="driver-type">
                                        <option value="default" selected>Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;
                                        </option>
                                        <option value="true">Dengan Supir</option>
                                        <option value="false">Tanpa Supir (Lepas Kunci)</option>
                                    </select>
                                </div>
                                <div className="mt-2 mt-lg-0 col-lg-auto col-xl-auto col-md-auto">
                                    <label>Tanggal</label>
                                    <input type="date" className="form-control mt-2" placeholder="Pilih Tanggal" id="date-rent" />
                                </div>
                                <div className="mt-2 mt-lg-0 col-lg-auto col-xl-auto col-md-auto search__time">
                                    <labe>Pilih Waktu</labe>
                                    <select className="form-select mt-2" id="time-rent">
                                        <option value="false" selected>Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        </option>
                                        <option value="08:00">08.00 WIB</option>
                                        <option value="09:00">09.00 WIB</option>
                                        <option value="10:00">10.00 WIB</option>
                                        <option value="11:00">11.00 WIB</option>
                                        <option value="12:00">12.00 WIB</option>
                                    </select>

                                </div>
                                <div className="mt-2 mt-lg-0 col-lg-auto col-xl-auto col-md-auto">
                                    <label className="fw-light">Jumlah Penumpang (optional)</label>
                                    <div className="input-group">
                                        <input type="search" className="form-control border-end-0 mt-2" placeholder="Jumlah Penumpang" id="passanger" value="0" />
                                        <span className="input-group-text bg-white">
                                            <img src="/images/fi_users.png" width="20px" alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-2 mt-lg-0 col-lg-2 col-xl-2 col-md-2  pt-4">
                                    <button className="btn btn-success mt-2" id="load-btn">Cari Mobil</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FilterCard