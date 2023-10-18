import ListGroup from "react-bootstrap/ListGroup";
import { Stack } from "react-bootstrap";
import { MouseEvent } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function FooterBar() {
  let items = ["Home", "Projects", "Education", "Feedback", "Bill", "Login"];

  const getMessage = () => {
    return items.length === 0 && <p>No items Found</p>;
  };

  const handleClick = (event) => console.log(event);

  const getHref = (item) => {
    let tempHref = "/".concat(item);
    if (tempHref === "/Home") {
      return "/";
    }
    return tempHref;
  };

  return (
    <>
      <div className="social-container">
        <h3>Socials</h3>
        <a
          href="https://github.com/WilliamChen14"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/williamchen14/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a
          href="https://twitter.com/WilliamChen1415"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/billchen314/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </>
  );
}

export default FooterBar;
