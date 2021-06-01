import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input,Card,CardBody, CardTitle,
FormFeedback
} from 'reactstrap';


export class ContactComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstname:'',
       lastname:'',
       email:'',
       comment: 'This space is reserved inorder to hear from your thought',
       isVerified: false,

       touched:{
        firstname: false,
        lastname: false,
        email: false
       }
    }
    this.Validate = this.Validate.bind(this);
  }

   HandleChange= (event)=>{
     const target = event.target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;
     this.setState({
       [name] : value
     });
  }


  HandleSubmit = (event)=>{
    event.preventDefault();
    alert(`Hello ${this.state.firstname} ${this.state.lastname}  with email ${this.state.email}
    <br/> your comment is ${this.state.comment}
    verification status is ${this.state.isVerified}`);
  }
   
   HandleOnBlur = (field)=>(event)=>{
     this.setState({
       touched: { ... this.state.touched, [field]: true }
     });
    }

     Validate(firstname,lastname,email,comment){
       const errors ={
          firstname:'',
          lastname: '',
          email: '',
          comment: ''
       }

       if(this.state.touched.firstname && firstname.length <3){
         errors.firstname = "firstname must have more than 3 characters";
       }
       else if(this.state.touched.firstname && firstname.length >10){
        errors.firstname = "firstname must not have more than 10 characters";
      }
      if(this.state.touched.lastname && lastname.length <3){
        errors.lastname = "lastname must have more than 3 characters";
      }
      else if(this.state.touched.lastname && lastname.length >10){
       errors.lastname= "lastnamemust not have more than 10 characters";
     }
     return errors;
     }

  render() {
    const errors = this.Validate(this.state.firstname,this.state.lastname,this.state.email,
      this.state.comment);
    return (
      <div className="container">
      <div className="row">
          <div className="col-2 col-sm-3"></div>
          <div className="col-4 col-sm-6 mt-5">
          <Card>
          <CardTitle tag="h2" className="d-flex justify-content-center bg-dark text-white">Contact Form </CardTitle>
      <CardBody>
      <Form onSubmit={this.HandleSubmit}>
    <FormGroup>
      <Label for="firstname">FirstName</Label>
      <Input type="text" name="firstname" id="firstname" placeholder="firstname here !"
        value={this.state.firstname} valid={errors.firstname===''}  invalid={errors.firstname !==''}
        onChange={this.HandleChange} onBlur={this.HandleOnBlur('firstname')}
      />
      <FormFeedback>{errors.firstname}</FormFeedback>
    </FormGroup>
    <FormGroup>
      <Label for="lastname">LastName</Label>
      <Input type="text" name="lastname" id="lastname" placeholder="lastname here !" 
       value={this.state.lastname}  valid={errors.lastname===''}  invalid={errors.lastname!==''} 
       onChange={this.HandleChange} onBlur={this.HandleOnBlur('lastname')}
      />
      <FormFeedback>{errors.lastname}</FormFeedback>
    </FormGroup>
    
    <FormGroup>
      <Label for="email">Email</Label>
      <Input type="email" name="email" id="email" placeholder="email here !"
        value={this.state.email} onChange={this.HandleChange}
      />
    </FormGroup>
    <FormGroup>
      <Label for="comment">Your Comment</Label>
      <Input type="textarea" name="comment" id="comment"
       value={this.state.comment} onChange={this.HandleChange}
      />
    </FormGroup>
    <FormGroup >
            <Label >
              <Input type="checkbox" id="verified" name="isVerified" checked={this.state.isVerified} 
              onChange={this.HandleChange}  
              />
              Accepted to send the above data
            </Label>
          </FormGroup>
    <FormGroup>
    <button type="submit" className="btn btn-primary pull-right">Send </button>
    </FormGroup>
    </Form>
      </CardBody>
    </Card>
          </div>
          <div className="col-2 col-sm-3"></div>
      </div>
         
      </div>
  )
  }
}

export default ContactComponent

