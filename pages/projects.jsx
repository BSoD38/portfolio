import React from "react";
import Hero from "../Components/Hero";
import IllustratedParagraph from "../Components/IllustratedParagraph";

export default function Projects() {
  return (
    <main className="container is-fluid">
      <div className="container animate__animated animate__fadeInUp">
        <section className="section">
          <Hero centered>
            <h1 className="title">
              Personal projects
            </h1>
            <h2 className="subtitle">
              Things I've done in my free time
            </h2>
          </Hero>
          <IllustratedParagraph image="/img/ttl_logo.png" textColumnClasses="is-three-fifths">
            <h1 className="content is-medium">
              PETBox Manager
            </h1>
            <p className="content is-medium">
              An online translation tool for the MegaMan Battle Network series. It attempts to be as useful as pleasing
              to look at by using having a UI/UX design. It is made for desktop use/large screens only.<br/>
              The tool can take in a whole folder of a game's encoded strings, and decodes them to an in-memory
              database of sorts. The text entries can be then previewed very faithfully to the game's own way of
              displaying textboxes. The tool provides other quality-of-life features such as searching
              by text and "mugshot", comparing the text database to another, etc. This is my most complete personal
              project so far. The source code is currently private, but will be open-sourced soon.
            </p>
          </IllustratedParagraph>
          <IllustratedParagraph image="/img/dungeon-lords.png" textColumnClasses="is-three-fifths">
            <h1 className="content is-medium">
              <a href="https://github.com/BSoD38/dlords-translator">
                Dungeon Lords Translator
              </a>
            </h1>
            <p className="content is-medium">
              An online translation tool for the PC game Dungeon Lords. It can read the game's native text files,
              decodes them from their proprietary format and displays them in an editable list of strings. Provides
              a few tools to ease with translation such as searching, search-and-replace, and converting to uppercase.
              It can then re-encode the strings into the game's proprietary format.
            </p>
          </IllustratedParagraph>
          <IllustratedParagraph image="/img/ut_fr.png" textColumnClasses="is-three-fifths">
            <h1 className="content is-medium">
              <a href="https://github.com/BSoD38/undertale-fr-patcher">
                UTFR Patcher
              </a>
            </h1>
            <p className="content is-medium">
              This is a tool I and a few friends made in Electron and vanilla JS for installing a French
              patch for the PC game UNDERTALE. It asks the user for the game's install location and
              calculates the checksum of the game's data file and automatically detects which patch to
              install, if compatible. The file patcher itself is from a tool called CPS by someone named
              Alcaro, which has been upgraded to use modern JS standards such as Promises.
            </p>
          </IllustratedParagraph>
          <IllustratedParagraph image="/img/errobot.png" textColumnClasses="is-three-fifths">
            <h1 className="content is-medium">
              Errobot
            </h1>
            <p className="content is-medium">
              A Discord bot that does fun stuff, like emojifying text, insulting a random user...<br/>
              It has a per-server settings system, and can display messages in French and English.
              It was made with Discord.io, and was being ported to Discord.js. It is now abandoned.<br/>
              The source code isn't available, as it contains authentication tokens (I know, it's very
              bad practice!)
            </p>
          </IllustratedParagraph>
        </section>
      </div>
      <div className="container animate__animated animate__fadeInUp">
        <section className="section">
          <Hero centered>
            <h1 className="title">
              School projects
            </h1>
            <h2 className="subtitle">
              These are projects I've done at the UGA.<br/>Most projects had a 4 day deadline.
            </h2>
          </Hero>
          <IllustratedParagraph image="/img/metromobilite.png" textColumnClasses="is-three-fifths"
                                imageHref="https://gitlab.com/ArcheoCodix/metromobiliteplus">
            <a href="https://gitlab.com/ArcheoCodix/metromobiliteplus" target="_blank">
              <h1 className="content is-medium">
                MétromobilitéPlus
              </h1>
            </a>
            <p className="content is-medium">
              An enhanced version of the TAG's then-called Metromobilite app. It had the objective of having a better
              UI and UX, with faster performance than the original app of that time. It interfaced with TAG's REST API.
              It was made in Ionic with Capacitor, with a team of 3 friends.
            </p>
          </IllustratedParagraph>
          <IllustratedParagraph image="/img/gccd.png" textColumnClasses="is-three-fifths"
                                imageHref="https://gitlab.com/rally-gccd">
            <a href="https://gitlab.com/rally-gccd" target="_blank">
              <h1 className="content is-medium">
                Rally GCCD
              </h1>
            </a>
            <p className="content is-medium">
              The only project that we had to complete in two weeks instead of one.<br/>
              A three-part project used for organising a race where participants had to flash QR Codes with
              a dedicated app to answer questions all across Grenoble :
            </p>
            <div className="content is-medium">
              <ul>
                <li>
                  A back-office used for creating questions, signing up teams, generating QR Codes,
                  placing checkpoints with a question on the map, starting the race,
                  and viewing the leaderboards. Made in Vue.js.
                </li>
                <li>
                  A Cloud Firestore and Cloud Functions API server for storing and handling all data
                  used by the back-office and app.
                </li>
                <li>
                  A Java native android app for the participants. They are presented with a menu
                  where they can check a GPS map with all checkpoints, a menu where they can flash a
                  QR Code to answer questions, check the leaderboard and download the rules.
                </li>
              </ul>
            </div>
          </IllustratedParagraph>
          <IllustratedParagraph image="/img/pictotala.png" textColumnClasses="is-three-fifths"
                                imageHref="https://gitlab.com/BSoD38/pictotala-android">
            <a href="https://gitlab.com/BSoD38/pictotala-android" target="_blank">
              <h1 className="content is-medium">
                Pictotala
              </h1>
            </a>
            <p className="content is-medium">
              A rudimentary Java native android chat app. You can create lobbies and join them, and chat
              with the participants. The server runs on Cloud Firestore.
            </p>
          </IllustratedParagraph>
        </section>
      </div>
    </main>
  );
}