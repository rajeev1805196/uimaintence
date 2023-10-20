
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Inputdata from "../Components/input"
import SelectData from "../Components/select"
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
export default function TextInformation() {


    return (
        <div className="App">
            <br />
            <Container>
                <Row>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Row >
                                <Col md={4}>
                                </Col>
                                <Col md={4}>
                                </Col>
                                <Col md={4}>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
                <br />
                <Row>
                    <Table responsive className="column-info">
                        <thead>
                            <tr>
                                <th>#</th>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <th key={index}>Table heading</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>2</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>3</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
            </Container >
        </div >
    );
}

