import './Contact.css'

function Contact() {


    return ( 
    <div className='contact-wrapper'>
            <h2 className='title-decoration'><span>Conctact</span></h2>
            <div className='contact-content'>
            I am currently seeking employment, 
            and I would appreciate it if you could <br></br> contact 
            me with any available job opportunities
            </div>
            <div className='contact-button'>
                <button>Say Hello!</button>
            </div>
            <div className='contact-links-media'>
                <a href=""><span className="fa fa-github"></span></a>
                <a href=""><span className="fa fa-linkedin"></span></a>
            </div>
    </div>
    )
}

export default Contact
