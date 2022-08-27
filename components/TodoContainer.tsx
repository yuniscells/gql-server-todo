import { useReactiveVar } from "@apollo/client";

export const TodoContainer  = () => {
    // useReactiveVar 를 사용해 직접 반응 변수에서 상태 가져오기
    // cache 에 정의를 하지 않아도 되고, 쿼리 작성하지 않아도 됨
    // useQuery를 사용하면 Todo 데이터가 변경될 때 마다 Todo data를 사용하는 모든 쿼리가 트리거 됨
    // 하지만 useReactiveVar 를 사용하면 독립적

    return (<>
    <span>my todos list will be here</span></>)
}