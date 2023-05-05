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

    console.log('formData: ', formData)

    const handleOpenDialog = () => setIsOpen((prevState) => !prevState)

    const handleSetFieldValue = (fieldName,value) => 
        setFormData((prevState => ({...prevState, [fieldName]:value})))

    const handleChangeTab = (tabValue) => setTab(tabValue)

    return (
        <div className="todo-wrapper">
            <TodoHeader 
                handleOpenDialog = {handleOpenDialog}
                isOpen = {isOpen}
                handleSetFieldValue = {handleSetFieldValue}
                formData = {formData}
            />

            <TodoActions
                handleChangeTab = {handleChangeTab}
                tab = {tab}    
            />

            <TodoRender />
        </div>
    )
}

export default Todo;
