import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckMark from "./CheckMark";
import Container from "react-bootstrap/Container";

const HabitCard = (props) => {
  const months = [
    {
      month: "January",
      days: 31,
    },
    {
      month: "February",
      days: 28,
    },
  ];

  const daysOfTheMonth = months.map((month) => month.days);
  console.log(daysOfTheMonth);

  const habits = [
    "HABIT",
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
  ];

  const codeHabit = ["Code", true, true, false, true];

  return (
    <div className="rounded-corners">
      <Container>
        <h1>{props.month}</h1>
        <h2>{props.days}</h2>
        <Table bordered>
          <thead>
            <tr>
              {habits.map((habit) => {
                return (
                  <th className="habit-column">
                    <p className="column-header">{habit}</p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Code</th>
              {codeHabit.map((habit) => {
                return (
                  habit && (
                    <th>
                      <CheckMark />
                    </th>
                  )
                );
              })}
            </tr>
          </tbody>
        </Table>
      </Container>{" "}
    </div>
  );
};

export default HabitCard;
