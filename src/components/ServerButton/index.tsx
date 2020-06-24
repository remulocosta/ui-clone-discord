import React from 'react';

import Logo from '../../assets/logo.svg';
import { Button } from './styles';

export interface IProps {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<IProps> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
  children,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
      selected={selected}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
      {children}
    </Button>
  );
};

export default ServerButton;
