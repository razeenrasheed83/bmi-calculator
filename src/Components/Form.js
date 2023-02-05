import { Row } from "antd";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

const Form = ({getData}) => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [alert, setAlert] = useState(false);
  const submitData = (e) => {
    if (isNaN(weight) || isNaN(height)) {
      e.preventDefault();
      console.log("enter  a valid number");
      setAlert(true);
    } else {
      e.preventDefault();
      getData(weight,height)
      setAlert(false);
      setHeight("");
      setWeight("");
    }
  };

  return (
    <div
      className="container mt-2"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            BMI Calculator
          </Card.Title>
          <br />
          <form onSubmit={submitData}>
            <Row>
              <div className="col-5">
                <label>Weight</label>
                <input
                  className="form-control mt-2"
                  placeholder="Enter the weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
              <div className="col-1"></div>
              <div className="col-5">
                <label>Height</label>
                <input
                  className="form-control mt-2"
                  placeholder="Enter the height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </div>
              <div>
                <input type="submit" className="btn btn-success mt-2" />
              </div>
            </Row>
          </form>
          {alert ? (
            <div className="alert alert-danger mt-2 mb-2 mx-2">
              Enter proper number{" "}
            </div>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Form;
