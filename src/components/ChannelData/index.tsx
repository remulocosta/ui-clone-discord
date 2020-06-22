/* eslint-disable react/jsx-wrap-multilines */
import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage
          author="Remulo Costa"
          date="22/06/2020"
          content="Hoje é dia de codar muuuuuuuito"
        />

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Lucas Miranda Lemos"
            date="23/06/2020"
            content={`${n}0 Hoje também é dia de codar muuuuuuuito`}
          />
        ))}
        <ChannelMessage
          author="Diego Fernandes"
          date="23/06/2020"
          content={
            <>
              <Mention>@Lucas Miranda Lemos</Mention>, Hoje também é dia de
              codar muuuuuuuito!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
