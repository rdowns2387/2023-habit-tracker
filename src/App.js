import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css'
import JanuaryCard from "./components/JanuaryCard";
import HabitCard from "./components/HabitCard";
import { useState } from 'react';

function App() {

  let currentMonth = 'January'
  const months = [
    {month: 'January', days: 31},
    {month:'February', days: 28}
  ]

  const [didHabit, setDidHabit] = useState(false);

  const toggleDidHabit = () => {
    setDidHabit(true);
  }
  


  return (
    <div>
      <Container>
        <h1>2023 Habit Tracker</h1>
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
        {months.map((props)=>{
          return (
            <HabitCard month={props.month} days={props.days}/>
          )
        })}
      </Container>
    </div>
  );
}



export default App;
