import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './styles.css';

function App() {
  return (
    <div className="App">
            <h1
                style={{
                    margin: "25px",
                    fontSize: "3rem",
                    fontFamily: "Courier New",
                }}
            >
                Clarus Todos
            </h1>
            <TodoInput />
            <TodoList />
        </div>
  );
}

export default App;
