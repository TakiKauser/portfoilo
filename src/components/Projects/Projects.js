import React from 'react';
import { Container, Row } from 'react-bootstrap';
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
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {projects.map(project => (
                            <div id="container">

                                <div class="product-details">

                                    <h1>{project?.title}</h1>

                                    <p class="information">{project?.des}</p>

                                    {/* <div class="control">

                                        <button class="btn">
                                            <span class="price">$250</span>
                                            <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                            <span class="buy">Get now</span>
                                        </button>

                                    </div> */}
                                    <Link to={`/home/details/${project?.id}`}>
                                        <button className="px-3 btn btn-light" >
                                            PROJECT DETAILS
                                        </button>
                                    </Link>
                                </div>

                                <div class="product-image">

                                    <img src={project?.img} alt="webpage-ss" />


                                    <div class="info">
                                        {/* <h2> Description</h2>
                                        <ul>
                                            <li><strong>Height : </strong>5 Ft </li>
                                            <li><strong>Shade : </strong>Olive green</li>
                                            <li><strong>Decoration: </strong>balls and bells</li>
                                            <li><strong>Material: </strong>Eco-Friendly</li>
                                        </ul> */}
                                        <div class="mx-auto my-5">
                                            <a href={project?.live} target="_blank" rel="noreferrer">
                                                <button class="link-btn">
                                                    <span class="price">
                                                        Live
                                                    </span>
                                                    <span class="shopping-cart">
                                                        <i class="fa fa-link" aria-hidden="true">
                                                        </i>
                                                    </span>
                                                    <span class="buy">
                                                        Site
                                                    </span>
                                                </button>
                                            </a>
                                        </div>
                                        <div class="mx-auto my-5">
                                            <a href={project?.gitclient} target="_blank" rel="noreferrer">
                                                <button class="link-btn">
                                                    <span class="price">
                                                        Client
                                                    </span>
                                                    <span class="shopping-cart">
                                                        <i class="fa fa-code" aria-hidden="true">
                                                        </i>
                                                    </span>
                                                    <span class="buy">
                                                        Side
                                                    </span>
                                                </button>
                                            </a>
                                        </div>
                                        {
                                            project?.gitserver &&
                                            <div class="mx-auto my-5">
                                                <a href={project?.gitserver} target="_blank" rel="noreferrer">
                                                    <button class="link-btn">
                                                        <span class="price">
                                                            Server
                                                        </span>
                                                        <span class="shopping-cart">
                                                            <i class="fa fa-code" aria-hidden="true">
                                                            </i>
                                                        </span>
                                                        <span class="buy">
                                                            Side
                                                        </span>
                                                    </button>
                                                </a>
                                            </div>
                                        }


                                        {/* <Link to={`/home/details/${project.id}`}><button className="banner-button" >Details</button></Link> */}
                                        {/* </ul> */}
                                    </div>
                                </div>
                            </div>
                            // <div className="">
                            //     <ul>
                            //         <li className="booking-card h-100" style={{ backgroundImage: `url(${project?.img})`, height: "100%" }}>
                            //             <div className="book-container">
                            //                 <div className="content">
                            //                 </div>
                            //             </div>
                            //             <div className="informations-container">
                            //                 <h2 className="title">{project?.title}</h2>
                            //                 <p className="sub-title">{project?.tech}</p>

                            //                 <div className="more-information">
                            //                     <div className="info-and-date-container">
                            //                     </div>
                            //                     <a href={project.live} rel="noreferrer" target="_blank"><button className="m-2 banner-button" >Website Link</button></a>
                            //                     <Link to={`/home/details/${project.id}`}><button className="banner-button" >Details</button></Link>
                            //                 </div>

                            //             </div>
                            //         </li>

                            //     </ul>
                            // </div>

                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Projects;