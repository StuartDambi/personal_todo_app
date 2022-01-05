import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { ReduxState, TodoItem } from "../interfaces";
import { addTodo } from "../store/actions/todoActions";

const AddTodo = () => {
  const [state, setState] = useState<TodoItem>({
    id: "",
    title: "",
    description: "",
    status: "todo",
  });

  const dispatch = useDispatch();
  const { todoList } = useSelector((store: ReduxState) => store.tasks);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleAddTodo = () => {
    dispatch(addTodo(todoList, { ...state, id: uuidV4() }));
    // console.log(state);
    // dispatch(resetState());
  };

  return (
    <div
      className="modal fade"
      id="addtodomodal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="addtodomodal"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add TODO Item
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="contact-form-wrap">
              <div className="contact-form">
                <div className="contact-inner">
                  <input
                    name="title"
                    value={state.title}
                    onChange={handleChange}
                    type="text"
                    placeholder="Title *"
                  />
                </div>
                <div className="contact-inner">
                  <input
                    name="description"
                    value={state.description}
                    onChange={handleChange}
                    type="text"
                    placeholder="Description *"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleAddTodo}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
