import React from 'react';
import emailjs from 'emailjs-com';

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
            <h2 className='mb-5'>GET IN TOUCH</h2>
            <section className="gap-5 row">
                <div className="col-md-4 col-xs-12">
                    <div>
                        <h3>Let's Work Together!</h3>
                        <p className="text-start">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    </div>
                    <div className="text-start">
                        <h5>Address: Dhaka, Bangladesh </h5>
                        <h5>Email: takikauser@yahoo.com</h5>
                        <h5>Contact: +880 1980 889660</h5>
                    </div>
                </div>
                <div className="col-md-7 col-xs-12">
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" name="name" class="form-control" id="name" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" name="email" class="form-control" id="email" />
                            <div id="emailSecurity" class="form-text text-white">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea name="message" class="form-control" id="message" />
                        </div>
                        <input className="btn btn-outline-light" type="submit" value="Send" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;