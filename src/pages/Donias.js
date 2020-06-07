import React, { Component } from 'react';
import './../App.css';
import { Button, Image, Container, Row, Col, Table, Nav} from 'react-bootstrap';


class Donias extends Component{
  constructor(){
    super();
    this.state = {

    };
    
  }

  componentDidMount() {

  }

    render(){
      return (
        <div>
          <Row>
            <Col xs={3}>
              <Button>
                Agregar Nuevo
              </Button>
            </Col>
            <Col xs={9}>
            <Table responsive variant='dark'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
            </Col>
          </Row>
        </div>
      );
  }
}

export default Donias;

