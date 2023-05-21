import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";

const SpeedConverter = () => {

  const convertKMPHtoMph = (Kmph) => {
    const Mph = Kmph / 1.6;
    setSpeedObj({
      Kmph: Kmph,
      Mph: Mph,
    });
  };

  const convertMphtoKmph = (Mph) => {
    const Kmph = Mph * 1.6;
    setSpeedObj({
      Kmph: Kmph,
      Mph: Mph,
    });
  };

  const [speedObj, setSpeedObj] = useState({
    Kmph: 0,
    Mph: 0,
  });

  return (
    <Card className="pos-center">
      <Card.Body>
      <h1> Speed Converter</h1>
        <Card.Text>Kmph to Mph Converter</Card.Text>
        <SpeedInput type={1} converter={convertKMPHtoMph} speed={speedObj.Kmph} />
        <hr />
        <SpeedInput type={2} converter={convertMphtoKmph} speed={speedObj.Mph} />
        <h4>Developed by dev-ajitkadam</h4>
      </Card.Body>
    </Card>
  );
};

const SpeedInput = ({ converter, speed, type }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Speed({type === 1 ? "Kmph" : "Mph"})</Form.Label>
      <Form.Control
        onChange={(e) => converter(e.target.value)}
        type="number"
        value={speed}
        placeholder={type === 1 ? "Enter Speed in Kmph" : "Enter Speed in Mph"}
      />
    </Form.Group>
  );
};

export default SpeedConverter;