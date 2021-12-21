import React, { Component } from 'react';
// import PaitingList from './components/paintingList';
// import paintings from './paiting.json';
// import Section from './components/Section';
// import Counter from './components/Counter/Counter';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Dropdown from './components/Dropdown/Dropdown';
import Todolist from './components/TodoList';
import initialTodos from './todos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const complitedTodo = todos.reduce((acc, todo) => (todo.complited ? acc + 1 : acc), 0);
    return (
      <>
        <h1>Components</h1>
        <div>
          <p>Загальна кількість задач: {todos.length}</p>
          <p>Задач виконано: {complitedTodo}</p>
        </div>
        <Todolist todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

// export default function App() {
//   return (
//     <div>
//       {/* <Section title="Top">
//         <PaitingList items={paintings} />
//       </Section> */}

//       {/* <Counter initialValue={112}/>

//       <Counter initialValue={11}/> */}
//       {/* <Dropdown/> */}
//       {/* <ColorPicker options={colorPickerOptions}/> */}
//       <Todolist />
//     </div>
//   );
// }

export default App;
