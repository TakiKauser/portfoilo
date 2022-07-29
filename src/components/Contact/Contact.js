import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8bglqw5', 'template_uetw2lr', e.target, 'user_LdGJwt4LkOmHDffH36wzt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        e.target.reset();
    };
    return (
        <div className='container py-5' id='contact'>
            {/* <h2 className='mb-5'>GET IN TOUCH</h2> */}
            <section className="gap-5 row d-flex flex-column flex-lg-row justify-content-center align-items-center">
                <div className="col-md-4 col-xs-12">
                    <div className="mt-4 text-start">
                        <h3>Let's Work Together!</h3>
                        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    </div>
                    <div className="text-start">
                        <h5 className="my-3"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />Address: Dhaka, Bangladesh </h5>
                        <h5 className="my-3"><FontAwesomeIcon icon={faEnvelopeOpenText} className="me-3" />Email: takikauser@yahoo.com</h5>
                        <h5 className="my-3"><FontAwesomeIcon icon={faPhoneAlt} className="me-3" />Contact: +880 1980 889660</h5>
                    </div>
                </div>
                <div className="col-md-7 col-xs-12">
                    <div className="title">
                        <h2 className='mb-5 text-start p-1'>GET IN TOUCH</h2>
                    </div>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <div className="mb-3 text-start">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" id="name" />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" id="email" />
                            <span id="emailSecurity" className="form-text" style={{color: "yellow"}}><small>We'll never share your email with anyone else.</small></span>
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea name="message" className="form-control" id="message" />
                        </div>
                        <input className="btn btn-outline-light px-5 py-2" type="submit" value="Send" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;