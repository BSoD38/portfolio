import React, {useState} from 'react';
import Link from "next/link";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/" className="navbar-item">

          <img src="/img/logo.png" alt="logo"/>

        </Link>

        <a role="button" className={`navbar-burger burger ${showNavbar ? "is-active" : ""}`} aria-label="menu"
           aria-expanded="false"
           data-target="navbar" onClick={() => setShowNavbar(!showNavbar)}>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>

      <div id="navbar" className={`navbar-menu ${showNavbar ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link href="/" className="navbar-item">

            Home

          </Link>

          <Link href="/about" className="navbar-item">

            About me

          </Link>

          <Link href="/projects" className="navbar-item">

            Projects

          </Link>

          <Link href="/contact" className="navbar-item">

            Contact

          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="https://www.linkedin.com/in/tysilio/" target="_blank">
                <img src="/img/linkedin.svg" className="logo-link" alt="LinkedIn" height="32" width="32"/>
              </a>
              <a href="https://github.com/BSoD38" target="_blank">
                <img src="/img/github.svg" className="logo-link" alt="GitHub" height="32" width="32"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}