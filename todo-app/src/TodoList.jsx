import TodoItem from "./TodoItem";

// Komponent för att visa en lista över todos med möjlighet att markera och ta bort
function TodoList( {todos, toggleTodo, deleteTodo} ) {

    return (
        <ul className='list'>
            {todos.length === 0 && "No todos in list"} {/* Visa ett meddelande om listan är tom */}
            {todos.map(todo => {
                return (
                    <TodoItem 
                    {...todo} // Skicka alla egenskaper från todo-objektet som props till TodoItem-komponenten
                        // id={todo.id} 
                        // completed={todo.completed} 
                        // title={todo.title} 
                        key={todo.id} // Unikt identifierar varje todo med dess id som nyckel
                        toggleTodo={toggleTodo} // Funktion som ändrar status för en todo
                        deleteTodo={deleteTodo} // Funktion för att ta bort en todo
                        />
                )
            })}
        </ul>
    )
}

export default TodoList;