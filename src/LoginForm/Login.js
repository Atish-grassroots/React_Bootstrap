import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#F0F2F5' }}>
            <Row className="w-100">
                <Col md={6} className="d-none d-md-flex justify-content-center align-items-center">
                    <img src="./login.svg" alt="Sign In Illustration" style={{ maxWidth: '100%', height: 'auto' }} />
                </Col>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <Card style={{ width: '400px', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <Card.Body>
                            <Card.Title className="text-center mb-4">Sign in to your account</Card.Title>
                            <Button variant="outline-primary" className="mb-3 w-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="bi bi-google" style={{ marginRight: '10px' }}></i>
                                Sign in with Google
                            </Button>
                            <Button variant="outline-secondary" className="mb-3 w-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="bi bi-github" style={{ marginRight: '10px' }}></i>
                                Sign in with GitHub
                            </Button>
                           
                            <div className="text-center my-3">or</div>
                            
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Sign in
                                </Button>
                            </Form>
                            <div className="mt-3 text-center">
                                <a href="#forgot-password">Forgot password?</a>
                            </div>
                            <div className="mt-3 text-center">
                                Don't have an account? <Link to="/register">Sign up</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;