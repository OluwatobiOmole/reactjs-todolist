import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  const [todos, setTodos] = useState( [
    'Go to the gym',
    'Eat more fruits and Veg',
    'Pick up kids'
  ])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  )
}

export default App
