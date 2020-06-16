import React from "react";
import Card from "../Components/Card";

export default function About() {
    return (
        <main className="container is-fluid">
            <section className="section columns is-centered animate__animated animate__fadeInLeft animate__delay-1s">
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
        </main>
    );
}