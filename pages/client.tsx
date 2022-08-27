import { ApolloClient, InMemoryCache } from "@apollo/client"
import todoVar from "../store/todo";

// 만든 Todo data 를 gql query 로 조회할 수 있도록 로컬 전용 필드에 등록
// InMemoryCache typePolicies 에 정의
// read 함수를 실행하면 todoVar 를 실행해 Todo data를 반환

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                // read 함수가 정의된 필드는 쿼리 요청이 들어올 때마다 해당 함수를 포출해 필드 값 계산
                // 로컬 상태는 캐싱된 데이터를 사용하지 않기 때문에 read 함수를 통해 데이터 조회
                getTodos: {
                    read() {
                        return todoVar();
                    }
                }
            }
        }
    }
})

const client = new ApolloClient({
    cache,
});

export default client;