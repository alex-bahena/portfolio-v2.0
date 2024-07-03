import './About.css'
import profilephoto from '/assets/profilephoto.jpg'
import useWindowSize from '../../hooks/useWindowSize';


function About() {
    const { width: windowWidth } = useWindowSize();
    const isMobile = windowWidth <= 768;

    return (
        <section id="background" className="about">
              <div className='profile-photo'>
                        <img src={profilephoto} alt="profile-photo" />
                    </div>
            {isMobile ? (
                <>
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
            ) : (
                <>
                    <div className='about-me'>
                        <h2 className='title-decoration'><span>About me</span></h2>
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
                </>)
            }

        </section>
    )
}


export default About
