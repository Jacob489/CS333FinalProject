import React, { useState } from 'react';
import { Button } from '../common/Button';

export function CreateTodo({ handleCreate }) {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState(''); // New state for time

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTimeChange = (e) => { // Handler for time input change
    setTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !time) return; // Ensure both title and time are provided
    const newTodo = { title, time, isCompleted: false }; // Include time in the new todo
    await handleCreate(newTodo);
    setTitle('');
    setTime(''); // Clear title and time after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter a new todo"
      />
      <input
        type="text"
        value={time}
        onChange={handleTimeChange}
        placeholder="Enter a time"
      /> {/* Input field for time */}
      <Button type="submit">Add Todo</Button>
    </form>
  );
}
