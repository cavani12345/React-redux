import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import CommentButton from './CommentButton';
import LoadingComponent from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl'

function DishDetailComponent(props) {
    
    if(props.dishesloading){
        return <LoadingComponent />
    }
    else if(props.errmessage){
        return (
            <div className="container">
                    <div className="row">
                        <h3>{props.errmessage}</h3>
                    </div>
                </div>
        )

    }
    else{
        return (
            <div className="container mt-5">
                <div className="row">
                <div className="col-12 col-sm-4 ml-5">
                    <span> Below is the detail of {props.dish.name} </span>
                <Card > 
            <CardImg top width="50px" height="200px" src={baseUrl + props.dish.image}alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{props.dish.name}</CardTitle>
              <CardText>{props.dish.description}</CardText>
            </CardBody> 
          </Card>
          <br></br>
          <CommentButton togglemodel={props.toggleModel} toggle={props.toggle}
                addComment={props.addComment}
                dishId={props.dish.id}
          />
                </div>
                </div>
                
            </div>
        )
    }
    
}

export default DishDetailComponent
