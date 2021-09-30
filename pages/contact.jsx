import React from "react";

export default function Contact() {
    return(
        <main className="container is-fluid v-centered animate__animated animate__zoomIn">
            <section className="section">
                <div className="hero v-centered">
                    <div className="hero-body has-text-centered">
                        <h1 className="title">
                            By mail
                        </h1>
                        <h2 className="subtitle">
                            <a href="mailto:liam@tysil.io">liam@tysil.io</a>
                        </h2>
                    </div>
                </div>
                <div className="hero">
                    <div className="hero-body has-text-centered">
                        <h1 className="title">
                            Through LinkedIn
                        </h1>
                        <h2 className="subtitle">
                            <a href="https://www.linkedin.com/in/tysilio/" target="_blank">@tysilio</a>
                        </h2>
                    </div>
                </div>
            </section>
        </main>
    );
}
