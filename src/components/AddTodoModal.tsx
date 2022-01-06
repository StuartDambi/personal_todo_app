import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import {
  Modal,
  ModalOverlay,
  Button,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  FormLabel,
  ModalBody,
  Input,
  ModalContent,
  ModalFooter,
  Select,
} from "@chakra-ui/react";
import { ReduxState, TodoItem, User } from "../interfaces";
import { addTodo } from "../store/actions/todoActions";

interface AddTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  users: User[];
}

const AddTodo: React.FC<AddTodoModalProps> = ({ isOpen, onClose, users }) => {
  const [state, setState] = useState<TodoItem>({
    id: "",
    title: "",
    description: "",
    status: "todo",
    user: "",
  });

  const dispatch = useDispatch();
  const { todoList } = useSelector((store: ReduxState) => store.tasks);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleAddTodo = () => {
    if (state.description !== "" && state.title !== "") {
      dispatch(addTodo(todoList, { ...state, id: uuidV4() }));
    }
    // console.log(state);
    // dispatch(resetState());
  };
  console.log(users);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={state.title}
              onChange={handleChange}
              placeholder="Title"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              name="description"
              value={state.description}
              onChange={handleChange}
              placeholder="Description"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Responsible</FormLabel>
            <Select
              name="user"
              placeholder="Select Responsible"
              onChange={handleChange}
            >
              {users.map((user: User) => (
                <option key={user.email} value={user.email}>
                  {user.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={handleAddTodo} mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    // <div
    //   className="modal fade"
    //   id="addtodomodal"
    //   tabIndex={-1}
    //   role="dialog"
    //   aria-labelledby="addtodomodal"
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog" role="document">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title" id="exampleModalLabel">
    //           Add TODO Item
    //         </h5>
    //         <button
    //           type="button"
    //           className="close"
    //           data-bs-dismiss="modal"
    //           aria-label="Close"
    //         >
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div className="modal-body">
    //         <div className="contact-form-wrap">
    //           <div className="contact-form">
    //             <div className="contact-inner">
    //               <input
    //                 name="title"
    //                 value={state.title}
    //                 onChange={handleChange}
    //                 type="text"
    //                 placeholder="Title *"
    //               />
    //             </div>
    //             <div className="contact-inner">
    //               <input
    //                 name="description"
    //                 value={state.description}
    //                 onChange={handleChange}
    //                 type="text"
    //                 placeholder="Description *"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="modal-footer">
    //         <button
    //           type="button"
    //           className="btn btn-secondary"
    //           data-bs-dismiss="modal"
    //         >
    //           Close
    //         </button>
    //         <button
    //           type="button"
    //           className="btn btn-primary"
    //           data-bs-dismiss="modal"
    //           onClick={handleAddTodo}
    //           disabled={state.description === "" || state.title === ""}
    //         >
    //           Save changes
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

AddTodo.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddTodo;
