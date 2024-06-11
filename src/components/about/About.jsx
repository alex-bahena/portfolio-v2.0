import './About.css'
import profilephoto from '/assets/profilephoto.jpeg'
import { useState, useEffect } from 'react'


function About() {
    const isMobile = 768;
    const [reportWindowWidth, setreportWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setreportWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 
    return (
<section className="about">
    {reportWindowWidth <= isMobile ? (
        <>
    <div className='profile-photo'>
        <img src={profilephoto} alt="profile-photo" />
    </div>
    <div className='about-me'>
    <h2 className='title-decoration'><span>About me</span></h2>
    <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Sapiente perspiciatis
                 tempora ea amet consectetur reiciendis
                  ipsa vel, voluptatibus quo enim, 
                  minima suscipit sit saepe quia 
                  tempore recusandae dolores 
                  praesentium numquam.
                  
                  Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Sapiente perspiciatis
                 tempora ea amet consectetur reiciendis
                  ipsa vel, voluptatibus quo enim, 
                  minima suscipit sit saepe quia 
                  tempore recusandae dolores 
                  praesentium numquam.
           
                  
                </p>
    </div>
        </>
        ):(
            <>
            <div className='profile-photo'>
                <img src={profilephoto} alt="profile-photo" />
            </div>
            <div className='about-description'>
                <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Sapiente perspiciatis
                 tempora ea amet consectetur reiciendis
                  ipsa vel, voluptatibus quo enim, 
                  minima suscipit sit saepe quia 
                  tempore recusandae dolores 
                  praesentium numquam.
                  
                  Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Sapiente perspiciatis
                 tempora ea amet consectetur reiciendis
                  ipsa vel, voluptatibus quo enim, 
                  minima suscipit sit saepe quia 
                  tempore recusandae dolores 
                  praesentium numquam.
                 </p>
            </div>
            <div className='about-me'>
            <h2 className='title-decoration'><span>About me</span></h2>
            </div>
                </>        )
    }

</section>
    )
}


export default About
