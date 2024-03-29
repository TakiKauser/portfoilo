import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container my-3" id="about">
            <div className="row">
                <div className="my-5 col-sm-8 text-start">
                    <div className="title">
                        <h4 className="text-start p-1">Education</h4>
                    </div>
                    <p>I have studied computer science at the faculty of Computer Science & Enginnering at Institute of Science and Technology, which provided me with some outstanding and technical skills</p>
                    <div className="title">
                        <h4 className="mt-5 text-start p-1">Developer</h4>
                    </div>
                    <p>I consider myself equipped with most of web development skills, but I know I still need to learn a lot more. I am highly trainable and can easily learn tasks. If I don't have experience with software or skill, I am doing all the research to study it.</p>
                </div>
                <div className="mt-3 border-start col-sm-4 text-center text-sm-start">
                    <div className="title">
                        <h4 className="text-center text-lg-start mb-5 mb-lg-3 p-1">Personal Informations</h4>
                    </div>
                    <p>First Name: Taki</p>
                    <p>Last Name: Kauser</p>
                    <p>Age: 26</p>
                    <p>Phone: +880 1980 889660</p>
                    <p>Email: takikauser@yahoo.com</p>
                    <p>Nationality: Bangladeshi</p>
                    <p>Languages: Bengali, English</p>
                </div>
            </div>
        </div>
    );
};

export default About;