import './App.css';
import TaskList from './components/TaskList';

const App = () => {
	return (
		<div className='app-task'>
			<div className='freecodecamp-logo-box'>
				<h1 className='title'>Mini Tasks List</h1>
			</div>
			<div className='main-task-list'>
				<h1>Tasks</h1>
				<TaskList />
			</div>
		</div>
	);
};

export default App;
