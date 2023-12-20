import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import BASEURlAPI from "../BaseurlApi";

export default function Loginpage() {
  const history = useHistory();
  const [userName, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        username: userName,
        password: password,
      });

      let config = {
        method: "post",
        url: BASEURlAPI + "/user/login-api/",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(response);
          history.push("/dashboard");
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (e) {}
  };

  return (
    <section className="login_page">
      <Container>
        <div className="main_div">
          <Row className="justify-content-center">
            <Col
              className="align-self-center  mb-3 mb-lg-0 order-2 "
              lg={{ span: 4, offset: 1, order: 1 }}
            >
              <div className="welcome">
                <h3>Login</h3>
                <h6>
                  If you don’t an account you can{" "}
                  <Link to="/signup">
                    <span>Register here !</span>
                  </Link>
                </h6>
                <div className="from_data">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <p style={{ color: "red" }}>{errorMessage}</p>
                      <Form.Control
                        type="name"
                        required
                        value={userName}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          handleChange(e);
                        }}
                        placeholder="Enter UserName"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        required
                        type="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          handleChange(e);
                        }}
                        placeholder="Password"
                      />
                    </Form.Group>
                    <h4 className="forget">Forgot Passwords?</h4>
                    <Button type="submit" className="sign">
                      Login
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
