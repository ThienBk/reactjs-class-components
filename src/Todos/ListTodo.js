import React from "react";
import "./todos.scss";
import AddListTodo from "./AddListTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Learning code" },
      { id: "todo3", title: "Fixing bugs" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Add new data success!");
  };
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.warning("Delete data success!");
  };
  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;

    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Update todo succeed!");
      return;
    }

    //edit
    this.setState({
      editTodo: todo,
    });
  };
  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">>> check empty obj: ", isEmptyObj);
    return (
      <>
        <div className="list-todo-container">
          <h2 className="mt-3 mb-3">Đây là ListTodo</h2>
          <AddListTodo addNewTodo={this.addNewTodo} />
          <div className="todo-content">
            {" "}
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {" "}
                    {isEmptyObj === true ? (
                      <span>
                        {" "}
                        {index + 1} - {item.title}{" "}
                      </span>
                    ) : (
                      <>
                        {" "}
                        {editTodo.id === item.id ? (
                          <span>
                            {" "}
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeEditTodo(event)
                              }
                            />{" "}
                          </span>
                        ) : (
                          <span>
                            {" "}
                            {index + 1} - {item.title}{" "}
                          </span>
                        )}{" "}
                      </>
                    )}{" "}
                    <button
                      className="btn-edit"
                      type="button"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}{" "}
                    </button>{" "}
                    <button
                      type="button"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete{" "}
                    </button>{" "}
                  </div>
                );
              })}{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  }
}
export default ListTodo;
