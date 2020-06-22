import React from 'react';

import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome mentions={3} />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={0} />
      <ServerButton mentions={3} />
      <ServerButton mentions={72} />
      <ServerButton />
      <ServerButton mentions={33} hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
