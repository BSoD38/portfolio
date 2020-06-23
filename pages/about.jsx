import React from "react";
import Card from "../Components/Card";
import Link from "next/link";
import IllustratedParagraph from "../Components/IllustratedParagraph";
import Hero from "../Components/Hero";

export default function About() {
    return (
        <main className="container is-fluid">
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
                        I mainly use Symfony 2, 3 and 4 as back-end techs, and I work with React and Vue.js as front-end
                        techs. I have also used Angular through Ionic, and dabbled with Node.js and
                        Electron when working on small personal projects.
                    </p>
                    <p className="content is-large has-text-justified">
                        Check out the overview of my skills and experience below.
                    </p>
                </IllustratedParagraph>
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
                    <IllustratedParagraph image="/img/prospectiva.png" textColumnClasses="is-half">
                        <div>
                            <h1 className="content is-medium">Prospectiva<br/>2018-2020</h1>
                            <p className="content is-medium">
                                Company specialised in custom-tailored applications for temporary work agencies.
                                These applications interface with software used by the agencies through a
                                SOAP/RESTful API service.
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
                            </p>
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
                    <Card title="Full-stack developer" image="/img/web-dev.svg">
                        <div className="my-2">
                            <img src="/img/symfony.svg" alt="Symfony" className="card-element-image"/>
                            <h6>
                                Symfony 2/3/4
                            </h6>
                        </div>
                        <div className="my-2">
                            <img src="/img/react.svg" alt="React" className="card-element-image"/>
                            <h6>
                                React
                            </h6>
                        </div>
                        <div className="my-2">
                            <img src="/img/vue-js.svg" alt="Vue.js" className="card-element-image"/>
                            <h6>
                                Vue.js
                            </h6>
                        </div>
                    </Card>
                    <Card title="Mobile developer" image="/img/mobile-dev.svg">
                        <div className="my-2">
                            <img src="/img/react.svg" alt="React-Native" className="card-element-image"/>
                            <h6>
                                React-Native
                            </h6>
                        </div>
                        <div className="my-2">
                            <img src="/img/android.png" alt="Symfony" className="card-element-image"/>
                            <h6>
                                Native Android (Java)
                            </h6>
                        </div>
                        <div className="my-2">
                            <img src="/img/ionic.svg" alt="Ionic" className="card-element-image"/>
                            <h6>
                                Ionic
                            </h6>
                        </div>
                    </Card>
                </section>
                <div className="has-text-centered">
                    <Link href="/projects">
                        <a className="button is-primary is-outlined">
                            Check out my projects!
                        </a>
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
                        <div className="my-2">
                            <img src="/img/video-game.svg" alt="Video games" className="card-element-image"/>
                            <h6>
                                I play video games!
                            </h6>
                        </div>
                        <div className="my-2">
                            <img src="/img/vr.svg" alt="Virtual reality" className="card-element-image"/>
                            <h6>
                                Virtual reality
                            </h6>
                        </div>
                        <div className="my-2">
                            <img src="/img/unrealengine.svg" alt="React" className="card-element-image"/>
                            <h6>
                                Game development
                            </h6>
                        </div>
                    </Card>
                    <Card title="Music" image="/img/music.svg">
                        <div className="my-2">
                            <img src="/img/ocarina.svg" alt="Ocarina" className="card-element-image"/>
                            <h6>
                                Ocarina
                            </h6>
                        </div>
                        <div className="my-2">
                            <img src="/img/headset.svg" alt="Music listening" className="card-element-image"/>
                            <h6>
                                Music listening
                            </h6>
                        </div>
                    </Card>
                    <Card title="Art" image="/img/art.svg">
                        <div className="my-2 v-centered">
                            <img src="/img/3d.svg" alt="3D" className="card-element-image"/>
                            <h6>
                                3D modeling/posing
                            </h6>
                        </div>
                    </Card>
                </section>
            </div>
            <section className="section is-centered animate__animated animate__fadeInUp">
                <Hero centered>
                    <div className="hero-body has-text-centered">
                        <h1 className="title">
                            Want to have a chat?
                        </h1>
                    </div>
                    <Link href="/contact">
                        <a className="button is-primary is-outlined">
                            Contact me
                        </a>
                    </Link>
                </Hero>
            </section>
        </main>
    );
}