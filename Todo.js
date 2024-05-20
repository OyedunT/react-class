import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      if (editingIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = { name: taskName, description: taskDescription };
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        setTasks([...tasks, { name: taskName, description: taskDescription }]);
      }
      setTaskName('');
      setTaskDescription('');
    }
  };

  const handleEditTask = (i) => {
    setTaskName(tasks[i].name);
    setTaskDescription(tasks[i].description);
    setEditingIndex(i);
  };

  const handleDeleteTask = (i) => {
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container mt-5 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
      <h1>Todo List</h1>
      <div className="mb-3">
        <label className="form-label">Task Name:</label>
        <input
          type="text"
          className="form-control"
          value={taskName}
          onChange={handleTaskNameChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Task Description:</label>
        <input
          type="text"
          className="form-control"
          value={taskDescription}
          onChange={handleTaskDescriptionChange}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleAddTask}>
        {editingIndex !== null ? 'Update Task' : 'Add Task'}
      </button>
      {tasks.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Task Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={i}>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>
                  <button className="btn btn-primary mb-2" onClick={() => handleEditTask(i)}>Edit</button>
                  <button className="btn btn-danger mb-2" onClick={() => handleDeleteTask(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Todo;

