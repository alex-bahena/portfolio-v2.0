import './Contact.css'

function Contact() {


    return (
        <div id='contact' className='contact-wrapper'>
            <h2 className='title-decoration'><span>Contact</span></h2>
            <div className='contact-content'>
                <p>
                    I’m currently looking for new tech positions. I would appreciate any job opportunities or referrals. <br />Feel free to contact me with relevant openings. Thank you for your support!
                </p>
            </div>
            <div className='contact-button'>
                <button><a href="mailto:alex.bahena.ca@gmail.com">Say Hello!</a></button>
            </div>

        </div>
    )
}

export default Contact
