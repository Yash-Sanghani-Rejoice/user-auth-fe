import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import BASEURlAPI from "../BaseurlApi";

export default function Signpage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     history.push("/dashboard");
  //   }
  // }, [history]);

  const handleChange = (e) => {
    setErrorMessage("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        username: userName,
      });
      let config = {
        method: "post",
        url: BASEURlAPI + "/user/register-api/",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios
        .request(config)
        .then((response) => {
          history.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          // setErrorMessage(error.response.data.message);
        });
    } catch (e) {}
  };
  return (
    <section className="login_page">
      <Container>
        <div className="main_div">
          <Row className="align-items-center justify-content-center">
            <Col
              lg={{ span: 6, order: 1 }}
              className="align-self-center  mb-3 mb-lg-0 order-2"
            >
              <div className="welcome">
                <h3>Sign Up</h3>
                <h6>
                  Already have an account{" "}
                  <Link to="/">
                    <span>Login here !</span>
                  </Link>
                </h6>
                <div className="from_data">
                  <Form onSubmit={handleSubmit}>
                    <p style={{ color: "red" }}>{errorMessage}</p>
                    <Row>
                      <Col lg={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            required
                            type="name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            required
                            type="name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Control
                        required
                        type="name"
                        value={userName}
                        onChange={(e) => {
                          setUserName(e.target.value);
                          handleChange(e);
                        }}
                        placeholder="User name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        required
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          handleChange(e);
                        }}
                        placeholder="email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        required
                        type="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Button type="submit" className="sign">
                      SIGN IN
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
