import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { propTypes } from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/Row';
import CardMy from "./Card.jsx"
import belgrade from "./Photos/belgrade.jpeg"
import positano from "./Photos/positano.jpeg"
import polska from "./Photos/polskaskakavitsa.jpeg"
import React from 'react';

const belgrade1 = React.lazy(()=> import("./Photos/belgrade.jpeg"))
console.log(belgrade1)


export default function Posts(props) {
  return (
    <div id="posts">
      <h1>My trips: </h1>
      <Row className="row" xs={1}  >
        
          {/* Prerendered cards */}


        <Col sm>
          <Card  className="cardCustom" >
            <Card.Img  className="photo-cards" src={belgrade} loading="lazy" />
            <Card.Body>
              <Card.Title className="country-card">Country: Serbia</Card.Title>
              <Card.Text className="city-card">City: Belgrade</Card.Text>
              {/* <Button onClick={handleClick} variant="secondary">Del</Button> */}
            </Card.Body>
          </Card>
        </Col>


        <Col sm>
          <Card className="cardCustom" >
            <Card.Img className="photo-cards" src={polska} loading="lazy"/>
             <Card.Body>
              <Card.Title className="country-card">Country: Bulgaria</Card.Title>
              <Card.Text className="city-card">City: Polska Skakavitsa</Card.Text>
              {/* <Button onClick={handleClick} variant="secondary">Del</Button> */}
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className="cardCustom" >
            <Card.Img className="photo-cards" src={positano} loading="lazy"/>
             <Card.Body>
              <Card.Title className="country-card">Country: Italy</Card.Title>
              <Card.Text className="city-card">City:Positano</Card.Text>
              {/* <Button onClick={handleClick} variant="secondary">Del</Button> */}
            </Card.Body>
        </Card>

        
          



          {/* Generate individual cards for each item from the "notes" array */}
          {/* REMINDER ::: add COL to each card generated */}
          {props.notes.map((element, index) => {
             return <CardMy 
             key={index} 
             id={index} 
             title={element.title} 
             content={element.content}
             />
          })}

        </Col>
     </Row>   
     
    </div>
  );
}
