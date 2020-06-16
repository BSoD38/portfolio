import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="container is-fluid v-centered">
            <section className="section animate__animated animate__zoomIn hero has-text-centered">
                <figure className="image is-128x128 centered">
                    <img src="/img/logo.png" alt="logo"/>
                </figure>
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
                <div>
                    <Link href="/about">
                        <a className="button is-primary is-outlined">
                            Learn more
                        </a>
                    </Link>
                </div>
            </section>
        </main>
    )
}
