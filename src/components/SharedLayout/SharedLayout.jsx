import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';

const SharedLayout = () => {
  return (
    <main>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<ScaleLoader color="#36d7b7" />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default SharedLayout;
