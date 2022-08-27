import { useReactiveVar, useQuery } from "@apollo/client";
import todoVar, { Todo } from "../store/todo";
import TodoItem from "./TodoItem";
import { GET_TODOS } from "../src/quries.todo";

export const TodoContainer  = () => {

    /* const { data } = useQuery(GET_TODOS); */
    const todos = useReactiveVar(todoVar);

    /* `useQuery`를 사용해 Todo data를 query로 가져올 수 있음
    하지만 server data를 가져오는 것이 아니라면 `useReactiveVar`를 통해 직접 반응 변수에서 가져올 수 있음 */
    // local에서 가져오는 경우에는, cache 에 정의를 하지 않아도 되고, 쿼리 작성하지 않아도 됨

    // useQuery를 사용하면 Todo 데이터가 변경될 때 마다 Todo data를 사용하는 모든 쿼리가 트리거 됨
    // 하지만 useReactiveVar 를 사용하면 독립적 (성능적으로 유리!)

    return (<>
    <span>my todos list will be here</span>
    {todos.map((todo, idx) => {
        return (
            <TodoItem key={idx} id={todo.id} content={todo.content} done={todo.done}/>
        )
    })}
    </>)
}