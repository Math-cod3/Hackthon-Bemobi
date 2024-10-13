import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn({ email, password });
      navigate('/');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </Container>
  );
};

export default Login;
