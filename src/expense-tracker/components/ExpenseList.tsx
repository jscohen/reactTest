import React, { useState } from "react";
import { categories } from "../../App";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  changeExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

const ExpenseList = ({ expenses, changeExpenses }: Props) => {
  const [selectedCategory, setSeletectedCategory] = useState("");

  const handleCategoryChange = (event: React.ChangeEvent) => {
    setSeletectedCategory((event.target as HTMLInputElement).value);
  };

  const removeExpense = (event: React.MouseEvent, exp: Expense) => {
    changeExpenses(
      expenses.filter((expense) => expense && expense.id !== exp.id)
    );
  };
  return (
    <>
      <div className="mb-3">
        <select
          id="category"
          className="form-select"
          onChange={(event) => handleCategoryChange(event)}
        >
          <option value="" selected disabled hidden>
            Select a Category
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return expense && expense.category === selectedCategory ? (
              <tr>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <button
                  type="submit"
                  onClick={(e) => removeExpense(e, expense)}
                >
                  Delete
                </button>
              </tr>
            ) : (
              <></>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
