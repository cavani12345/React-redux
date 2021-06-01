import React, { Component } from 'react';
import {baseUrl} from '../shared/baseUrl'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import {
    Link
  } from "react-router-dom";
  

 class MenuComponent extends Component {
     constructor(props) {
         super(props)
     }
     
    render() {
        const menu = this.props.dishes.map((dish)=>{
            return(
            <div className="col-12 col-sm-3 ml-5" key={dish.id}>
            <Card >
         <Link to={`/dish/${dish.id}`}> 
        <CardImg top width="50px" height="200px" src={ baseUrl + dish.image} alt="Card image cap" />
        </Link> 
        <CardBody>
          <CardTitle tag="h5">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <Button>ViewDetail</Button>
        </CardBody> 
      </Card>
      </div>
      
            )
        })
        return (
            <div className="container mt-5">
               <div className="row">
                   {
                 menu
                }
               </div>
                
            </div>
        )
    }
}

export default MenuComponent
