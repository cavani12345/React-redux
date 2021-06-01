import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input, FormText
} from 'reactstrap';



function CommentButton(props) {
  const[ rate, setRate] = useState(1);
  const [fullname, setFullname] = useState('');
  const [comment, setComment] = useState('');


  const OnHandleChangeRate = (event)=>{
      setRate(event.target.value);
  }

  const OnHandleChangeFullName = (event)=>{
    setFullname(event.target.value);
}
const OnHandleChangeComment = (event)=>{
    setComment(event.target.value);
}

const HandleSubmit = () =>{
    props.togglemodel();
    props.addComment(props.dishId,rate,fullname,comment);
}
    return (
        <div>
           <button onClick={props.togglemodel}>Add your Comment</button> 
           <Modal isOpen={props.toggle} toggle={props.togglemodel}>
        <ModalHeader toggle={props.togglemodel}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
        <FormGroup>
        <Label for="exampleSelect">Rating</Label>
        <select name="rate" value={rate} onChange={OnHandleChangeRate} className="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </FormGroup>
      <FormGroup>
      <Label for="fullname">Your Name</Label>
      <Input type="text" name="fullname" placeholder="with a placeholder" value={fullname}
      onChange={OnHandleChangeFullName }
      />
      </FormGroup>
      <FormGroup>
         <Label for="comment">Your Name</Label>
         <Input type="textarea" name="comment" id="comment" value={comment}
          onChange={OnHandleChangeComment}
         />
      </FormGroup>
      </Form>
         </ModalBody>
        <ModalFooter>
         <Button color="secondary" onClick={props.togglemodel}>Cancel</Button>
         <Button color="primary" onClick={HandleSubmit}>Submit</Button>
        </ModalFooter>
      </Modal>
        </div>
    )
}

export default CommentButton
