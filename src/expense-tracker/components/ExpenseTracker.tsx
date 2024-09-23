import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const categories = ["Grocery", "Utility", "Entertainment"] as const;

const schema = z.object({
  description: z.string().min(1),
  amount: z.coerce.number().min(1),
  category: z.enum(categories),
});

type FormData = z.infer<typeof schema>;

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

const ExpenseTracker = ({ expenses, changeExpenses }: Props) => {
  const addExpense = (data: FieldValues) => {
    const newExpense: Expense = {
      id: (expenses.length += 1),
      description: data.description,
      amount: data.amount,
      category: data.category,
    };

    changeExpenses([...expenses, newExpense]);
    console.log(expenses);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => addExpense(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            min="1"
            max="100"
            step="1"
            className="form-control"
            {...register("amount")}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <select
            id="category"
            className="form-select"
            {...register("category")}
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
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseTracker;
