import React, { useState, useEffect } from "react";
import "./index.css";

const App = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [newTodo, setNewTodo] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() === "") return;
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo("");
    };

    const toggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const remainingItems = todos.filter((todo) => !todo.completed).length;

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={addTodo}>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        autoFocus
                    />
                </form>
            </header>

            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label onClick={() => setTodos(todos.map((todo) => ({ ...todo, completed: true })))} for="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {filteredTodos.map((todo, index) => (
                        <li key={index} className={todo.completed ? "completed" : ""}>
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(index)}
                                />
                                <label>{todo.text}</label>
                                <button className="destroy" onClick={() => deleteTodo(index)}></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <footer className="footer">
        <span className="todo-count">
          <strong>{remainingItems}</strong> items left
        </span>

                <ul className="filters">
                    <li>
                        <a
                            href="#/"
                            className={filter === "all" ? "selected" : ""}
                            onClick={() => setFilter("all")}
                        >
                            All
                        </a>
                    </li>
                    <li>
                        <a
                            href="#/"
                            className={filter === "active" ? "selected" : ""}
                            onClick={() => setFilter("active")}
                        >
                            Active
                        </a>
                    </li>
                    <li>
                        <a
                            href="#/"
                            className={filter === "completed" ? "selected" : ""}
                            onClick={() => setFilter("completed")}
                        >
                            Completed
                        </a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={clearCompleted}>
                    Clear completed
                </button>
            </footer>
        </section>
    );
};

export default App;
