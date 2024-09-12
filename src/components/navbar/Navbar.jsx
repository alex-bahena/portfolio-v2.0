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

        /* Render the last state of the dark mode theme stored in localStorage */
        const darkTheme = localStorage.getItem('DARK_MODE');
        document.body.classList.add(darkTheme);
        const handleClick = (event) => {
            const clickedElement = event.target.closest('.nav-link');
            if (clickedElement) {
                event.preventDefault();
                setIsMenuOpen(isMenuOpen);
                const activeElements = document.querySelectorAll('.nav-link .active');
                activeElements.forEach(element => element.classList.remove('active'));

                /* The active classname is removed after 1500ms (1.5s) */
                clickedElement.classList.add('active');
                setTimeout(() => {
                    clickedElement.classList.remove('active');
                }, 1500);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [isMenuOpen]);

    const handleAnchorClick = (event, sectionId) => {
        event.preventDefault();
        const element = document.getElementById(sectionId);
        const navbarOffset = 50;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarOffset


        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };


    return (
        <nav className={!isMenuOpen ? "navbar nav-active" : 'navbar'}>
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
                <div className={isMenuOpen ? 'nav-web' : 'nav-mobile'}>
                    <a className='nav-link' onClick={(e) => handleAnchorClick(e, 'about')}>about</a>
                    <a className='nav-link' onClick={(e) => handleAnchorClick(e, 'education')} >education</a>
                    <a className='nav-link' onClick={(e) => handleAnchorClick(e, 'projects')}>projects</a>
                    <a  rel="noopener noreferrer" target="_blank"href='https://drive.google.com/file/d/161rgq_r4vWuuG2Rr-5fd2K_tvBXoOoYe/view?usp=sharing'>resume</a>
                    <a className='nav-link' href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')}>contact</a>
                </div>

            </>
                : <>
                    <div className='center-menu'>
                        <div className='nav-item-1 nav-web' >
                            <a className='nav-link' onClick={(e) => handleAnchorClick(e, 'about')}>about</a>
                        </div>
                        <div className='nav-item-2 nav-web' >
                            <a className='nav-link' onClick={(e) => handleAnchorClick(e, 'education')} >education</a>
                        </div>
                        <div className='nav-item-3 nav-web' >
                            <a className='nav-link' onClick={(e) => handleAnchorClick(e, 'projects')}>projects</a>
                        </div>
                    </div>
                    <div className='right-menu'>
                        <div className='nav-item-4 nav-web' >
                            <a  rel="noopener noreferrer" target="_blank"href='https://drive.google.com/file/d/161rgq_r4vWuuG2Rr-5fd2K_tvBXoOoYe/view?usp=sharing'>resume</a>
                        </div>
                        <div className='nav-item-5 nav-web' >
                            <a className='nav-link' onClick={(e) => handleAnchorClick(e, 'contact')}>contact</a>
                        </div>
                        <div className='nav-item-6 nav-web' >
                            <DarkMode></DarkMode>
                        </div>
                    </div>
                </>
            }
        </nav>
    )
}

export default Navbar
