import { Button } from "@chakra-ui/react";
import AddTodo from "./AddTodoModal";

const Breadcrumb: React.FC = () => {
  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_box text-center">
                <h1 className="breadcrumb-title text-color-primary">
                  TODOLIST{" "}
                </h1>{" "}
                <br />
                <br />
                <Button
                  type="button"
                  color="white"
                  size="lg"
                  backgroundColor="blue.600"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#addtodomodal"
                >
                  ADD TODO <i className="fa plus-circle"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddTodo />
    </>
  );
};

export default Breadcrumb;
