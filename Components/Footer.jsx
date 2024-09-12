import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content columns">
        <div className="column">
          <p>
            Made with <span id="heart-pulse">❤️</span> by Liam Powell, powered by
            <a href="https://bulma.io"> Bulma</a> and <a href="https://nextjs.org">Next.js</a>.
          </p>
        </div>
        <div className="column has-text-right">
          <p>
            Made with the help of <Link href="/credits">these guys</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}