import { useState } from "react";
import Form1 from "../components/Forms/Form1";
import Form2 from "../components/Forms/Form2";
import Form3 from "../components/Forms/Form3";
import Form4 from "../components/Forms/Form4";

const WalkThrough = () => {
  const [stepCounter, setStepCounter] = useState(1);

  return (
    <>
      {stepCounter === 1 ? (
        <Form1 setStepCounter={setStepCounter} stepCounter={stepCounter} />
      ) : stepCounter === 2 ? (
        <Form2 setStepCounter={setStepCounter} stepCounter={stepCounter} />
      ) : stepCounter === 3 ? (
        <Form3 setStepCounter={setStepCounter} stepCounter={stepCounter} />
      ) : stepCounter === 4 ? (
        <Form4 setStepCounter={setStepCounter} stepCounter={stepCounter} />
      ) : null}
    </>
  );
};

export default WalkThrough;
