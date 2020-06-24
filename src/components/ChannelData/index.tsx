/* eslint-disable react/jsx-wrap-multilines */
import React, { useRef, useEffect } from 'react';

import user01 from '../../assets/user01.JPG';
import user02 from '../../assets/user02.gif';
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
          author="remulocosta"
          date="21/06/2020"
          content="Hoje é dia de codar muuuuuuuito 🚀"
          imgAvatar={user01}
        />

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author={`Usuário fake #0${n}`}
            date="22/06/2020"
            content={`${n}0 Hoje também é dia de codar muuuuuuuito`}
            imgAvatar={user02}
          />
        ))}
        <ChannelMessage
          author="DieBot"
          date="22/06/2020"
          content={
            <>
              <Mention>@Usuário fake #01</Mention>, Hoje também é dia de codar
              muuuuuuuito!
            </>
          }
          hasMention
          isBot
        />
        <ChannelMessage
          author="remulocosta"
          date="22/06/2020"
          content={
            <>
              <Mention>@Guilherme Rodz #2689</Mention>, Feliz aniversário
              Guilherme, sucesso pra ti! 🎂🎈🎊 🎁!
            </>
          }
          imgAvatar={user01}
          hasMention
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
