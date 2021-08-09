import React, { useState } from "react";
// import Expenses from "./components/Expenses/Expenses";
// import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Tissue Paper",
    amount: 94.12,
    date: new Date(2022, 7, 1),
  },
  {
    id: "e2",
    title: "Ear Phone",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Book",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "Garden Pot (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
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
