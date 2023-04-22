import React, {useState} from "react";
import TodoActions from "../TodoActions/TodoActions";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoRender from "../TodoRender/TodoRender";
import "./Todo.css";

const initialFormData = {
    isEdit: false,
    todoName: '',
    todoNote: '',
    isFinished: false,
    id: '',
    index: null
}

const Todo = () => {
    const [tab, setTab] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDisplayTodo, setIsDisplayTodo] = useState(false);
    const [todo, setTodo] = useState([]);
    const [formData, setFormData] = useState(initialFormData);

    const handleOpenDialog = () => setIsOpen((prevState) => !prevState)

    return (
        <div className="todo-wrapper">
            <TodoHeader />

            <TodoActions />

            <TodoRender />
        </div>
    )
}

export default Todo;
