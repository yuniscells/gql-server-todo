import styled from "styled-components"

export const TodoForm = () => {
    return(<TodoFormSt>
    <TodoInput type="text"></TodoInput>
    <TodoBtn type="submit">추가하기</TodoBtn>
    </TodoFormSt>)
}

const TodoFormSt = styled.form`
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TodoInput = styled.input`
    width: 400px;
`

const TodoBtn = styled.button`

`