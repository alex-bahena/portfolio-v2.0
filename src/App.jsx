import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'
import Toolkits from './components/toolkits/Toolkits';
import Education from './components/education/Education';

const bodyBackgroundColor = document.querySelector('body');

console.log(bodyBackgroundColor)

const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        bodyBackgroundColor.classList.add("white");
      } else {
        bodyBackgroundColor.classList.remove("white");
      }
    });
  };

  const options = { threshold: 0.5 };
const observer = new IntersectionObserver(callback, options);

const sections = document.querySelectorAll("#white");
sections.forEach((s) => observer.observe(s));

function App() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <About />
            <Education/>
            {/* <Toolkits/> */}
            <Projects />
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
