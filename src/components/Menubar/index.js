import React from 'react';

import Button from '../Button';

import { 
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BottomSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

function Menubar() {
  return (
    <Container>
      <TopSide>
        <Logo/>

        <MenuButton>
          <HomeIcon/>
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon/>
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon/>
          <span>Mensagens</span>
        </MenuButton>
        
        <MenuButton>
          <FavoriteIcon/>
          <span>Favoritados</span>
        </MenuButton>
        
        <MenuButton className="active">
          <ProfileIcon/>
          <span>Perifil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BottomSide>
        <Avatar/>

        <ProfileData>
          <strong>Valmy Machado</strong>
          <span>@Valms_Eric</span>
        </ProfileData>

        <ExitIcon/>
      </BottomSide>
    </Container>
  );
}

export default Menubar;