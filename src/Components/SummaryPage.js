import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BASEURlAPI from "../BaseurlApi";
import { useState } from "react";

const SummaryPage = () => {
  const [productSum, setProductSum] = useState("");

  const getProduct = async () => {
    try {
      const response = await axios.get(BASEURlAPI + "/user/product-data/");
      console.log(response);
      setProductSum(response.data.total_price);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <section className="login_page">
        <Container>
          <div className="main_div">
            <Row className="justify-content-center">
              <div
                style={{
                  backgroundColor: "#0000ffb0",
                  padding: "20px",
                  borderRadius: "10px",
                  height: "300px",
                  textAlign: "center",
                  paddingTop: "100px",
                }}
              >
                <Col lg={12} md={6}>
                  <div className="">
                    <Button
                      className="mr-3 mb-3"
                      style={{
                        backgroundColor: "white",
                        padding: "10px 12px",
                        width: "300px",
                        fontSize: "18px",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Total cost: {productSum}
                    </Button>
                  </div>
                </Col>
                <Col lg={12} md={6}>
                  <a href="/dashboard" style={{ marginTop: "10px" }}>
                    <Button
                      style={{
                        backgroundColor: "orange",
                        padding: "10px 12px",
                        width: "200px",
                        fontWeight: "bold",
                      }}
                    >
                      back{" "}
                    </Button>
                  </a>
                </Col>
              </div>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SummaryPage;
