import React from "react";
import { Card } from "react-bootstrap";

function Userdetail({ userData, userDetails, userId }) {
  return (
    <div>
      
      {userId != "" && 
        <Card bg="dark" text="white" className="mb-2 mx-5" className = 'user-card'>
        <h2>User Details</h2>
          <Card.Header>ToDo ID : {userData.id}</Card.Header>
          <Card.Header>ToDo Title : {userData.title}</Card.Header>
          <Card.Header>User ID : {userDetails.id}</Card.Header>
          <Card.Body>
            <Card.Title>Name : {userDetails.name}</Card.Title>
            <Card.Text>Email : {userDetails.email}</Card.Text>
          </Card.Body>
        </Card>
      }
    </div>
  );
}

export default Userdetail;
