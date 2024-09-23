import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const categories = ["Grocery", "Utility", "Entertainment"] as const;

const schema = z.object({
  description: z.string().min(1),
  amount: z.number().min(1),
  category: z.enum(categories),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);

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
          <input id="amount" type="text" className="form-control" />
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
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseTracker;
