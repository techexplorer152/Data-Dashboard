import { Routes, Route } from 'react-router-dom';
// @ts-ignore
import Hero from './pages/Home/Hero/Hero';
import Finance from './pages/Finance Page/Finance';
import Footer from './components/Footer/footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contacts from './pages/Contact/Contacts'

function App() {
    return (
        <div className="app-container">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contacts/>}/>

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
        </div>
    );
}

export default App;