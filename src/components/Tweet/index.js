import React from 'react';

import { 
  Container,
  Retweeted,
  RocketSeatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

function Tweet() {
  return (
    <Container>
      <Retweeted>
        <RocketSeatIcon/>
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar/>

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot/>
            <time>17 de jun</time>
          </Header>

          <Description>Foguete Não tem ré</Description>
          
          <ImageContent/>

          <Icons>
            <Status>
              <CommentIcon/>
              18
            </Status>
            <Status>
              <RetweetIcon/>
              18
            </Status>
            <Status>
              <LikeIcon/>
              999
            </Status> 
          </Icons>

        </Content>

      </Body>
    </Container>
  );
}

export default Tweet;