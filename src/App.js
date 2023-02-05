import { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import Score from "./Components/Score";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [bmi, setBmi] = useState("");
  const [bmiType, setBmitype] = useState();

  const onFormSub = (w, h) => {
    let res = checkBmi(w,h)
    setBmi(res)
    setBmitype( weightType())
   
    console.log(w, h);
  };

  const checkBmi = (w, h) => {
    return w / (h * h).toFixed(2);
  };

   // function to get the weight type
   const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  };

  return (
    <>
      <Form getData={onFormSub} />
      <List />x``
      <Score type={bmiType} name={bmi} />
    </>
  );
}

export default App;
