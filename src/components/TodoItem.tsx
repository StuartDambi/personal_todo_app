import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../interfaces";
import { markTodoAsDone, removeTodo } from "../store/actions/todoActions";

interface TodoItemProps {
  title: string;
  description: string;
  id: string;
  status: string;
  statusUpdate: string;
}

const TodoItem: React.FC<TodoItemProps> = ({
  title,
  description,
  id,
  status,
  statusUpdate,
}) => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((store: ReduxState) => store.tasks);
  return (
    <div className="card" draggable>
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn-link"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-expanded="true"
            aria-controls={id}
          >
            {title}{" "}
            <span>
              {" "}
              <i className="fas fa-chevron-down"></i>
              <i className="fas fa-chevron-up"></i>{" "}
            </span>
          </button>
        </h5>
      </div>

      <div
        id={id}
        className="collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordion"
      >
        <div className="card-body">
          <p>{description}. </p>
        </div>
        <div
          className="card-footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button
            className="btn btn-primary"
            onClick={() =>
              dispatch(
                markTodoAsDone(
                  todoList,
                  { id, title, description, status },
                  statusUpdate
                )
              )
            }
          >
            Start
          </button>
          <button
            className="btn btn-danger"
            onClick={() =>
              dispatch(removeTodo(todoList, { id, title, description, status }))
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  statusUpdate: PropTypes.string.isRequired,
};

export default TodoItem;
