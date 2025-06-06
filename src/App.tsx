import './App.css'
import About from './components/about/About'
import Header from './components/header/header'
import Home from './components/home/Home'

import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'



function App() {
  return (
    <>
      <Header/>
      
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Work/>
      </main>
    </>
  )
}

export default App
