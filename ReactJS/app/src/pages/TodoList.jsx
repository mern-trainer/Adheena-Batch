// Task list

import { useState } from "react"

// list = [{task: "", completed: false, id: randomId, createdAt: dateTime},{}];

const TodoListPage = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (todo == "") return alert("Please enter the task");
        if (todo.length < 10) return alert("Task should be at least 10 characters long");
        const taskIndex = todoList.findIndex(element => element.task.toLowerCase() == todo.toLowerCase())
        if (taskIndex >= 0) return alert("Task already exists");
        const todoObj = {
            id: crypto.randomUUID(),
            task: todo,
            status: "Pending",
            createdAt: new Date().toLocaleString("en-IN")
        }
        setTodoList([todoObj, ...todoList])
        setTodo("")
    }

    const handleTaskCompleted = (id) => {
        const updatedList = todoList.map(todo => {
            if (todo.id == id) {
                return {...todo, status: "Completed"}
            }
            return todo
        })
        setTodoList(updatedList)
    }

    const handleTaskDeleted = (id) => {
        const isConfirmed = confirm("Are you sure you want to delete this task?")
        if (!isConfirmed) return;
        const updatedList = todoList.filter(todo => todo.id != id)
        setTodoList(updatedList)
    }

    return <div className="d-flex flex-column gap-2 align-items-center">
        <form onSubmit={handleSubmit} className="d-flex gap-1 flex-column w-100" style={{maxWidth: "450px"}}>
            <label htmlFor="task">Enter Task:</label>
            <input onChange={handleChange} value={todo} type="text" id="task" placeholder="Eg: Buy groceries" className="border p-2 border-2 rounded-0 border-secondary"/>
            <button className="btn btn-secondary rounded-0">Add Todo</button>
        </form>
        <div className="w-100 d-flex flex-column gap-2" style={{ maxWidth: "450px" }}>
            {
                todoList.map(todo => {
                    return <div key={todo.id} className="d-flex flex-column border p-2 rounded-3 border-1 border-secondary">
                        <h4>Task: {todo.task}</h4>
                        <span>Status: {todo.status}</span>
                        <span>Created At: {todo.createdAt}</span>
                        <div className="d-flex gap-2 mt-2">
                            <button className="btn btn-success w-100 rounded-pill" onClick={() => handleTaskCompleted(todo.id)}>Mark as Completed</button>
                            <button className="btn btn-danger w-100 rounded-pill" onClick={() => handleTaskDeleted(todo.id)}>Delete</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default TodoListPage