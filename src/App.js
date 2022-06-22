import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bgImg from "./imges/bg.png";
import { useState } from "react";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">마켓</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bgImg + ")" }}
      ></div>

      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      ></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
