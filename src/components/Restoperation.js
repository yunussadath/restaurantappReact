import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restoperation({operate}) {
    console.log(operate);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
        {
             <><Button variant="warning" onClick={handleShow}>
                  Operating Hours
              </Button><Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                          <Modal.Title> Operating Hours</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{backgroundColor:'grey'}}>  <ListGroup>
      <ListGroup.Item variant="primary">Monday : {operate.Monday}</ListGroup.Item>
      <ListGroup.Item variant="secondary">Tuesday : {operate.Tuesday}</ListGroup.Item>
      <ListGroup.Item variant="success">Wednesday : {operate.Wednesday}</ListGroup.Item>
      <ListGroup.Item variant="danger">Thursday : {operate.Thursday}</ListGroup.Item>
      <ListGroup.Item variant="warning">Friday : {operate.Friday}</ListGroup.Item>
      <ListGroup.Item variant="info">Saturday : {operate.Saturday}</ListGroup.Item>
      <ListGroup.Item variant="light">Sunday : {operate.Sunday}</ListGroup.Item>
    </ListGroup></Modal.Body>

                  </Modal></>
        }
    </>
  )
}

export default Restoperation