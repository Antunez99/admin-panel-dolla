import React, { Component } from 'react';
import './App.css';
import {Image, Container, Row, Col, Nav} from 'react-bootstrap';
import Dashboard from './pages/Dashboard';
import Donias from './pages/Donias';
import Comidas from './pages/Comidas';
import Ordenes from './pages/Ordenes';
import Faqs from './pages/Faqs';
import Login from './Login';

class App extends Component{
  constructor(){
    super();
    this.state = {
      title: 'Dashboard',
      menu: <Dashboard />
    };
    
  }

  componentDidMount() {

  }

  screen(option){
      switch (option){
        case 'dashboard':
          this.setState({menu: <Dashboard />, title: 'Dashboard'})
          break;
        case 'donia':
          this.setState({menu: <Donias />, title: 'Administracion de doñas'})
          break;
        case 'faqs':
          this.setState({menu: <Faqs />, title: 'FAQ\'s activas'})
          break;
        case 'ordenes':
          this.setState({menu: <Ordenes />, title: 'Administracion de ordenes'})
          break;
        case 'comidas':
          this.setState({menu: <Comidas />, title: 'Administracion de comidas'})
          break;
      }
  }

    render(){
      return (
        <div className="App">
          <Container>
            <Row>
              <Col className='Menu' xs={3}>
                <Image src={require('./logo.png')} width='180' height='180' roundedCircle  />
                <h3>Panel de administracion </h3>
                <Nav justify variant="tabs" defaultActiveKey="dashboard" className="flex-column"
                onSelect={(selectedKey) => this.screen(selectedKey)}
                >
                  <Nav.Item>
                    <Nav.Link href="dashboard">Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="donia">Doñas admin</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="comidas">Comidas admin</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ordenes">Ordenes admin</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="faqs">FAQ'S</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col className='Gestion' xs={9}>
                <h1>{this.state.title}</h1>
                {this.state.menu}
              </Col>
            </Row>
          </Container>
        </div>
      );
  }
}

export default App;

