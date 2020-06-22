import React from 'react';

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
        <Avatar />
        <UserData>
          <strong>Remulo Costa</strong>
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
