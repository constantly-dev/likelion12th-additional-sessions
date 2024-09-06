import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const TodoList = () => {
  const [todoList, setTodoList] = useState<any[]>([]);
  const [plusTodo, setPlusTodo] = useState<any>('');
  const [name, setName] = useState<any>('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const registerTodo = (e: any) => {
    e.preventDefault();
    if (plusTodo.trim() === '') {
      return;
    }
    setTodoList((prev: any) => [...prev, plusTodo]);
    setPlusTodo('');
  };

  const handleTodoChange = (e: any) => {
    setPlusTodo(e.target.value);
  };

  return (
    <>
      <TodoForm>
        <Wrapper>
          <h3>TodoList</h3>

          <InputContainer>
            <TodoInput
              value={plusTodo}
              placeholder="할 일을 입력해주세요."
              onChange={handleTodoChange}
            />
            <RegisterButton onClick={registerTodo}>추가</RegisterButton>
          </InputContainer>
          <ContentContainer>
            {todoList.map((todo: any, index: any) => (
              <Todo key={index} todo={todo}></Todo>
            ))}
          </ContentContainer>
          <Info>이름: {name}</Info>
        </Wrapper>
      </TodoForm>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 400px;
  height: 600px;
  margin: 0 auto;
  box-shadow: 1px 1px 1px 1px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ContentContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #b4b4b4; /* 스크롤바의 색상 */
    border-radius: 10px;
  }
`;

const TodoForm = styled.form``;
const TodoInput = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #eee;
  line-height: 24px;
  padding-right: 50px;
  height: inherit;
`;
const RegisterButton = styled.button`
  white-space: nowrap;
`;

const Info = styled.p`
  position: absolute;
  bottom: 10px;
`;

export default TodoList;
