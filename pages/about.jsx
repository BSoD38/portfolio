import React from "react";
import Card from "../Components/Card";
import Link from "next/link";
import IllustratedParagraph from "../Components/IllustratedParagraph";
import Hero from "../Components/Hero";

export default function About() {
  return (
    <main className="container is-fluid">
      <div className="animate__animated animate__fadeInUp">
        <Hero centered>
          <h1 className="title">
            About me
          </h1>
          <h2 className="subtitle">
            So... Who am I, exactly?
          </h2>
        </Hero>
        <div className="container">
          <IllustratedParagraph image="/img/me.jpg" imageClass="round">
            <p className="content is-large has-text-justified">
              Hello there! I'm Liam, I'm a full-stack and mobile developer based in Grenoble, France.
              I have varied experience in various front-end and back-end stacks, such as React, Angular, Node.JS and
              Symfony.
              I have also used Electron when working on small personal projects.
            </p>
            <p className="content is-large has-text-justified">
              I'm adaptable and I like dabbling in new things.
            </p>
            <p className="content is-large has-text-justified">
              Check out the overview of my skills and experience below.
            </p>
          </IllustratedParagraph>
        </div>
      </div>

      <div className="animate__animated animate__fadeInUp">
        <Hero centered>
          <h1 className="title">
            Work experience
          </h1>
          <h2 className="subtitle">
            Places I've worked in
          </h2>
        </Hero>
        <section className="section">
          <IllustratedParagraph image="/img/msl.svg" textColumnClasses="is-half">
            <div className="content is-medium">
              <h1 className="content is-medium">Moonshot Labs<br/>2020-Current</h1>
              <p className="content is-medium">
                A startup incubator that also provides software engineering services to create specialized apps
                from scratch. Has a specialty for WEB2 and WEB3 apps, but also produces mobile apps.
                Most apps extensively use AWS Cloud services.
              </p>
              <ul>
                <li>
                  Full stack developer
                </li>
                <li>
                  Mobile developer
                </li>
              </ul>
            </div>
          </IllustratedParagraph>
          <IllustratedParagraph image="/img/prospectiva.png" textColumnClasses="is-half">
            <div className="content is-medium">
              <h1 className="content is-medium">Prospectiva<br/>2018-2020</h1>
              <p className="content is-medium">
                Company specialised in custom-tailored applications for temporary work agencies.
                These applications interface with software used by the agencies through a
                SOAP or RESTful API service.
              </p>
              <ul>
                <li>
                  Web developer
                </li>
                <li>
                  Mobile developer
                </li>
                <li>
                  Legacy web app maintainer
                </li>
                <li>
                  SOAP/RESTful API interfacing
                </li>
              </ul>
            </div>
          </IllustratedParagraph>
        </section>

        <Hero centered>
          <h1 className="title">
            Skills
          </h1>
          <h2 className="subtitle">
            What can I do?
          </h2>
        </Hero>
        <section className="section columns is-centered">
          <Card title="Front-end development" image="/img/web-dev.svg">
            <div className="my-5">
              <img src="/img/angular.svg" alt="Angular" className="card-element-image"/>
              <h6>
                Angular
              </h6>
            </div>
            <div className="my-5">
              <img src="/img/react.svg" alt="React" className="card-element-image"/>
              <h6>
                React
              </h6>
            </div>
          </Card>
          <Card title="Back-end development" image="/img/cloud-server.png">
            <div className="my-5">
              <img src="/img/node.svg" alt="Node.js" className="card-element-image"/>
              <h6>
                Node.js
              </h6>
            </div>
            <div className="my-5">
              <img src="/img/aws.svg" alt="AWS Cloud Environments" className="card-element-image"/>
              <h6>
                AWS Cloud Environments
              </h6>
            </div>
            <div className="my-5">
              <img src="/img/symfony.svg" alt="Symfony" className="card-element-image"/>
              <h6>
                Symfony 2/3/4
              </h6>
            </div>
          </Card>
          <Card title="Mobile development" image="/img/mobile-dev.svg">
            <div className="my-5">
              <img src="/img/react.svg" alt="React-Native" className="card-element-image"/>
              <h6>
                React-Native
              </h6>
            </div>
            <div className="my-5">
              <img src="/img/flutter.svg" alt="Flutter" className="card-element-image"/>
              <h6>
                Flutter
              </h6>
            </div>
          </Card>
        </section>
        <div className="has-text-centered">
          <Link href="/projects" className="button is-primary is-outlined">
            Check out my projects!
          </Link>
        </div>
      </div>

      <div className="animate__animated animate__fadeInUp">
        <Hero centered>
          <h1 className="title">
            Other stuff
          </h1>
          <h2 className="subtitle">
            I'm human, after all...
          </h2>
        </Hero>
        <section className="section columns is-centered">
          <Card title="Gaming" image="/img/computer-game.svg">
            <div className="my-5">
              <img src="/img/video-game.svg" alt="Video games" className="card-element-image"/>
              <h6>
                Playing video games!
              </h6>
            </div>
            <div className="my-5">
              <img src="/img/mods.png" alt="Game mods" className="card-element-image"/>
              <h6>
                Game modding
              </h6>
            </div>
            <div className="my-5">
              <img src="/img/unrealengine.svg" alt="Game dev" className="card-element-image"/>
              <h6>
                Game development
              </h6>
            </div>
          </Card>
          <Card title="Art" image="/img/art.svg">
            <div className="my-5 v-centered">
              <img src="/img/3d.svg" alt="3D" className="card-element-image"/>
              <h6>
                3D modeling/posing
              </h6>
            </div>
            <div className="my-5 v-centered">
              <img src="/img/video-editor.png" alt="Video editor" className="card-element-image"/>
              <h6>
                Video editing
              </h6>
            </div>
          </Card>
        </section>
        <div className="has-text-centered">
          <Link
            href="/cv_liam_powell.pdf"
            className="button is-primary is-outlined"
            target="_blank">
            Download my CV (in french)
          </Link>
        </div>
      </div>
      <section className="section is-centered animate__animated animate__fadeInUp">
        <Hero centered>
          <div className="hero-body has-text-centered">
            <h1 className="title">
              Want to have a chat?
            </h1>
          </div>
          <Link href="/contact" className="button is-primary is-outlined">
            Contact me
          </Link>
        </Hero>
      </section>
    </main>
  );
}