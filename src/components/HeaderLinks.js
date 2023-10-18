import ListGroup from "react-bootstrap/ListGroup";
import { Stack } from "react-bootstrap";
import { MouseEvent } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HeaderLinks() {
  let items = ["Projects", "Education", "Feedback", "Bill", "Login"];

  const getMessage = () => {
    return items.length === 0 && <p>No items Found</p>;
  };

  const handleClick = (event) => console.log(event);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto float-right">
              {items.map((item, index) => (
                <Nav.Link
                  href= {"/".concat(item)}
                  className="p-2 "
                  key={item}
                  onClick={handleClick}
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderLinks;
