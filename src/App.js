import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import JanuaryCard from "./components/JanuaryCard";
import HabitCard from "./components/HabitCard";
import { useState } from "react";

function App() {
  let currentMonth = "January";
  const months = [
    { month: "January", days: 31 },
    { month: "February", days: 28 },
  ];

  const [habitList, setHabitList] = useState([]);

  const [newHabit, setNewHabit] = useState("");

  const handleChange = (event) => {
    setNewHabit(event.target.value);
  };

  const addHabit = () => {
    const habit = {
      id: habitList.length === 0 ? 1 : habitList[habitList.length - 1].id + 1,
      habitName: newHabit,
    };
    setHabitList([...habitList, habit]);
  };

  const deleteHabit = (id) => {
    setHabitList(
      habitList.filter((habit) => {
        return habit.id !== id;
      })
    );
  };

  return (
    <div>
      <div className="addHabit">
        <input onChange={handleChange}></input>
        <button onClick={addHabit}>Track habit</button>
        {habitList.map((habit) => {
          return (
            <div>
              <h1>{habit.habitName}</h1>
              <button onClick={() => deleteHabit(habit.id)}>X</button>
            </div>
          );
        })}
      </div>
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
          <JanuaryCard />
        </div>
      </Container>
    </div>
  );
}

export default App;
