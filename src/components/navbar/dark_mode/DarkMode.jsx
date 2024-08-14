import { useState, useEffect } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';

const DarkMode = () => {
    const { width: windowWidth } = useWindowSize();
    const isMobile = windowWidth <= 768;
    const noTextDarkMode = windowWidth <= 1200;

    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark_mode');

    useEffect(() => {
        if (theme === 'dark_mode') {
            document.body.classList.add('dark-mode-variables');
            localStorage.setItem('theme', 'dark_mode');
            localStorage.setItem('DARK_MODE', 'dark-mode-variables')
        } else {
            document.body.classList.remove('dark-mode-variables');
            localStorage.setItem('theme', 'light_mode');
            localStorage.setItem('DARK_MODE', '.')
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark_mode' ? 'light_mode' : 'dark_mode'));
    };

    return (
        <span className='dark-mode-wrapper' onClick={toggleTheme}>
            <span className="material-symbols-sharp dark-mode">
            {theme === 'light_mode' ? 'dark_mode' : 'light_mode'}
            </span>
            {!isMobile &&
                <span>{!noTextDarkMode ? (theme === 'light_mode' ? 'Dark mode' : 'Light mode'): ''}</span>
            }
        </span>
    );
};

export default DarkMode;
