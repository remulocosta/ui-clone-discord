import React from 'react';

import bot01 from '../../assets/bot01.gif';
import { Container, Avatar, Message, Header, Content } from './styles';

export { Mention } from './styles';

export interface IMessageProps {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  imgAvatar?: string;
}

const ChannelMessage: React.FC<IMessageProps> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
  imgAvatar,
}) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''}>
        {isBot && <img src={bot01} alt="avatar" />}
        {imgAvatar && <img src={imgAvatar} alt="avatar" />}
      </Avatar>

      <Message>
        <Header>
          <strong>{author}</strong>
          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;
