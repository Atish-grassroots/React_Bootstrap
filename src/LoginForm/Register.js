import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Register() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#F0F2F5' }}>
            <Row className="w-100">
                <Col md={6} className="d-none d-md-flex justify-content-center align-items-center">
                    <img src="./register.svg" alt="Sign Up Illustration" style={{ maxWidth: '100%', height: 'auto' }} />
                </Col>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <Card style={{ width: '400px', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <Card.Body>
                            <Card.Title className="text-center mb-4">Sign up for your account</Card.Title>
                            <Button variant="outline-primary" className="mb-3 w-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="bi bi-google" style={{ marginRight: '10px' }}></i>
                                Sign in with Google
                            </Button>
                            <Button variant="outline-secondary" className="mb-3 w-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="bi bi-github" style={{ marginRight: '10px' }}></i>
                                Sign in with GitHub
                            </Button>
                            <div className="text-center mb-3">or</div>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Sign up
                                </Button>
                            </Form>
                            <div className="mt-3 text-center">
                                Have an account? <a href="/login">Sign in</a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;