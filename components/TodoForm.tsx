import styled from "styled-components"
import React, { useState } from "react";
import { addTodo } from "../store/todo";

export const TodoForm = () => {

    const [input, setInput] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // store에서 작성한 addTodo 함수에 content만 인수로 넣어 호출! << CREATE >>
        addTodo(input);
        alert("추가!");
        setInput("");
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return(
    <TodoFormSt onSubmit={onSubmit}>
        <TodoInput type="text" onChange={onChange} value={input}></TodoInput>
        <TodoBtn type="submit">Add</TodoBtn>
    </TodoFormSt>
    )
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