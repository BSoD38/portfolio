import React from "react";
import Card from "../Components/Card";

export default function Home() {
    return (
        <main className="container is-fluid">
            <section className="section animate__animated animate__zoomIn hero has-text-centered">
                <div className="columns is-centered">
                    <figure className="image is-128x128">
                        <img src="/img/logo.png"/>
                    </figure>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Hi! Welcome to my portfolio.
                        </h1>
                        <h2 className="subtitle">
                            I'm Liam, a web and mobile developer.
                        </h2>
                    </div>
                </div>
            </section>
            <section className="section columns is-centered animate__animated animate__fadeInLeft animate__delay-1s">
                <Card title="Full-stack developer" image="/img/web-dev.svg">
                    Does stuff on webpages.
                </Card>
                <Card title="Mobile developer" image="/img/mobile-dev.svg">
                    Does stuff on phones.
                </Card>
            </section>
        </main>
    )
}
