import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import poster1 from '../assets/Projects/africuisines.jpg';
import poster2 from '../assets/Projects/defi0.jpg';
import poster3 from '../assets/Projects/thank you.png';
import poster4 from '../assets/Projects/kereita 1.jpg';
import poster5 from '../assets/Projects/might1.jpg';
import poster6 from '../assets/Projects/det11.jpg';
import logo1 from '../assets/logos/kerry.jpg';
import logo2 from '../assets/logos/lungu stitchery logo1.jpg';
import logo3 from '../assets/logos/spenza 2.jpg';
import logo4 from '../assets/logos/t2.png';
import logo5 from '../assets/logos/the kraft l3.jpg';
import logo6 from '../assets/logos/wcc3.jpg';
import cover1 from '../assets/magazine/IMG-20231009-WA0018.jpg';
import cover2 from '../assets/magazine/covver2.jpg';
import cover3 from '../assets/magazine/cover3.png';
import cover4 from '../assets/magazine/cover4.png';
import cover5 from '../assets/magazine/cover5.png';

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Posters",
      description: "Design & Development",
      imgUrl: poster1,
    },
    {
      title: "Posters",
      description: "Design & Development",
      imgUrl: poster2,
    },
    {
      title: "Posters",
      description: "Design & Development",
      imgUrl: poster3,
    },
    {
      title: "Posters",
      description: "Design & Development",
      imgUrl: poster4,
    },
    {
      title: "Posters",
      description: "Design & Development",
      imgUrl: poster5,
    },
    {
      title: "Posters",
      description: "Design & Development",
      imgUrl: poster6,
    },
  ];

  const projects1 = [
    {
      title: "Logo Design",
      description: "Design & Development",
      imgUrl: logo1,
    },
    {
      title: "Logo Design",
      description: "Design & Development",
      imgUrl: logo2,
    },
    {
      title: "Logo Design",
      description: "Design & Development",
      imgUrl: logo3,
    },
    {
      title: "Logo Design",
      description: "Design & Development",
      imgUrl: logo4,
    },
    {
      title: "Logo Design",
      description: "Design & Development",
      imgUrl: logo5,
    },
    {
      title: "Logo Design",
      description: "Design & Development",
      imgUrl: logo6,
    },
  ];

  const magazine = [
    {
      title: "Magazine cover",
      description: "Design & Development",
      imgUrl: cover1,
    },
    {
      title: "Magazine cover",
      description: "Design & Development",
      imgUrl: cover2,
    },
    {
      title: "Magazine cover",
      description: "Design & Development",
      imgUrl: cover3,
    },
    {
      title: "Magazine cover",
      description: "Design & Development",
      imgUrl: cover4,
    },
    {
      title: "Magazine cover",
      description: "Design & Development",
      imgUrl: cover5,
    },
  ]

  return (
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
  )
}
