import './App.css'
import Navbar from './components/Navbar/Navbar'

import Hero from './pages/Home/Hero/Hero'

import Footer from './components/Footer/footer'
import Home from './pages/Home/Home.tsx'

import Finance from './pages/Finance Page/Finance'

import Template from './pages/Home/Hero/HeroBackground/FloatingCards/Templates/FloatingCardTemplate'
import Sports from './pages/Home/Hero/HeroBackground/FloatingCards/Templates/SportsCard'

function App() {


    return (
        <div>


            <section >
                <Hero />
            </section>
            <Finance/>
            <Footer/>



        </div>
    )
}

export default App
