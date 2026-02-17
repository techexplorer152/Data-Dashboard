import './App.css'
import Navbar from './components/Navbar/Navbar'
import Background from './pages/Home/Hero/HeroBackground/HeroBackground.tsx'

import Footer from './components/Footer/footer'
import Home from './pages/Home/Home.tsx'
import Try from './pages/Home/Hero/HeroBackground/FloatingCards/try'

function App() {


    return (
        <div>


            <section >
                <Background />
            </section>
            <Footer/>
            <Try/>



        </div>
    )
}

export default App
