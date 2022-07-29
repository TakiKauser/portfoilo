import React from 'react';
import { Button } from 'react-bootstrap';
import Typical from 'react-typical';
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Intro = () => {
    return (
        <>
            <section className='container my-5' id="intro">
                <div className='row d-flex align-items-center justify-content-center'>
                    <div className="col-md-6 col-sm-12">
                        <div className="header-content">
                            <h1 className="mt-5 mt-lg-0">I'm <span style={{ color: "yellow" }}>TAKI KAUSER</span></h1>
                            <p className="type-effect">
                                <Typical
                                    steps={[
                                        "REACT JS Developer",
                                        2000,
                                        "Problem Solver",
                                        2000,
                                        "Web Developer",
                                        2000,
                                    ]}
                                    loop={Infinity}
                                    wrapper="b"
                                />
                            </p>
                            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                                <Button variant="light" className=" bg-dark">
                                    <a className="text-white text-decoration-none" target='_blank' rel='noreferrer' href="https://drive.google.com/file/d/1TUPfpPUBE9jfXwg5RRkInOUXnVJ-sccg/view?usp=sharing">DOWNLOAD RESUME </a>
                                </Button>
                                <Button variant="light" className="bg-dark ms-sm-3 mt-3 mt-sm-0">
                                    <a className="text-white text-decoration-none" target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/taki-kauser/" >GET IN TOUCH</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div style={{ width: '90%' }} className="mx-auto mt-3">
                            <img className='img-fluid' src="https://i.ibb.co/JqT7Mm7/cv-removebg-preview.png" alt="taki-kauser" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Intro; 