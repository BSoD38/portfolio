import 'bulma';
import 'bulmaswatch/lux/bulmaswatch.scss';
import 'animate.css';
import '../css/style.scss';

import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";

export default function PortfolioApp({ Component, pageProps }) {
    return (
        <div className="app-container">
            <Head>
                <title>Liam - Web and Mobile Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
        </div>
    );
}