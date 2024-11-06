import Navbar from './Navbar'
import Hero from './Hero'

function Header() {
    return (
        <header id="header" className="bg-info">
            <Navbar />
            <Hero />
        </header>
    )
}

export default Header