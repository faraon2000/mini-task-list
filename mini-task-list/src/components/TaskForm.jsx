import { useState } from 'react';
import '../styles/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props) => {
	const [input, setInput] = useState('');
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const newTask = {
			id: uuidv4(),
			text: input,
			completed: false,
		};
		props.onSubmit(newTask);
	};

	return (
		<form className='task-form' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Add a new task'
				className='task-input'
				value={input}
				onChange={handleChange}
			/>
			<button className='submit-button'>Add Task</button>
		</form>
	);
};

export default TaskForm;
