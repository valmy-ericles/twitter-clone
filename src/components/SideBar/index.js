import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import FollowSuggestions from '../FollowSuggestions';
import News from '../News';

function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestions
                name="Platão Henrique"
                nickname="@josehenrique_fake"
              />,
              <FollowSuggestions
                name="Pitágoras Pereira"
                nickname="@pitágoras_math_fake"
              />,
              <FollowSuggestions
                name="Hermanoteu Lima"
                nickname="@hermanoteu_lima_fake"
              />,
            ]}
          />

          <List
            title="O que estão Acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;
