import './Navbar.css'
import { useState } from 'react';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    {/* event handling logic to add className='active' to anchor elements on the navbar */}
    document.addEventListener('click', function (event) {
        const clickedElement = event.target.closest('a'); 
        if (clickedElement) { 
            event.preventDefault(); 
            const activeElements = document.querySelectorAll('a.active'); 
            if (!clickedElement.classList.contains('active')) { 
                activeElements.forEach(element => element.classList.remove('active')); 
                clickedElement.classList.add('active'); 
            }
        }
    });

    return (
        <nav className='navbar'>
            <div className="logo">
                <img src="assets/A.png" alt="logo" />
            </div>
            <span className="hamburger-menu material-symbols-sharp" onClick={toggleMenu}>
                {isMenuOpen ? "drag_handle" : "close"}
            </span>
            <div className={isMenuOpen ? 'nav-item-1 nav-web' : 'nav-mobile'}>
                <a href="#about" >about</a>
            </div>
            <div className={isMenuOpen ? 'nav-item-2 nav-web' : 'nav-mobile'}>
                <a href="#experience" >experience</a>
            </div>
            <div className={isMenuOpen ? 'nav-item-3 nav-web' : 'nav-mobile'}>
                <a  href="#projects">projects</a>
            </div>
            <div className={isMenuOpen ? 'nav-item-4 nav-web' : 'nav-mobile'}>
                <a  href="#resume">resume</a>
            </div>
            <div className={isMenuOpen ? 'nav-item-5 nav-web' : 'nav-mobile'}>
                <a href="#contact">contact</a>
            </div>
        </nav>
    )
}

export default Navbar
