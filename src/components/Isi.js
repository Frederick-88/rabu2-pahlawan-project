import React from "react";
import { Card } from "react-bootstrap";

const Isi = (props) => {
  console.log(props);
  const { data } = props;

  return (
    <Card className="card-fx-fix">
      <Card.Img variant="top" class="img-fx-fix" src={`${data.values.imageURL}`}></Card.Img>
      <Card.Body>
        <Card.Title>
          <p>Full Name: {`${data.values.fullname}`} </p>
          <br/>
          <p> Born: {`${data.values.born}`} </p>
          <br/>
          <p> Died: {`${data.values.died}`} </p>
          <br/>
          <p> Description: {`${data.values.description}`} </p>
          <br/>
          <p> Establishment: {`${data.values.establishment}`} </p>
                
                
        </Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Isi;
