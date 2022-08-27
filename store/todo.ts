import { makeVar } from "@apollo/client";

export interface Todo {
    id: number,
    content: string,
    done: boolean
}

// 반응 변수 만들기
// Apollo Client 캐시 외부에 로컬 상태 저장을 위해 사용됨
const todoIdCounterVar = makeVar(0);
const todoVar = makeVar<Todo[]>([]);

// todo 추가하기

export const addTodo = (content: string) => {
    // 인자를 넣지 않고 호출하면 해당 반응 변수의 값이 반환됨
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
