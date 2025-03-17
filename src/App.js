import DataHub from "./AryContext"
import AddTodoForm from "./components/AddTodo"
import TodoList from "./components/TodoList"

function App() {
    return (
        <>
            <DataHub>
                <AddTodoForm />
                <TodoList />
            </DataHub>
        </>
    )
}

export default App