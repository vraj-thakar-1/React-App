import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, seTitle] = useState(props.title);

  // let title = props.title;
  function clickHandler() {
    seTitle("vraj");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Update</button>
    </Card>
  );
};

export default ExpenseItem;
