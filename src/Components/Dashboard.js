import { Button, Col, Container, Row, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BASEURlAPI from "../BaseurlApi";

function Dashboard() {
  const [product, setproduct] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get(BASEURlAPI + "/user/product-data/");
      console.log(response.data.data);
      setproduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <section className="login_page">
      <Container style={{ backgroundColor: "#7dc9e2", borderRadius: "10px" }}>
        <div className="main_div">
          <div style={{ textAlign: "end" }}>
            <Button style={{ color: "white", textAlign: "center" }}>
              Log Out
            </Button>
          </div>
          <h3 style={{ color: "#000", textAlign: "center" }}>Products</h3>
          <Row className="justify-content-center mt-3">
            <Col lg={7} md={6}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {product?.map((item) => (
                    <tr key={item.id}>
                      <td>{item.product_name}</td>
                      <td>{item.product_price}</td>
                    </tr>
                  ))}
                </tbody>
                <div>
                  <a href="/summary">
                    <Button
                      className="mt-4"
                      style={{
                        backgroundColor: "orange",
                        padding: "10px 12px",
                        width: "200px",
                        fontWeight: "bold",
                      }}
                    >
                      summary{" "}
                    </Button>
                  </a>
                </div>
              </Table>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
export default Dashboard;
