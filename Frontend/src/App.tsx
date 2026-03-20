import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Home/Hero/Hero';
import Finance from './pages/Finance Page/Finance';
import Footer from './components/Footer/footer';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className="app-container">
            <Navbar />

            <Routes>
                <Route path="/" element={<Hero />} />

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
        </div>
    );
}

export default App;