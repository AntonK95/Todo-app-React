import TodoItem from "./TodoItem";

function TodoList( {todos, toggleTodo, deleteTodo} ) {

    return (
        <ul className='list'>
            {todos.length === 0 && "No todos in list"}
            {todos.map(todo => {
                return (
                    <TodoItem 
                    {...todo}
                        // id={todo.id} 
                        // completed={todo.completed} 
                        // title={todo.title} 
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        />
                )
            })}
        </ul>
    )
}

export default TodoList;