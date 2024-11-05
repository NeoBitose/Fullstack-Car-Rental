import { useState, useContext } from 'react';
import { CarContext } from '../../context/CarContext';

function FilterCard() {
    const { filters, setFilters } = useContext(CarContext);
    const [driverType, setDriverType] = useState(filters.driverType);
    const [date, setDate] = useState(filters.date);
    const [timeRent, setTimeRent] = useState(filters.timeRent);
    const [passenger, setPassenger] = useState(filters.passenger);

    const handleFilter = () => {
        setFilters({ driverType, date, timeRent, passenger });
    };

    return (
        <section id="filter-card" className="filter-card contains">
            <div className="card">
                <div className="card-body">
                    <div className="row py-3 px-4">
                        {/* Tipe Driver */}
                        <div className="mt-2 mt-lg-0 col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                            <label>Tipe Driver</label>
                            <select className="form-select mt-2" id="driver-type" value={driverType} onChange={(e) => setDriverType(e.target.value)}>
                                <option value="default">Pilih Tipe Driver</option>
                                <option value="true">Dengan Supir</option>
                                <option value="false">Tanpa Supir (Lepas Kunci)</option>
                            </select>
                        </div>

                        {/* Tanggal */}
                        <div className="mt-2 mt-lg-0 col-lg-auto col-xl-auto col-md-auto">
                            <label>Tanggal Sewa</label>
                            <input type="date" className="form-control mt-2" placeholder="Pilih Tanggal" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>

                        {/* Waktu */}
                        <div className="mt-2 mt-lg-0 col-lg-auto col-xl-auto col-md-auto search__time">
                            <label>Pilih Waktu</label>
                            <select className="form-select mt-2" id="time-rent" value={timeRent} onChange={(e) => setTimeRent(e.target.value)}>
                                <option value="false">Pilih Waktu</option>
                                <option value="08:00">08.00 WIB</option>
                                <option value="09:00">09.00 WIB</option>
                                <option value="10:00">10.00 WIB</option>
                                <option value="11:00">11.00 WIB</option>
                                <option value="12:00">12.00 WIB</option>
                            </select>
                        </div>

                        {/* Jumlah Penumpang */}
                        <div className="mt-2 mt-lg-0 col-lg-auto col-xl-auto col-md-auto">
                            <label className="fw-light">Jumlah Penumpang (optional)</label>
                            <div className="input-group">
                                <input type="number" className="form-control mt-2" placeholder="Jumlah Penumpang" value={passenger} onChange={(e) => setPassenger(e.target.value)} />
                            </div>
                        </div>

                        {/* Tombol Cari Mobil */}
                        <div className="mt-2 mt-lg-0 col-lg-2 col-xl-2 col-md-2 pt-4">
                            <button className="btn btn-success mt-2" onClick={handleFilter}>Cari Mobil</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FilterCard;
