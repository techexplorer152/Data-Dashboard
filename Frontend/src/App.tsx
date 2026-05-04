import { Routes, Route } from 'react-router-dom';
// @ts-ignore
import Hero from './pages/Home/Hero/Hero';
import Finance from './pages/Finance Page/Finance';
import Health from './pages/Home/Hero/HeroBackground/FloatingCards/Templates/HealthCard'
import Footer from './components/Footer/footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contacts from './pages/Contact/Contacts'
import Services from './pages/Services/Services.js'
import Text from './pages/Home/Introduction/text'
import  './App.css'

function App() {
    return (
        <div className="app-container">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contacts/>}/>
                <Route path="/services" element={<Services/>}/>

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
            <Footer/>
            <Text/>
            <Health/>
        </div>
    );
}

export default App;