import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckMark from "./CheckMark";
import Container from "react-bootstrap/Container";
import { useState } from "react";

function JanuaryCard() {
  const [didHabit, setDidHabit] = useState(false);

  const toggleDidHabit = () => {
    setDidHabit(!didHabit);
  };

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
  const days = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];

  const workOutHabit = [false, true, true, true, true, true, false];
  const codeHabit = [false, true, true, true, true, true, false];
  const flossHabit = [false, true, true, true, true, true, false];
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
            {days.map((day) => {
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
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
