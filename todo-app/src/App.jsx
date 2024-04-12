import { useEffect, useState } from 'react'
import './index.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {

  // State för att hantera todos-listan
  const [todos, setTodos] = useState(() => {
    // Funtion som hämtar ut todos från localStorage() vid försrta renderingen
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return [] // Returnerar en tom lista om det inte finns sparade todos

    return JSON.parse(localValue) // Returnerar todos-listan från localStorage()
  });

  // Effekt som körs när todos ändras för att uppdatera localStorage()
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos)) // Spara todos-listan till localStorage() i JSOn format
  }, [ todos ]) // useEffekt körs varje gång todos-listan ändras

  // Funktion för att lägga till en ny todo
  function addTodo(title) {
    setTodos((currentTodos) => {
      // Lägger till en ny todo i todo-listan med unikt id, titel och som inte är avklarad
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(), // Generara ett unikt id för den nya todon
          title, // Angiven titel för den nya todon
          completed: false // Nya todon är inte avklarad när den läggs till
        },
      ]
    })
  }


  // Funktion för att ändra status för en todo ( completet: true / false )
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      // Ändra statusen för den specifika todon om id matchar med det id i todos-listan
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed } // Returnerar todon med uppdaterad status
        }
        return todo; // Returnerar oförändrad todo om id:t i id inte matchar
      })
    })
  }

  // Funktion för att ta bort en todo från listan
  function deleteTodo(id) {
    setTodos(currentTodos => {
      // Filtrerar ut todon med matchande id och returnera en ny kusta utan den borttagna todon
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <h1 className='header'>Todo List</h1>
      <TodoList todos={ todos } toggleTodo={ toggleTodo } deleteTodo={ deleteTodo } />
    </>
  )
}

export default App;
