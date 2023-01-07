import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css'
import JanuaryCard from "./components/januaryCard";

function App() {

  let currentMonth = 'January'
  
  const months = {
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31,
  };
  // let readHabit = [{ one: true, two: false, three: true }];
  // function renderJanuary() {
  //   for (let i = 0; i < months.january; i++) {
  //     console.log(i);
  //   }
  // }

  return (
    <div>
      <Container>
        <h1>{months.january}</h1>
        <h1>Ryan's 2023 Habit Tracker</h1>
        <Row>
          <Col>
            <h2>{currentMonth} 2023</h2>
          </Col>
          <Col>
            <h2>1.8% Achieved</h2>
          </Col>
        </Row>
        <div className="rounded-corners">
          <januaryCard/>
          {currentMonth ?           
          <JanuaryCard/> : <h1>It's not January</h1> }
        </div>
      </Container>
    </div>
  );
}

export default App;
