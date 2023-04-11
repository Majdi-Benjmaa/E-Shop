import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Container,Row,Col} from "reactstrap"
import "../styles/home.css"
import phones from "../assets/phones.jpg"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/Services'


function Home() {

  const year =new Date().getFullYear()
  return (
    <Helmet title={'home'}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">
                  Trending product in {year}
                </p>
                <h2>Make your brave choice</h2>
                <p>At our store, we offer something that sets us apart from the rest - exceptional service and value.  we offer competitive pricing and exclusive deals that you won't find anywhere else, giving you the best value for your money. On top of that, our after-sales support is unparalleled, with comprehensive warranties, repair services, and regular software updates to keep your device running smoothly. So, why settle for anything less? Choose our <big>HMMT</big> for all your phone needs, and you won't be disappointed.</p>
                <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to="shop">Shop Now</Link></motion.button>
              </div>
            </Col>

            <Col lg='6' md="6">
              <div className="hero_img">
                <img src={phones} alt="phones" />
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <Services/>
    </Helmet>
  )
}

export default Home