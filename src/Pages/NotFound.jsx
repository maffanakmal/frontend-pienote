import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()

  return (
    <>
        <Container className='w-100 min-vh-100 d-flex align-items-center justify-content-center'>
          <Row className="d-flex align-items-center justify-content-center">
            <Col md='12' className=''>
              <h1 className='mb-2'>Oops!</h1>
              <p className='mb-2'>Sorry, unexpected error has occured</p>
              <p>{error.statusText || error.message}</p>
            </Col>
          </Row>
          </Container>
    </>
  )
}

export default Error