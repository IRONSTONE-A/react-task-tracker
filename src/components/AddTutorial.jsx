import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTutorial = () => {
    const [title, setTitle] = useState()
    const [desc,setDesc]= useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        return(
            alert({title , desc})
        )
      
    }
    const handleTitleChange = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    const handleDescChange = (e) => {
        console.log(e.target.value)
        setDesc(e.target.value)
    }
   
  return (
    <div>
      <h1>Add Your Tutorial</h1>
      <Form >
        <Form.Group className="mb-4" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <br />
          <Form.Control   type="text" placeholder="Enter Your Title" onChange={handleTitleChange} /> <br />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDesc">
          <Form.Label>Description</Form.Label>
          <br />
          <Form.Control type="text" placeholder="Enter Your Description" onChange={handleDescChange} />
          <br />
        </Form.Group>

        <Button  className="btn btn-danger" variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddTutorial;
