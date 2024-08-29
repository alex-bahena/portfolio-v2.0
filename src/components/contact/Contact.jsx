import './Contact.css'

function Contact() {


    return (
        <div id='contact' className='contact-wrapper'>
            <h2 className='title-decoration'><span>Conctact</span></h2>
            <div className='contact-content'>
            I am currently looking for a position in software development or a related field. If you have any job openings available, I would appreciate it if you could contact me.
            </div>
            <div className='contact-button'>
                <button><a href="mailto:alex.bahena.ca@gmail.com">Say Hello!</a></button>
            </div>

        </div>
    )
}

export default Contact
