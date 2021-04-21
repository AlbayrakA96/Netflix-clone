import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import "../style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__icons">
          <h1 className="footer__container__h1">
            <a
              href="https://www.facebook.com/NetflixNederland"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.instagram.com/NetflixNL/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>

            <a
              href="https://twitter.com/NetflixNL"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UCLpLPhObMNbVBdSGf8XDIxQ"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillYoutube />
            </a>
          </h1>
        </div>
        <div className="footer__container__row">
          {/* column 1 */}
          <div className="col1">
            <ul className="list-unstyled">
              <li>Audio en ondertiteling</li>
              <li>Mediacenter</li>
              <li>Privacy</li>
              <li>Contact opnemen</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>Audioscriptie</li>
              <li>Relaties en investeerders</li>
              <li>Wettelijke bepalingen</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>Helpcentrum</li>
              <li>Vacatures</li>
              <li>Cookievoorkeuren</li>
            </ul>
          </div>
          {/* column 4 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>Cadeaubonnen</li>
              <li>Gebruiksvoorwaarden</li>
              <li>Bedrijfsgegevens</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
