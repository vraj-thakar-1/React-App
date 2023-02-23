import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expanses = [
    { title: "Car Insurance", amount: 439.3, date: new Date(2023, 2, 23) },
    { title: "Toilet Paper", amount: 323.3, date: new Date(2023, 8, 22) },
    { title: "Light bill", amount: 200.3, date: new Date(2023, 12, 21) },
    { title: "labour charge", amount: 1000.3, date: new Date(2023, 9, 12) },
  ];
  return (
    <div className="App">
      <ExpenseItem
        title={expanses[0].title}
        amount={expanses[0].amount}
        date={expanses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expanses[1].title}
        amount={expanses[1].amount}
        date={expanses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expanses[2].title}
        amount={expanses[2].amount}
        date={expanses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expanses[3].title}
        amount={expanses[3].amount}
        date={expanses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
