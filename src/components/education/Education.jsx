import './Education.css'
import graduatephoto from '/assets/graduatephoto.png'


function Education() {
    return (

        <section id='education' className='education'>       
              <div className='education-title'>
                <h2 className='title-decoration'><span>Education</span></h2>
            </div>
            <div className='graduate-photo'>
                <img src={graduatephoto} alt='profile-photo' />
            </div>
            <div className='education-second'>
                <h3>
                    Coding Bootcamp Certification <a rel='noopener noreferrer' target='_blank' href='https://www.credential.net/ece06185-9981-4601-8c63-8d9f847ee3d8#gs.euiji7'><span className='external_link material-symbols-sharp'>
                        open_in_new
                    </span></a>
                </h3>
                <p className='location'>at Monterrey Institute of Technology and Higher Education.</p>
                <p className='country-date'>  <span className='material-symbols-sharp emphasis-text'>location_on</span> Mexico <span className='emphasis-text'>Feb 2022 - Sept 2022</span></p>
            </div>
            <div className='education-first'>
                <h3>
                    Bachelors of Engineering in Mechatronics
                </h3>
                <p className='location'>at Emiliano Zapata Technological University.</p>
                <p className='country-date'>  <span className='material-symbols-sharp emphasis-text'>location_on</span> Mexico <span className='emphasis-text'>2012 - 2016</span></p>
            </div>
        </section>
    )
}


export default Education
