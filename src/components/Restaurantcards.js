import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Restaurantcards({restaurant}) {
    console.log(restaurant);
  return (
    <Link style={{textDecoration:"none",color:"white"}} to={`/Viewrestaurant/${restaurant.id}`}>
        <Card style={{borderRadius:10,backgroundColor:'grey'}} className='m-2' >
      <Card.Img variant="top" className='p-3' src={restaurant.photograph} />
      <Card.Body style={{marginLeft:40}}>
        <Card.Title >{restaurant.name}</Card.Title>
        <Card.Text>
          {restaurant.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Restaurantcards