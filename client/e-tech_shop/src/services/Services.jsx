import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import "./services.css"
import delivery from "../assets/delivery.svg"
import { motion } from 'framer-motion'

function Services() {
  return (
    <section className="services">
        <Container>
            <Row>
                <Col lg='3' md='4'>
                    <div className="service_item">
                        <span>
                            {/* <img style={{height:50,width:200}} src={delivery} alt="transporter" /> */}
                            <i class='ri-truck-line'></i>
                        </span>
                        <div>
                            <h3>Free Shipping</h3>
                            <p>just for ur peace free Shipping for you</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Services