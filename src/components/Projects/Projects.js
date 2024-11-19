import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TRPG from "../../Assets/Projects/TRPG.png";
import robofeeder from "../../Assets/Projects/robofeeder.jpg";
import goodTrip from "../../Assets/Projects/GoodTrip.png";
import TFT from "../../Assets/Projects/TFT.png";
import ImagePDF from "../../Assets/ImageProcessingReport.pdf";
import ImageProcessing from "../../Assets/Projects/ImageProcessing.png";
import RLPDF from "../../Assets/RL_Reacher.pdf";
import RLReacher from "../../Assets/Projects/RL_Reacher.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Personal <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on as a hobby.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robofeeder}
              isBlog={false}
              title="RoboFeeder"
              description="A fully autonomous robotic system to perform in-mouth feeding for people with disabilities through object detection, facial keypoint recognition, and motion planning using the Kinova Gen 3 robot arm with RGB-D camera and ROS. Behavioral cloning with stochastic permutation was used to optimize the feeding trajectory."
              demoLink="https://yuanlong-tony-cui.github.io/Blog-Homepage/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goodTrip}
              isBlog={false}
              title="GoodTrip"
              description="An iOS application designed using SwiftUI that allows user to retrieve real-time flight information. Powered by backends flight status API, the app allows user to search for current or future flights and customizing agenda."
              ghLink="https://github.com/h228zhou/GoodTrip/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TRPG}
              isBlog={false}
              title="Editor.io"
              description="A telegram-based TRPG game using telegram bots and ChatGPT API for Uncommon Hackathon. Generated randomized prompts through generative AI and streamed text descriptions through backend game server. Utilized data structures to store user prompts and outputs game options with FastAPI."
              ghLink="https://github.com/h228zhou/hackathon-team-giraff"
            />
          </Col>
        </Row>
      </Container>
      <Particle />
      <Container>
        <h1 className="project-heading">
          School <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few school projects that enhanced my learning.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TFT}
              isBlog={false}
              title="TFT Team Builder"
              description="A Teamfight Tactics team builder written in Python Flask API. I used webscraping tool (BS4) to scrape data from 'tactics.tool' and store them locally using SQLite3. This project was designed as the final project for the Intermediate Python course at the University of Chicago"
              ghLink="https://github.com/h228zhou/TFT-Team-Builder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImageProcessing}
              isBlog={false}
              title="Parallel Image Processing"
              description="An image processing system designed to run on a CPU, and optimized performance by implementing parallel designs. The system reads a series of images and applies specified effects to them using image convolution techniques."
              ghLink="https://github.com/h228zhou/Parallel-Image-Processing"
              demoLink={ImagePDF}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RLReacher}
              isBlog={false}
              title="Reinforcement Learning Robot Arm Controls"
              description="This project implements and compares D4PG and A3C, two popular deep reinforcement learning (RL) algorithms, for continuous control tasks under the Unity ML-Agents framework."
              demoLink={RLPDF}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
