import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  //   const titleHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, title: event.target.value };
  //     });
  //   };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    setTitle("");
    setAmount("");
    setDate("");
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}> Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
