import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import {
  HeaderStyled,
  NavLinkStyled,
  NavStyled,
  MainContainer,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <main>
      <MainContainer>
        <HeaderStyled>
          <NavStyled>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </NavStyled>
        </HeaderStyled>
        <Suspense fallback={<ScaleLoader color="#36d7b7" />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </main>
  );
};

export default SharedLayout;
