import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; HDC. Created by Adam Wrobel 2022</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
