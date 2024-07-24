import { useState } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';


const DarkMode = () =>{
    const { width: windowWidth } = useWindowSize();
    const isMobile = windowWidth <= 768
    const body = document.body;
    const lightMode = 'light_mode';
    const darkMode = 'dark_mode';
    let  theme;
    const [appTheme, setappTheme] = useState('')
    console.log(appTheme);

    const darkTheme = () => {
        if (localStorage) {
         theme = localStorage.getItem('theme')   
            setappTheme(theme)
        }
        if(theme === darkMode){
            body.classList.add('dark-mode-variables')
            localStorage.setItem('DARK_MODE', 'dark-mode-variables')
            localStorage.setItem('theme', lightMode)
        }else {
            body.classList.remove('dark-mode-variables')
            localStorage.setItem('theme', darkMode )
            localStorage.setItem('DARK_MODE', '.')
        }
    }
const themeLastState = localStorage.getItem('theme');

    return (
       <span className='dark-mode-wrapper' onClick={(e) => darkTheme(e)}>
        <span id="dark-mode"className="material-symbols-sharp dark-mode" >
            {themeLastState ? themeLastState : darkMode}
        </span>
        {!isMobile &&
            <span id="dark-mode">{themeLastState === 'light_mode'? 'Light mode' : 'Dark mode'}
            </span> 
        }
        </span>
  
    )

}

export default DarkMode;