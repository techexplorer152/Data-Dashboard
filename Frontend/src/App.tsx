
import { Routes, Route } from 'react-router-dom';

// Pages & UI Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contacts from './pages/Contact/Contacts';
import Services from './pages/Services/Services.js';
import Finance from './pages/Finance Page/Finance';
import Text from './pages/Home/Introduction/text';

// 3D Background & HTML Templates
import HeroBackground from './pages/Home/Hero/HeroBackground/HeroBackground';
import FloatingGdpCard from './pages/Home/Hero/HeroBackground/FloatingCards/Templates/FloatingGdpCard';
import SportsCard from './pages/Home/Hero/HeroBackground/FloatingCards/Templates/SportsCard';
import HealthCard from './pages/Home/Hero/HeroBackground/FloatingCards/Templates/HealthCard';

import './App.css';

function App() {
    return (
        <div className="app-container">
            <Navbar />


            <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center',gap:"20px"}}>

                <div id="card-2"><SportsCard /></div>
                <div id="card-3"><HealthCard /></div>
                <div id="card-1"><FloatingGdpCard /></div>
            </div>

            {/* --- 2. REGULAR WEBSITE CONTENT --- */}
            <main className="content-wrapper" style={{ position: 'relative', zIndex: 1 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contacts />} />
                    <Route path="/services" element={<Services />} />
                    <Route
                        path="/finance"
                        element={
                            <>
                                <Finance />
                                <Footer />
                            </>
                        }
                    />
                </Routes>
                <Text />
            </main>


            <HeroBackground />

            <Footer />
        </div>
    );
}

export default App;