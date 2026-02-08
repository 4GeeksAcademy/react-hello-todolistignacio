import React, { useState } from "react";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            setTasks([...tasks, inputValue.trim()]);
            setInputValue("");
        }
    };

    const deleteTask = (indexToDelete) => {
        setTasks(tasks.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="w-50">
                <h1 className="text-center display-1 fw-light text-danger opacity-25">
                    todos
                </h1>
                <div className="card shadow-sm">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item p-0">
                            <input
                                type="text"
                                className="form-control border-0 py-3"
                                placeholder="What needs to be done?"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </li>
                        {tasks.length === 0 ? (
                            <li className="list-group-item text-muted">
                                No tasks, add a task
                            </li>
                        ) : (
                            tasks.map((task, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{task}</span>
                                    <span style={{ cursor: "pointer" }} onClick={() => deleteTask(index)}>✖
                                    </span>
                                </li>
                            ))
                        )}
                    </ul>
                    <div className="card-footer text-muted small">
                        {tasks.length} item{tasks.length !== 1 ? "s" : ""} left
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;