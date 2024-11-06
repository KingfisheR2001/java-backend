import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function ({ selectedProduct, show, handleClose }) {
    if (show) {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct.pname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col><strong>Product Description</strong></Col>
                            <Col>
                                {selectedProduct.pdesc}
                            </Col>
                        </Row>
                        <Row>
                            <Col><strong>
                                Price
                            </strong>
                            </Col>
                            <Col>
                                {selectedProduct.price}
                            </Col>
                        </Row>
                        <Row>
                            <Col><strong>Quantity</strong></Col>
                            <Col>
                                {selectedProduct.quantity}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}