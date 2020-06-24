import React from 'react';

import user01 from '../../assets/user01.JPG';
import {
  Container,
  ProfileContainer,
  Avatar,
  UserData,
  IconsContainer,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <ProfileContainer>
        <Avatar>
          <img src={user01} alt="avatar" />
        </Avatar>
        <UserData>
          <strong>remulocosta</strong>
          <span>#1845</span>
        </UserData>
      </ProfileContainer>

      <IconsContainer>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </IconsContainer>
    </Container>
  );
};

export default UserInfo;
