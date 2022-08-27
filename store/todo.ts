/* Todo data를 저장하기 위한 store */

// Apollo Client에서 제공하는 `makeVar`를 통해 반응 변수를 만듦
// Apollo Client 캐시 외부에 로컬 상태 저장을 위해 사용됨
import { makeVar } from "@apollo/client";

/* Todo type */
export interface Todo {
    id: number,
    content: string,
    done: boolean
}

// #1. 반응 변수 만들기
const todoIdCounterVar = makeVar(0); // id counter
const todoVar = makeVar<Todo[]>([]); // Todo data container

// addTodo => `todoVar`에 새로운 Todo data를 추가해주는 Fn.
export const addTodo = (content: string) => {
    // 반응 변수는 인자를 넣지 않고 호출하면 해당 반응 변수의 값이 반환됨
    // 만약 todoVar(data)와 같이 인자를 넣고 호출하면 해당 인자의 값으로 변수가 업데이트 됨
    const prevId = todoIdCounterVar();
    const curTodo = todoVar();
    const newTodo = {
        id: prevId +1,
        content,
        done: false
    };
    // 인자를 넣고 호출하면 인자 값으로 반응 변수 업데이트
    todoVar([...curTodo, newTodo]);
    todoIdCounterVar(prevId + 1);
}

export const deleteTodo = (id: number) => {
    const curTodo = [...todoVar()];
    const deleteIndex = curTodo.findIndex((todo) => todo.id === id);

    if (deleteIndex === -1) return;

    curTodo.splice(deleteIndex, 1);
    todoVar(curTodo);
};

export const updateTodo = ({ id, content, done }: Todo) => {
    const todos = [...todoVar()];

    const filteredTodos = todos.filter((todo) => todo.id !== id);

    let curTodo = todos.find((todo) => todo.id === id);
    curTodo = {
        id: id,
        content: content,
        done: !done,
    };
    const updatedTodos = [...filteredTodos, curTodo];
    todoVar(updatedTodos);
};

export default todoVar;