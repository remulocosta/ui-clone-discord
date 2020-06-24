import React from 'react';

import bot01 from '../../assets/bot01.gif';
import * as user01 from '../../assets/user01.JPG';
import user02 from '../../assets/user02.gif';
import { Container, Role, User, Avatar } from './styles';

interface IUserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<IUserProps> = ({ children, nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}>{children}</Avatar>

      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Remulo Costa">
        <img src={user01} alt="avatar" />
      </UserRow>

      <Role>Offline - 10</Role>
      <UserRow nickname="DieBot" isBot>
        <img src={bot01} alt="avatar" />
      </UserRow>
      <UserRow nickname="Usuario #01">
        <img src={user02} alt="avatar" />
      </UserRow>
      <UserRow nickname="Usuario #01">
        <img src={user02} alt="avatar" />
      </UserRow>
      <UserRow nickname="Usuario #01">
        <img src={bot01} alt="avatar" />
      </UserRow>
      <UserRow nickname="Usuario #01">
        <img src={user02} alt="avatar" />
      </UserRow>
      <UserRow nickname="Usuario #01">
        <img src={user02} alt="avatar" />
      </UserRow>
      <UserRow nickname="Usuário #0201" />
      <UserRow nickname="Usuário #0201" />
      <UserRow nickname="Usuário fake #0202" isBot>
        <img src={bot01} alt="avatar" />
      </UserRow>
      <UserRow nickname="Usuário #0201" />
    </Container>
  );
};

export default UserList;
