import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'
import TodoListItem from './components/todo-list-item'
import ItemStatusFilter from './components/item-status-filter';


const App = () => {

  const todoData = [
    {label: 'Drink Cofee', important: false, id:1},
    {label: 'Make aweasome app', important: true, id:2},
    {label: 'have a lunch', important: false, id:3}
  ]

  return(
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));