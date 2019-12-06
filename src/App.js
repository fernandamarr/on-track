import React, {Component} from 'react'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import todosData from './todosData'
import './style.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			todos: todosData,
			isLoading: true
		}
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 1500);
	}
	
	handleChange(id) {
		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {
				if (todo.id === id) { 
					// return new object to not modify old object directly.
					return {
						...todo,
						completed: !todo.completed
					}
				}
				return todo
			})
			return {
				todos: updatedTodos
			}
		})
	}
	
	render() {
		const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
		
		return (
      <div>
        <div className='header'>
        <Header />
          
        </div>
          <div className='todo-list'>
            {this.state.isLoading ? <h1>Loading...</h1> : todoItems } 
          </div>
      </div>
		)    
	}
}

export default App