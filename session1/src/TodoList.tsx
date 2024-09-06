import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Todo from './Todo';

// TodoItem interface로 구현

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [plusTodo, setPlusTodo] = useState<any>('');
  const [priority, setPriority] = useState<any>(1);
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
    setTodoList((prev) => [...prev, { text: plusTodo, priority }]);
    setPlusTodo('');
    setPriority(1);
  };

  const handleTodoChange = (e: any) => {
    setPlusTodo(e.target.value);
  };

  const handlePriorityChange = (e: any) => {
    setPriority(parseInt(e.target.value, 10));
  };

  return (
    <>
      <TodoForm onSubmit={registerTodo}>
        <Wrapper>
          <h3>TodoList</h3>

          <InputContainer>
            <TodoInput
              value={plusTodo}
              placeholder="할 일을 입력해주세요."
              onChange={handleTodoChange}
            />
            <PrioritySelect value={priority} onChange={handlePriorityChange}>
              <option value={1}>낮음</option>
              <option value={2}>중간</option>
              <option value={3}>높음</option>
            </PrioritySelect>
            <RegisterButton type="submit">추가</RegisterButton>
          </InputContainer>
          <ContentContainer>
            {todoList.map((todo, index) => (
              <Todo key={index} todo={todo} />
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

const PrioritySelect = styled.select`
  margin-left: 10px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #eee;
`;

const RegisterButton = styled.button`
  white-space: nowrap;
  margin-left: 10px;
`;

const Info = styled.p`
  position: absolute;
  bottom: 10px;
`;

export default TodoList;
