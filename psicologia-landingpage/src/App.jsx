
import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Posts from './components/Posts/Posts'


function App() {

  return (
    <div className='overflow-x-hidden'>
  
     <Header/>
     <Hero/>
     <About/>
     <Services/>
     <Posts/>
     <Footer/>
 
    </div>
  )
}

export default App
