import Contact from "./components/sections/Contact"
import Courses from "./components/sections/Courses"
import Main from "./components/sections/Main"
import Navbar from "./components/sections/Navbar"
import Testimonials from "./components/sections/Testimonials"
import Footer from "./components/sections/Footer"
import About from "./components/sections/About"
import Journey from "./components/sections/Journey"
import Faq from "./components/sections/Faq"

function App() {
  return (
    <div className='w-screen h-screen flex flex-col overflow-x-hidden background'>
      <Navbar />
      <Main />
      <Courses />
      <About />
      <Journey />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
