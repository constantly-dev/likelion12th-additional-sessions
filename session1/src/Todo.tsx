import styled from 'styled-components';

// TodoProps interface로 구현

const Todo = ({ todo }: TodoProps) => {
  const priorityLabels = ['낮음', '중간', '높음'];

  return (
    <Wrapper>
      <TodoText>{todo.text}</TodoText>
      <TodoPriority>우선순위: {priorityLabels[todo.priority - 1]}</TodoPriority>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoText = styled.span``;

const TodoPriority = styled.span`
  font-size: 0.9em;
  color: gray;
`;

export default Todo;
