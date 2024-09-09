import './About.css'
import profilephoto from '/assets/profilephoto.png'
import useWindowSize from '../../hooks/useWindowSize';


function About() {
    const { width: windowWidth } = useWindowSize();
    const isMobile = windowWidth <= 768;

    return (
        <section id="about" className="about">
            {isMobile ? (
                <>
                    <div className='about-me'>
                        <div className='section-title'>
                            <h2 className='title-decoration'><span>About me</span></h2>
                        </div>
                        <div className='profile-photo'>
                            <img src={profilephoto} alt="profile-photo" />
                        </div>
                        <p className='line-jump'>Hey there! I’m Alex, a Mechatronics Engineer located in the <span className='emphasis-text'>Greater Toronto Area</span>. With a background in automation spanning over five years, I’ve recently transitioned into software development.</p>

                        <p className='line-jump'>By combining my engineering skills and passion for coding, <span className='emphasis-text'>I specialized</span> in creating innovative and efficient solutions to real-world problems.</p>

                        <p> Outside of work, I love exploring small towns with my family and capturing unique perspectives through my camera and drone. My hobbies keep me inspired and curious about the world around me.</p>
                    </div>
                </>
            ) : (
                <>
                    <div className='profile-photo'>
                        <img src={profilephoto} alt="profile-photo" />
                    </div>
                    <div className='about-me'>
                        <h2 className='title-decoration'><span>About me</span></h2>
                    </div>
                    <div className='about-description'>
                        <p className='line-jump'>Hey there! I’m Alex, a Mechatronics Engineer located in the <span className='emphasis-text'>Greater Toronto Area</span>. With a background in automation spanning over five years, I’ve recently transitioned into software development.</p>

                        <p className='line-jump'>By combining my engineering skills and passion for coding, <span className='emphasis-text'>I specialized</span> in creating innovative and efficient solutions to real-world problems.</p>

                        <p> Outside of work, I love exploring small towns with my family and capturing unique perspectives through my camera and drone. My hobbies keep me inspired and curious about the world around me.</p>
                    </div>
                </>)
            }

        </section>
    )
}


export default About
