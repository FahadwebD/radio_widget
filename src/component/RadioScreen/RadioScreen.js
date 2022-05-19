import React from 'react';
import { Accordion, Card, ListGroup, useAccordionButton } from 'react-bootstrap';

import power from './../../images/switch.png';
import backArrow from './../../images/back-arrow.png'




function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <div className='d-flex justify-content-between justify-content-center align-items-center' style={{border:'none' , backgroundColor:"#2a2a35"}} onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

const RadioScreen = () => {
    return (
        <div className='container '>
            <Card className='shadow-lg' style={{ width: '18rem', backgroundColor:'#2a2a35' }}>
  <Card.Header style={{ backgroundColor:'#eeae61' , border:'none' , padding:'15px'}} className='rounded-top d-flex justify-content-between justify-content-center align-items-center' ><div><img style={{width:'20px' , height:'20px'}} src={backArrow} alt="" srcset="" /></div><p className='m-0' style={{fontWeight:'bolder' , color:'white'}}>STATION</p> <div><img style={{width:'20px' , height:'20px'}} src={power} alt="" srcset="" /></div></Card.Header>
  <ListGroup variant="flush" >
 
    <ListGroup.Item style={{backgroundColor:'#2a2a35' , color:'#a3acbe'}}> <Accordion defaultActiveKey="0">
      <Card style={{backgroundColor:'#2a2a35' , border:'none' , shadow:'none'}}>

      <Accordion.Collapse eventKey="0">
          <Card.Body style={{backgroundColor:"#2a2a35"}}>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
 
        <CustomToggle eventKey="0"><p>Click me!</p> <p>66</p></CustomToggle>
        
       
      </Card>
    </Accordion></ListGroup.Item>
    <ListGroup.Item style={{backgroundColor:'#2a2a35' , color:'#a3acbe'}}> <Accordion defaultActiveKey="0">
      <Card style={{backgroundColor:'#2a2a35' , border:'none' , shadow:'none'}}>

      <Accordion.Collapse eventKey="1">
          <Card.Body style={{backgroundColor:"#2a2a35"}}>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
 
        <CustomToggle eventKey="1"><p>Click me!</p> <p>66</p></CustomToggle>
        
       
      </Card>
    </Accordion></ListGroup.Item>
    <ListGroup.Item style={{backgroundColor:'#2a2a35' , color:'#a3acbe'}}> <Accordion defaultActiveKey="0">
      <Card style={{backgroundColor:'#2a2a35' , border:'none' , shadow:'none'}}>

      <Accordion.Collapse eventKey="2">
          <Card.Body style={{backgroundColor:"#2a2a35"}}>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
 
        <CustomToggle eventKey="2"><p>Click me!</p> <p>66</p></CustomToggle>
        
       
      </Card>
    </Accordion></ListGroup.Item>
  </ListGroup>
  <Card.Header style={{ backgroundColor:'#22222b' , border:'none' , padding:'15px' , marginTop:'-2px'}} className='rounded-top d-flex justify-content-between justify-content-center align-items-center' ><div><img style={{width:'20px' , height:'20px'}} src={backArrow} alt="" srcset="" /></div><p className='m-0' style={{fontWeight:'bolder' , color:'white'}}>STATION</p> <div><img style={{width:'20px' , height:'20px'}} src={power} alt="" srcset="" /></div></Card.Header>
</Card>



        </div>
    );
};

export default RadioScreen;