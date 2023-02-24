import "./App.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpence/NewExpence";
import Expenses from "./components/Expense/Expense";
import "./components/Expense/Expense.css";
const initialExp = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 439.3,
    date: new Date(2023, 2, 23),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 323.3,
    date: new Date(2023, 8, 22),
  },
  {
    id: "e3",
    title: "Light bill",
    amount: 200.3,
    date: new Date(2023, 12, 21),
  },
  {
    id: "e4",
    title: "labour charge",
    amount: 1000.3,
    date: new Date(2023, 9, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExp);
  const addExpenseHandler = (expense) => {
    setExpenses((preveousExpenses) => {
      return [expense, ...preveousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
