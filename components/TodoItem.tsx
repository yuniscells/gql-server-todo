import { deleteTodo, Todo, updateTodo } from "../store/todo";

// Todo data의 type과 content를 설정해주기
const TodoItem = ({ id, content, done }: Todo) => {
    const removeTodo = () => {
        alert("delete");
        deleteTodo(id);
    };

    const checkboxHandler = () => {
        alert("update");
        updateTodo({id, content, done});
    };

    return (
        <div>
            {done ? (
                <input type="checkbox" defaultChecked onClick={checkboxHandler}/>
            ) : (<input type="checkbox" onClick={removeTodo}/>)}
            <span>{content}, {id}</span>
            <button onClick={removeTodo}>❌</button>
        </div>
    )
}

export default TodoItem;