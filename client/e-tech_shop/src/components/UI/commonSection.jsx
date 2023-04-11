import React from 'react';
import { Container } from 'reactstrap';
import '../../styles/common-section.css'

const commonSection = ({title}) => {
  return <><section className='common__section'></section>
  <Container className="text-center">
    <h1>{title}</h1>
  </Container></>
}

export default commonSection