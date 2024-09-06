import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: any) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    alert('이름이  등록되었습니다.');
    navigate('/todoList');
  };

  return (
    <Wrapper>
      <RegisterForm onSubmit={handleRegister}>
        <ContentContainer>
          <Input
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <RegisterButton type="submit">등록하기</RegisterButton>
        </ContentContainer>
      </RegisterForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 200px;
  margin: 0 auto;
  box-shadow: 1px 1px 1px 1px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const RegisterForm = styled.form``;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Input = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #eee;
  line-height: 24px;
  padding-right: 50px;
  height: inherit;
`;

const RegisterButton = styled.button`
  margin-top: 10px;
`;

export default Register;
