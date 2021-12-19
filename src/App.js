import React, { Component } from 'react';
// import PaitingList from './components/paintingList';
// import paintings from './paiting.json';
// import Section from './components/Section';
// import Counter from './components/Counter/Counter';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Dropdown from './components/Dropdown/Dropdown';
import Todolist from './components/TodoList';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo1', complited: false },
      { id: 'id-2', text: 'Todo2', complited: false },
      { id: 'id-3', text: 'Todo3', complited: false },
      { id: 'id-4', text: 'Todo4', complited: false },
    ],
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <h1>Components</h1>
        <Todolist todos={todos} />
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
