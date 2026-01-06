
//actual code starts here:-

// Import useState hook from React
// useState allows us to store and update data inside the component
import { useState } from "react";

// Import CSS file for basic styling of the app
import "../App.css";

function Todo() {
  // value- `tasks` stores the list of todo items
  // Each task is an object: { text: string, done: boolean }
  // function/method -`setTasks` is used to update the tasks list
  const [tasks, setTasks] = useState([]);// Initial value is an empty array

  // `input` stores the current value typed in the input box
  // `setInput` updates the input value as the user types
  const [input, setInput] = useState("");

  // Function to add a new task to the list
  const addTask = () => {
    // Prevent adding empty or whitespace-only tasks
    if (input.trim() === "") return; 

    // Create a new task object and add it to the existing tasks array
    // We use spread operator (...) to keep old tasks and add a new one
    setTasks([...tasks, { text: input, done: false }]);

    // Clear the input box after adding the task 
    setInput("");
  };

  // Function to mark a task as completed or uncompleted
  const toggleTask = (index) => {
    // Create a copy of the tasks array (important: never modify state directly)
    const newTasks = [...tasks];

    // Toggle the `done` value of the selected task
    newTasks[index].done = !newTasks[index].done;

    // Update the state with the modified tasks list
    setTasks(newTasks);
  };

  // Function to delete a task from the list
  const deleteTask = (index) => {
    // Create a new array excluding the task at the given index
    const newTasks = tasks.filter((_, i) => i !== index);

    // Update the tasks state with the filtered list
    setTasks(newTasks);
  };

  return (
    // Main container of the app
    <div className="app">
      <h1>My To-Do List</h1>

      {/* Input area for adding new tasks */}
      <div className="input-area">
        <input
          type="text"

          // The input value is controlled by React state
          value={input}

          // Update input state whenever user types
          onChange={(e) => setInput(e.target.value)}

          placeholder="Add a task..."
        />

        {/* Button that adds a task when clicked */}
        <button onClick={addTask}>Add</button>
      </div>

      {/* List of tasks */}
      <ul className="task-list">
        {/* Loop through tasks array and display each task */}
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {/* Checkbox to mark task as done/undone */}
            <input
              type="checkbox"

              // Checkbox reflects the task's done state
              checked={task.done}

              // Toggle task completion on change
              onChange={() => toggleTask(index)}
            />
            {/* Task text; apply "done" class if task is completed */}
            <span className={task.done ? "done" : ""}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export App component so it can be used in main.jsx
export default Todo;

