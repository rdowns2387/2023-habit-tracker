import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckMark from "./CheckMark";
import Container from 'react-bootstrap/Container'

const HabitCard = (props) => {
    return (

 <Container>
     <h1>{props.month}</h1>
     <h2>{props.days}</h2>
 <Table bordered hover>
         <thead>
           <tr>
             <th className="habit-column">
               <p className="column-header">Habit</p>
             </th>
             <th>
               <p className="column-header">01</p>
             </th>
             <th>
               <p className="column-header">02</p>
             </th>
             <th>
               <p className="column-header">03</p>
             </th>
             <th>
               <p className="column-header">04</p>
             </th>
             <th>
               <p className="column-header">05</p>
             </th>
             <th>
               <p className="column-header">06</p>
             </th>
             <th>
               <p className="column-header">07</p>
             </th>
             <th>
               <p className="column-header">08</p>
             </th>
             <th>
               <p className="column-header">09</p>
             </th>
             <th>
               <p className="column-header">10</p>
             </th>
             <th>
               <p className="column-header">11</p>
             </th>
             <th>
               <p className="column-header">12</p>
             </th>
             <th>
               <p className="column-header">13</p>
             </th>
             <th>
               <p className="column-header">14</p>
             </th>
             <th>
               <p className="column-header">15</p>
             </th>
             <th>
               <p className="column-header">16</p>
             </th>
             <th>
               <p className="column-header">17</p>
             </th>
             <th>
               <p className="column-header">18</p>
             </th>
             <th>
               <p className="column-header">19</p>
             </th>
             <th>
               <p className="column-header">20</p>
             </th>
             <th>
               <p className="column-header">21</p>
             </th>
             <th>
               <p className="column-header">22</p>
             </th>
             <th>
               <p className="column-header">23</p>
             </th>
             <th>
               <p className="column-header">24</p>
             </th>
             <th>
               <p className="column-header">25</p>
             </th>
             <th>
               <p className="column-header">26</p>
             </th>
             <th>
               <p className="column-header">27</p>
             </th>
             <th>
               <p className="column-header">28</p>
             </th>
             <th>
               <p className="column-header">29</p>
             </th>
             <th>
               <p className="column-header">30</p>
             </th>
             <th>
               <p className="column-header">31</p>
             </th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>Work out</td>
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
               <CheckMark />
             </td>{" "}
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
             <td></td>
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
             <td></td>
           </tr>
         </tbody>
       </Table>
       </Container> 
    )
  }

  export default HabitCard;