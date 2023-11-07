import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import poster1 from '../assets/Projects/africuisines.jpg';
import poster2 from '../assets/Logos/talanta poster.jpg';
import poster3 from '../assets/Projects/thank you.png';
import poster4 from '../assets/Projects/kereita 1.jpg';
import poster5 from '../assets/Projects/might1.jpg';
import poster6 from '../assets/Projects/det11.jpg';
import poster7 from '../assets/Posters/card4.png';
import poster8 from '../assets/Posters/cover pg.jpg';
import poster9 from '../assets/Posters/DIALOGUE 2.jpg';
import poster10 from '../assets/Posters/dialogue3 (2).jpg';
import poster11 from '../assets/Posters/Ecard 2.jpg';
import poster12 from '../assets/Posters/f2.jpg';
import poster13 from '../assets/Posters/job ad2.jpg';
import poster14 from '../assets/Posters/job advert.jpg';
import poster15 from '../assets/Posters/KIDS PROGRAM2.jpg';
import poster16 from '../assets/Posters/lemon 1.jpg';
import poster17 from '../assets/Posters/lymas menu.jpg';
import poster18 from '../assets/Posters/menu doodle.jpg';
import poster19 from '../assets/Posters/networking meet-up.jpg';
import poster20 from '../assets/Posters/rott1.jpg';
import poster21 from '../assets/Posters/sarakasi.jpg';
import poster22 from '../assets/Posters/sarakasi2.jpg';
import poster23 from '../assets/Posters/sk video end.jpg';
import poster24 from '../assets/Posters/trip.png';
import poster25 from '../assets/Posters/Voting poster.jpg';
import poster26 from '../assets/Posters/WCC POSTER1.jpg';
import poster27 from '../assets/Posters/wed4.jpg';
import poster28 from '../assets/Posters/sarakasi-pull.jpg';
import poster29 from '../assets/Posters/talanta pull up banner.jpg';
import logo1 from '../assets/logos/kerry.jpg';
import logo2 from '../assets/logos/lungu stitchery logo1.jpg';
import logo3 from '../assets/logos/spenza 2.jpg';
import logo4 from '../assets/logos/t2.png';
import logo5 from '../assets/logos/the kraft l3.jpg';
import logo6 from '../assets/logos/wcc3.jpg';
import logo7 from '../assets/Logos/BATENG web1.png';
import logo8 from '../assets/Logos/KINEX3.jpg';
import logo9 from '../assets/Logos/ND.jpg';
import logo10 from '../assets/Logos/SND1 (2).jpg';
import logo11 from '../assets/Logos/SND3.jpg';
import logo12 from '../assets/Logos/Spenza 1.jpg';
import logo13 from '../assets/Logos/bateng1.jpg';
import logo14 from '../assets/Logos/ekithroo.jpg';
import logo15 from '../assets/Logos/ekithroo2.jpg';
import logo16 from '../assets/Logos/ekithrooF32.jpg';
import logo17 from '../assets/Logos/logo proj 3.jpg';
import logo18 from '../assets/Logos/logo project 2.1.jpg';
import logo19 from '../assets/Logos/mp logo2.png';
import logo20 from '../assets/Logos/mp3.jpg';
import logo21 from '../assets/Logos/netic 1w.jpg';
import logo22 from '../assets/Logos/netic 2.jpg';
import logo23 from '../assets/Logos/the kraft logo 3.jpg';
import logo24 from '../assets/Logos/S1.jpg';
import logo25 from '../assets/Logos/midnight amar .jpg';
import logo26 from '../assets/Logos/NT logo11.jpg';
import logo27 from '../assets/Logos/S2.jpg';
import logo28 from '../assets/Logos/spenza 2 (2).jpg';
import logo29 from '../assets/Logos/t1.png';
import logo30 from '../assets/Logos/t3.png';
import logo31 from '../assets/Logos/talanta 2.15.jpg';
import cover1 from '../assets/magazine/IMG-20231009-WA0018.jpg';
import cover3 from '../assets/logos/Screenshot (91).png';
import cover4 from '../assets/logos/Screenshot (92).png';
import cover5 from '../assets/logos/Screenshot (93).png';
import cover6 from '../assets/Logos/lux poster.jpg';
import cover7 from '../assets/Logos/lux poster2.jpg';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { motion } from "framer-motion";

export const Projects = () => {

  const projects = [
    {
      title: "Posters",
      description: "",
      imgUrl: poster1,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster16,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster3,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster4,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster5,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster6,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster26,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster8,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster9,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster10,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster25,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster12,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster13,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster14,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster15,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster2,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster17,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster18,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster19,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster20,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster24,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster22,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster7,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster21,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster11,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster23,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster27,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster28,
    },
    {
      title: "Posters",
      description: "",
      imgUrl: poster29,
    },
  ];

  const projects1 = [
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo1,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo2,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo3,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo4,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo5,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo6,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo7,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo8,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo9,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo10,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo11,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo12,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo13,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo14,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo15,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo16,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo17,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo18,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo19,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo20,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo21,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo22,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo23,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo24,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo25,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo26,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo27,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo28,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo29,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo30,
    },
    {
      title: "Logo Design",
      description: "",
      imgUrl: logo31,
    },
  ];

  const magazine = [
    {
      title: "Magazine cover",
      description: "",
      imgUrl: cover4,
    },
    {
      title: "Magazine cover",
      description: "",
      imgUrl: cover5,
    },
    {
      title: "Magazine cover",
      description: "",
      imgUrl: cover3,
    },
    {
      title: "Magazine cover",
      description: "",
      imgUrl: cover6,
    },
    {
      title: "Magazine cover",
      description: "",
      imgUrl: cover7,
    },
    {
      title: "Magazine cover",
      description: "",
      imgUrl: cover1,
    },
  ]

  return (
    <motion.div
      initial= {{opacity: 0}}
      animate= {{opacity: 1}}
      exit= {{opacity: 0}}
      transition= {{duration: 1}}
    >
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Posters</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Logos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Magazine</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects1.map((projects1, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...projects1}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            magazine.map((magazine, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...magazine}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    </motion.div>
  )
}




