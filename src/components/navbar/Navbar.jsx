import './Navbar.css'
import { useState } from 'react';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    {/* event handling logic to add className='active' to anchor elements on the navbar */}
    document.addEventListener('click', function (event) {
        const clickedElement = event.target.closest('a'); // Find the closest anchor element
        if (clickedElement) { // If an anchor element was clicked
            event.preventDefault(); // Prevent the default behavior
            const activeElements = document.querySelectorAll('a.active'); // Get all elements with 'active' class
            if (!clickedElement.classList.contains('active')) { // If the clicked element doesn't have 'active' class
                activeElements.forEach(element => element.classList.remove('active')); // Remove 'active' class from all elements
                clickedElement.classList.add('active'); // Add 'active' class to the clicked element
            }
        }
    });

    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section'); // Assuming sections are used for each content section
        const scrollPosition = window.scrollY;
    
        sections.forEach(section => {
            const anchorId = section.id;
            const anchor = document.querySelector(`a[href="#${anchorId}"]`);
    
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                anchor.classList.add('active');
            } else {
                anchor.classList.remove('active');
            }
        });
    });

    return (
        <nav className='navbar'>
            <div className="logo"><img src="assets/A.png" alt="logo" />
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
