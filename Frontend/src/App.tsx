import './App.css'
import Navbar from './components/Navbar/Navbar'
import Background from './pages/Home/Hero/HeroBackground/HeroBackground.tsx'

import Footer from './components/Footer/footer'
import Home from './pages/Home/Home.tsx'

import Template from './pages/Home/Hero/HeroBackground/FloatingCards/Templates/FloatingCardTemplate'

function App() {


    return (
        <div>


            <section >
                <Background />
            </section>
            <Footer/>
            <Template/>



        </div>
    )
}

export default App
