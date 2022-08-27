import type { NextPage } from 'next'
import styled from 'styled-components'
import { TodoForm } from '../components/TodoForm'
import { TodoContainer } from '../components/TodoContainer'

const Home: NextPage = () => {
  return (
    <StWrap>
      <h1>my Todo</h1>
      <TodoForm></TodoForm>
      <TodoContainer></TodoContainer>
    </StWrap>
  )
}

const StWrap = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default Home
