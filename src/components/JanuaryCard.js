import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckMark from "./CheckMark";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import daysOfTheMonth from "./daysOfTheMonth";

function JanuaryCard() {
  const [didHabit, setDidHabit] = useState(false);

  const toggleDidHabit = () => {
    setDidHabit(!didHabit);
  };

  console.log("this is jan days of month" + daysOfTheMonth);

  const January = [
    {
      dayOne: {
        id: 1,
        dayNum: "01",
        code: true,
        workout: true,
      },
    },
  ];

  const workOutHabit = [
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  const codeHabit = [
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    false,
    true,
    true,
  ];
  const flossHabit = [
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
  ];
  const macroHabit = [false, true, true, true, true, true, false];
  const waterHabit = [false, true, true, true, true, true, false];
  const journalHabit = [false, true, true, true, true, true, false];
  const alcoholHabit = [false, true, true, true, true, true, false];
  const readHabit = [false, true, true, true, true, true, false];

  return (
    <Container>
      <Table bordered hover>
        <thead>
          <tr>
            <th className="habit-column">
              <p className="column-header">Habit</p>
            </th>
            {daysOfTheMonth.map((day) => {
              return (
                <th>
                  <p className="column-header">{day}</p>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Work out</td>
            {workOutHabit.map((day) => {
              return day ? (
                <td>
                  <CheckMark />
                </td>
              ) : (
                <td></td>
              );
            })}
          </tr>
          <tr>
            <td>Code</td>
            {codeHabit.map((day) => {
              return day ? (
                <td>
                  <CheckMark />
                </td>
              ) : (
                <td></td>
              );
            })}
          </tr>
          <tr>
            <td>Floss</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Track Macro Targets</td>
            <td></td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Hit Water Target</td>
            <td></td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>{" "}
            <td></td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>{" "}
            <td>
              {" "}
              <CheckMark />
            </td>{" "}
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Journal</td>
            <td></td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>{" "}
            <td></td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>{" "}
            <td></td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>No alcohol</td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>{" "}
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>{" "}
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Read a book</td>
            <td></td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>{" "}
            <td></td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>{" "}
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td>
              {" "}
              <CheckMark />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default JanuaryCard;
