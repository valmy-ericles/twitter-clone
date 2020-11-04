import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon, 
  CakeIcon,
  Followage,
  EditButton
} from './styles';

import Feed from '../Feed';

function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Valmy Machado</h1>
        <h2>@valmy_machado</h2>

        <p>
          Full Stack Developer at <a href="https://blackflag.com">@blackflag</a>
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Bahia, Brasil
          </li>
          
          <li>
            <CakeIcon/>
            Nascido em 16 de setembro de 1996
          </li>
        </ul>

        <Followage>
          <span>
            <strong>53 </strong> seguindo
          </span>
          <span>
            <strong>22 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      
      <Feed/>
    </Container>
  )
}

export default ProfilePage;