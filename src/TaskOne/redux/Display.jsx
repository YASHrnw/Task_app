// Display.jsx

import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "./action";

function Display() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const DeleteTodo = (index) => {
    dispatch(Delete(index));
  };

  const EditTodo = (index, newValue) => {
    dispatch(Edit({ index, newValue }));
  };

  const toggleComplete = (index) => {
    const newValue = data[index].includes("- Complete")
      ? data[index].replace("- Complete", "")
      : data[index] + " - Complete";
    EditTodo(index, newValue);
  };

  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-8">
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                style={{
                  textDecoration: item.includes("- Complete")
                    ? "line-through"
                    : "none",
                }}
                onClick={() => {
                  toggleComplete(index);
                }}
              >
                <td scope="row">{index + 1}</td>
                <td>{item}</td>
                <td>
                  <button
                    className="btn btn-success me-4"
                    onClick={() => {
                      const newValue = prompt("Enter New Value");
                      if (newValue !== null) {
                        EditTodo(index, newValue);
                      }
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      DeleteTodo(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Display;
