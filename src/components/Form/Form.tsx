import React, { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3),
  age: z.number({ invalid_type_error: "Age field is required" }).min(18),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);
  //Hook to reference dom element
  // Must be of HTMLInputElement type so TS can get nameRef.current.value
  // Init as null because DOM created after components are rendered, so no value to use
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: "", age: 0 };

  //useState instead of useRef
  //Each time this is changed, page is rerendered, so not always optimal
  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });
  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   // if (nameRef.current !== null) person.name = nameRef.current.value;
  //   // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //   // console.log(person);
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          // value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
        {/* {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters</p>
        )} */}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, age: event.target.value })
          // }
          {...register("age", { valueAsNumber: true })}
          id="age"
          // value={person.age}
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
