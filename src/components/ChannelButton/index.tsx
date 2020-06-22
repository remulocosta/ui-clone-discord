import React, { useState, useCallback } from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface IProps {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<IProps> = ({ channelName, selected }) => {
  const [focusedButton, setFocusedButton] = useState(false);

  const handleOnFocusedButton = useCallback((focused: boolean) => {
    setFocusedButton(focused);
  }, []);

  return (
    <Container
      className={selected ? 'active' : ''}
      onMouseLeave={() => handleOnFocusedButton(false)}
      onMouseEnter={() => handleOnFocusedButton(true)}
    >
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon className={focusedButton ? 'focused-button' : ''} />
        <SettingsIcon className={focusedButton ? 'focused-button' : ''} />
      </div>
    </Container>
  );
};

export default ChannelButton;
