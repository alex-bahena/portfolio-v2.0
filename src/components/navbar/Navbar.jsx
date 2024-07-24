import './Navbar.css'
import { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import DarkMode from './dark_mode/DarkMode';

function Navbar() {
    const { width: windowWidth } = useWindowSize();
    const isMobile = windowWidth <= 768;

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {

        const darkTheme = localStorage.getItem('DARK_MODE');
        document.body.classList.add(darkTheme);

        const handleClick = (event) => {
            const clickedElement = event.target.closest('a');
            if (clickedElement) {
                event.preventDefault();
                const activeElements = document.querySelectorAll('a.active');
                activeElements.forEach(element => element.classList.remove('active'));
                clickedElement.classList.add('active');
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <nav className='navbar'>
            <div className="logo">
               <h3>Alex Bahena</h3>
            </div>  
            {isMobile ? <>
                <div className='mobile-right-menu'>
            {!isMenuOpen && <>
                <DarkMode></DarkMode>
            </>}
            <span className="hamburger-menu material-symbols-sharp" onClick={toggleMenu}>
                {isMenuOpen ? "drag_handle" : "close"}
            </span>
            </div>
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
            </>
            :    <>
        <div className='center-menu'>
            <div className={isMenuOpen ? 'nav-item-1 nav-web' : 'nav-mobile'}>
                <a href="#about" >about</a>
            </div>
            <div className={isMenuOpen ? 'nav-item-2 nav-web' : 'nav-mobile'}>
                <a href="#experience" >experience</a>
            </div>
            <div className={isMenuOpen ? 'nav-item-3 nav-web' : 'nav-mobile'}>
                <a  href="#projects">projects</a>
            </div>
        </div>
        <div className='right-menu'>
            <div className={isMenuOpen ? 'nav-item-4 nav-web' : 'nav-mobile'}>
                <a  href="#resume">resume</a>
            </div>
            <div className={isMenuOpen ? 'nav-item-5 nav-web' : 'nav-mobile'}>
                <a href="#contact">contact</a>
            </div>
            <div className={isMenuOpen ? 'nav-item-6 nav-web' : 'nav-mobile'}>
           <DarkMode></DarkMode>
            </div>
        </div>
            </>  
            }
        </nav>
    )
}

export default Navbar
