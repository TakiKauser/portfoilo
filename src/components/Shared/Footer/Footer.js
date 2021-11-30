import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div style={{ borderTop: '1px solid grey' }} className="pt-3">
            <div className='row'>
                <div className='mt-2 col-lg-6'>
                    <p>&copy; 2021 | <strong>Taki Kauser</strong></p>
                </div>
                <div className='gap-5 mx-auto col-sm-6 d-flex'>
                    <p><a className="text-white text-decoration-none" href="https://github.com/TakiKauser"><FontAwesomeIcon icon={faGithub} size="2x" /></a></p>
                    <p><a className="text-white text-decoration-none" href="https://www.linkedin.com/in/taki-kauser/"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a></p>
                    <p><a className="text-white text-decoration-none" href="takikauser@yahoo.com"><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" /></a></p>
                    <p><a className="text-white text-decoration-none" href="https://twitter.com/taki_kauser"><FontAwesomeIcon icon={faTwitterSquare} size="2x" /></a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;