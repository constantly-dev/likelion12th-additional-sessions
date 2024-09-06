import TodoList from './TodoList';
import Register from './Register';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/todoList" element={<TodoList />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
`;

export default App;
