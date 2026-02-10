import './App.css'
import Navbar from './components/Navbar/Navbar'
import Background from './pages/Home/Hero/HeroBackground/HeroBackground.tsx'

import Footer from './components/Footer/footer'
import Home from './pages/Home/Home.tsx'

function App() {


    return (
        <div>


            <section >
                <Background />
                <div>
                    <h1>Hero Section</h1>
                    <p>Particles appear behind me</p>
                </div>
            </section>



        </div>
    )
}

export default App
