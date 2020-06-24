import React from 'react';

import { Download, Plus } from 'styled-icons/evaicons-solid';
import { Explore } from 'styled-icons/material';

import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={0} />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton mentions={15} hasNotifications />
      <ServerButton />
      <ServerButton selected />
      <ServerButton hasNotifications />
      <ServerButton>
        <Plus size={24} />
      </ServerButton>
      <ServerButton>
        <Explore size={24} />
      </ServerButton>

      <Separator />

      <ServerButton>
        <Download size={24} />
      </ServerButton>
    </Container>
  );
};

export default ServerList;
