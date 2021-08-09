import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  return (
    <>
      {props.items.length === 0 && (
        <h2 className="expenses-list__fallback">Found No Expenses</h2>
      )}

      <ul className="expenses-list">
        {props.items.length > 0 &&
            props.items.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))}
      </ul>
    </>
  );
};

export default ExpensesList;
