import React from 'react';
import axios from 'axios';

function ListItem (props) {
  return <li>{props.name}</li>;
}

function TodoList (props) {
  const todos = props.todos;
  const listItems = todos.map((todo) =>
    <ListItem 
      key={todo.id}
      name={todo.name} 
    />
  );

  return (
    <ul>
      {listItems}
    </ul>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <h1>Todos</h1>
        <TodoList todos={todos} />,
      </div>
    );
  }
}

export default App;
