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
        <>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <div class="mb-3">
                    <label for="name" class="form-label markWord">Name</label>
                    <input type="text" name="name" class="form-control" id="name" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label markWord">Email</label>
                    <input type="email" name="email" class="form-control" id="email" />
                    <div id="emailSecurity" class="form-text text-white">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label markWord">Message</label>
                    <textarea name="message" class="form-control" id="message" />
                </div>
                <input className="btn btn-outline-light" type="submit" value="Send" />
            </form>
        </>
    );
};

export default Contact;