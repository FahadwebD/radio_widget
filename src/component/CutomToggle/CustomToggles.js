import React from 'react';
import minus from './../../images/minus.png'
import plus from './../../images/plus.png'
import ELO_Time from './../../images/ELO_Time_expanded_album_cover.jpg'
import { Accordion, Card, ListGroup, useAccordionButton } from 'react-bootstrap';


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

const CustomToggles = (m, index) => {
  return (
    <div>
       <ListGroup.Item style={{backgroundColor:'#2a2a35' , color:'#a3acbe'}}> <Accordion eventKey="0">
      <Card style={{backgroundColor:'#2a2a35' , border:'none' , shadow:'none'}}>

      <Accordion.Collapse eventKey="0">
      <Card.Body class="d-flex justify-content-center align-items-center" style={{backgroundColor:"#2a2a35"}}>


<img src={plus} alt="" srcset="" style={{width:'40px' , height:'40px'}}/> <img class="rounded-circle" src={ELO_Time} alt="" srcset="" style={{width:'150px' , height:'150px' , margin:'15px'}} /> <img src={minus} alt="" srcset="" style={{width:'40px' , height:'40px'}}/>

  </Card.Body>
        </Accordion.Collapse>
 
        <CustomToggle eventKey="0"><p>Click me!</p> <p>66</p></CustomToggle>
        
       
      </Card>
    </Accordion></ListGroup.Item>
   
    </div>
  );
};

export default CustomToggles;