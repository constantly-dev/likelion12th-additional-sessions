import styled from 'styled-components';

const Todo = ({ todo }: { todo: any }) => {
  return <Wrapper>{todo}</Wrapper>;
};

const Wrapper = styled.div`
  margin: 0 20px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export default Todo;
