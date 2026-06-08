import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contacts from './pages/Contact/Contacts';
import Services from './pages/Services/Services.js';
import Finance from './pages/Finance Page/Finance';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Navbar />

            <main className="content-wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contacts />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/finance" element={<Finance />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;