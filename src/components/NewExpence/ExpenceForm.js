import "./ExpenseForm.css";
import React, { useState } from "react";
import { getValue } from "@testing-library/user-event/dist/utils";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [enteredDate, setEnteredDate] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title:</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
            required
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount:</label>
          <input
            type="Number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
            required
          />
        </div>
        <div className="new-expense__controls">
          <label>Date:</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-01-01"
            onChange={dateChangeHandler}
            value={enteredDate}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
