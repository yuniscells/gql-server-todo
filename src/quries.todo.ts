/* Apollo Client 자체에서 query 없이 local state만 가져오는 기능이 추가되어
state를 query를 통해 서버의 필드와 함께 관리할 것이 아니라면 작성할 필요 X */

import { gql } from "@apollo/client";

// Todo data를 조회할 query 구현
// typePolicies에서 정의한 getTodos 와 같은 이름으로 작성해 호출하면 됨
// 단, query 뒤에 `@client`를 작성해 로컬 전용 필드임을 명시!
export const GET_TODOS = gql`
    query {
        getTodos @client
    }
`;

/* sever에 요청하는 query의 field에 local 전용 필드를 추가해 동시에 가져올 수도 있음
query userInfo {
    name
    phone
    getTodos @client
}
*/