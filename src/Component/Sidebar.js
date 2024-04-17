import React from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import './Sidebar.css';
import { FaTachometerAlt, FaCalendarAlt, FaClipboardList, FaBuilding, FaAddressBook, FaQuoteRight, FaTools } from 'react-icons/fa';

function Sidebar() {
  return (
    
    <Container fluid>
    <Row>
        
      <Col xs={2} id="sidebar-wrapper" className="full-height-sidebar">
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
             activeKey="/dashboard"
             onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <div className="sidebar-sticky"></div>
          <Nav.Item>
            <Nav.Link href="/sidebar"><FaTachometerAlt /> Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/"><FaCalendarAlt /> Calendar</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/scrumboard"><FaClipboardList /> Scrumboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/companies"><FaBuilding /> Companies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contacts"><FaAddressBook /> Contacts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/quotes"><FaQuoteRight /> Quotes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/administration"><FaTools /> Administration</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col xs={10} id="page-content-wrapper">
      </Col>
    </Row>
    </Container>
  );
}

export default Sidebar;