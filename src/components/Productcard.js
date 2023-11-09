import React from "react";
import './Restcard.css'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Productcard({prdtdata}) {
  return (
    <>
       <Link to={`/view-products/${prdtdata.id}`} style={{textDecoration:'none'}}>
        <Card className="first" style={{ width: '18rem'}}>
          <Card.Img variant="top"  src="https://www.figma.com/file/R0h6iYQqPYtMCQMLcRYily/E-Canteen-React-UI?type=design&node-id=537-161&mode=design&t=x1FUD71aeuWEto45-4" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>

      </Link>   
  </>
  );
}

export default Productcard;
