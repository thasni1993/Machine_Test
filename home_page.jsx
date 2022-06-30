import React, { Component } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home_page.css";
import lang from "./images/lang.png";
import call from "./images/call.png";
import mail from "./images/mail.png";
import insta from "./images/insta.png";
import build from "./images/build.jpg";
import arrow from "./images/arrow.png";

export default class home_page extends Component {
  render() {
    return (
      <div className="main_div">
          <div className="head_div">
          

        <Navbar collapseOnSelect  expand="lg" style={{marginLeft:"15"}}>
            <Container>
            <Navbar.Brand href="#home" ></Navbar.Brand>
            <img src={lang} alt="" className="img"></img>
            <Nav.Link href="arabic.jsx" className="tag"><h6>Arabic</h6></Nav.Link>
            <Nav.Link href="english.jsx" className="tag" style={{ color: "darkblue" }}><h6>English</h6></Nav.Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <img src={call} className="img1" alt="w"></img>
              <Nav.Link href="tel:96558684888" className="tag2"><p>(965)58684888</p></Nav.Link>
              <img src={mail} className="img2" alt="q"></img>
              <Nav.Link href="mailto:support@we.com" className="tag2"><p>support@we.com</p></Nav.Link>
              <img src={insta} className="img3" alt="p"></img>
              <Nav.Link href="we.kv" className="tag2"><p>@we.kw</p></Nav.Link>      
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          </div>

          {/* Navbar Section */}

          <div className="header_div">
            <div className="head">
              <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                  <Navbar.Brand href="#home">
                    <h4>Logo</h4>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav" className="navs">
                    <Nav className="me-auto">
                      <Nav.Link
                        href="#home"
                        style={{ color: "darkblue", textDecoration: "underline" }}
                      >
                        Home
                      </Nav.Link>
                      <NavDropdown title="About Us" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Projects" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#statements" style={{ color: "white" }}>
                        Financial Statements
                      </Nav.Link>

                      <NavDropdown
                        title="Evaluate Your Property"
                        id="collasible-nav-dropdown"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#contact" style={{ color: "white" }}>
                        Contact Us
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>

            {/* PHOTO */}

            <div className="photo">
              <img src={build} alt="a" style={{ width: 1240, height: 535 }}></img>
            </div>

            {/* PARAGRAPH */}

            <div className="paragraph_div">
              <div className="first">
                <p>01</p>
                <br />
                <div
                  style={{
                    border: "3px solid white",
                    height: 30,
                    width: 30,
                    paddingBottom: 5,
                    paddingLeft: 3,
                  }}
                >
                  <p>02</p>
                </div>
                <br />
                <p>03</p>
                <br />
                <p>04</p>
              </div>
              <div className="second">
                <h1>
                  It's Probably for us
                  <br />
                  to Build Stylis
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. <br />
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, <br />
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book
                </p>
                <a href="#learn">
                  <p>
                    LEARN MORE
                    <img src={arrow} alt="i" />
                  </p>
                </a>
              </div>
            </div>
          </div>
     </div>
    );
  }
}
