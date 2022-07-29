import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import "./Projects.css";
const Projects = () => {
    const projects = [
        {
            id: "project1",
            title: 'kb-Bikes (Bike Shop)',
            des: 'Responsive website with firebase authentication and different type dashboard functionality for admin and users. Admin can manage all orders, make admin, add new products and manage any products.Authorized customers can leave feedback, buy any product, and manage their ordered products.',
            tech: 'HTML5, CSS3, React Bootstrap, React.js, Node.js, Express.js, MongoDB, Firebase.',
            img: "https://i.ibb.co/M6spYNk/ash-moment.png",
            live: "https://kb-bikes.web.app/",
            gitclient: "https://github.com/TakiKauser/kb-Bikes",
            gitserver: "https://github.com/TakiKauser/kb-Bikes-server",
        },
        {
            id: "project2",
            title: 'kb-Tourism (Tourism Website)',
            des: 'Developed a tour booking website with some tour packages at the best price.An authorized user can be booked a tour package and also cancel a package.There is a dashboard where the admin can cancel a booking and change a booking status.',
            tech: 'React.js, Node.js, Express.js, MongoDB, Firebase, HTML5, CSS3, React Bootstrap.',
            img: "https://i.ibb.co/CM7dbF5/ash-travel.png",
            live: "https://kb-tourism.web.app/",
            gitclient: "https://github.com/TakiKauser/kb-Tourism",
            gitserver: "https://github.com/TakiKauser/-kb-Tourism-server",
        },
        {
            id: "project3",
            title: 'Ash Health Care -Hospital Website',
            des: 'From this website, users can get many types of treatment for their health issues.Authorized users can see service details.Users can Login or Sign up with email and password or google.',
            tech: 'Firebase, React.js, React Bootstrap, HTML5, CSS3.',
            img: "https://i.ibb.co/vv0XCBc/ash-health-care.png",
            live: "https://e-care-7605e.web.app/",
            gitclient: "https://github.com/TakiKauser/e-care",
        }
    ]
    return (
        <>
            <div id="my-project" className="project-container">
                <Container>
                    <h2 className="py-5 text-center">My Recent Projects</h2>
                    <Row xs={1} md={1} lg={2} className="g-4">
                        {projects.map((project, index) => (
                            <Col key={index} id="" className="">
                                <div id="container" className="d-flex flex-column flex-lg-row">
                                    <div className="product-details">
                                        <h1>{project?.title}</h1>
                                        <p className="information">{project?.des}</p>
                                        <Link to={`/home/details/${project?.id}`}>
                                            <button className="px-3 btn btn-light" >
                                                PROJECT DETAILS
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="product-image">
                                        <img src={project?.img} alt="webpage-ss" className="" />
                                        <div className="info">
                                            <div className="mx-auto my-5">
                                                <a href={project?.live} target="_blank" rel="noreferrer">
                                                    <button className="link-btn">
                                                        <span className="price">
                                                            Live
                                                        </span>
                                                        <span className="shopping-cart">
                                                            <i className="fa fa-link" aria-hidden="true">
                                                            </i>
                                                        </span>
                                                        <span className="buy">
                                                            Site
                                                        </span>
                                                    </button>
                                                </a>
                                            </div>
                                            <div className="mx-auto my-5">
                                                <a href={project?.gitclient} target="_blank" rel="noreferrer">
                                                    <button className="link-btn">
                                                        <span className="price">
                                                            Client
                                                        </span>
                                                        <span className="shopping-cart">
                                                            <i className="fa fa-code" aria-hidden="true">
                                                            </i>
                                                        </span>
                                                        <span className="buy">
                                                            Side
                                                        </span>
                                                    </button>
                                                </a>
                                            </div>
                                            {
                                                project?.gitserver &&
                                                <div className="mx-auto my-5">
                                                    <a href={project?.gitserver} target="_blank" rel="noreferrer">
                                                        <button className="link-btn">
                                                            <span className="price">
                                                                Server
                                                            </span>
                                                            <span className="shopping-cart">
                                                                <i className="fa fa-code" aria-hidden="true">
                                                                </i>
                                                            </span>
                                                            <span className="buy">
                                                                Side
                                                            </span>
                                                        </button>
                                                    </a>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Projects;