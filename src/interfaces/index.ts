export interface TodoItem {
  id: string;
  title: string;
  description: string;
  status: string;
}

export interface ReduxState {
  tasks: {
    todoList: TodoItem[];
  };
}
