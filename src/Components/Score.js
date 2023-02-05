import Card from "react-bootstrap/Card";

const Score = ({type,name}) => {
  return (
    <div
      className="container mt-2"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            <p>Your BMI score is</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Card style={{ width: "10rem",backgroundColor:"#8fecc8",color:"#333644","height":"5rem"}}>
                <h1 style={{"fontSize":"x-large"}}>{name}</h1>
              </Card>
            </div>
            <p>You are having {type} BMI</p>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Score;
