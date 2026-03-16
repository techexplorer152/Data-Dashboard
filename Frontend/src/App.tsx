import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Home/Hero/Hero';
import Finance from './pages/Finance Page/Finance';
import Footer from './components/Footer/footer';

function App() {
    return (
        <Router>
            <div className="app-container">
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
        </Router>
    );
}

export default App;
