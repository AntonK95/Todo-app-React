
// Komponent för att visa en enskild todo med checkbox för att markera som avklarad och en knapp för att ta bort
function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            {/* Etikett med en checkbox för att markera todo som avklarad */}
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)} // Funktion som körs när checkboxen ändras för att ändra status för todon
                    />
                {title} {/* Visar titeln */}
            </label>
            {/* Knapp för att ta bort todon */}
            <button 
            onClick={() => deleteTodo(id)} // Funktion som körs när knappen klicka för att ta bort todon
                className='btn btn-danger'>Delete</button>
        </li>
    )
}

export default TodoItem;