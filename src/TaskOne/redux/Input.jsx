// Input.jsx

import  { useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "./action";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(Add(input));
    setInput("");
  };

  return (
    <form onSubmit={handleForm}>
      <div className="d-flex justify-content-center mt-4 ">
        <input
          type="text"
          className="me-5"
          placeholder="Enter task name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary">Add Todo</button>
      </div>
    </form>
  );
}

export default Input;
