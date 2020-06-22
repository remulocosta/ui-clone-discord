import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface IUserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<IUserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Remulo Costa" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes" isBot />
      <UserRow nickname="João Miguel" />
      <UserRow nickname="João Miguel" />
      <UserRow nickname="João Miguel" isBot />
      <UserRow nickname="João Miguel" />
      <UserRow nickname="João Miguel" />
      <UserRow nickname="Antônio Miranda silva" />
      <UserRow nickname="Antônio Miranda silva" />
      <UserRow nickname="Antônio Miranda silva" isBot />
      <UserRow nickname="Antônio Miranda silva" />
    </Container>
  );
};

export default UserList;
