import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div> <Card className="text-center">
    <Card.Header>ABOUT</Card.Header>
    <Card.Body>
      <Card.Title>The Costa Coffee story began when the Costa brothers, Sergio and Bruno, decided to make a great cup of coffee a part of everyday life in London.
         They started a small roastery committed to crafting the finest quality coffee, eventually creating Costa’s signature blend, after blind-testing 112 variations.
         Our iconic Signature Blend is the perfect combination and balance of delicate Arabica and strong Robusta beans, precisely slow roasted for a minimum of 18 minutes to ensure the beans keep their hearty flavour, rich aroma, and smooth taste.</Card.Title>
      
    </Card.Body>
    <Card.Footer className="text-muted">We Have Branches All Over 38 Contries</Card.Footer>
  </Card></div>
  )
}

export default Footer