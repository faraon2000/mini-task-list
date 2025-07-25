import '../styles/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Task = ({ id, text, completed, completeTask, deleteTask }) => {
	return (
		<div className={completed ? 'task-box completed' : 'task-box'}>
			<div className='task-text' onClick={() => completeTask(id)}>
				{text}
			</div>
			<div className='task-icon-box' onClick={() => deleteTask(id)}>
				<AiOutlineCloseCircle className='task-icon' />
			</div>
		</div>
	);
};

export default Task;
