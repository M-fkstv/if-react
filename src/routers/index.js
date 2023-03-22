import React, { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { App } from '../Components/App/App';
import { ErrorBoundary } from '../Components/ErrorBoundaryRouter.js/ErrorBoundaryRouter';
import { LogIn } from '../Pages/LogIn/LogIn';

import { SystemLayuot } from '../Context/SystemLayuotContext';

import { PATH } from '../Constants/paths';

const Hotel = lazy(() => import('../Pages/Hotel'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route element={<SystemLayuot />}>
        <Route path={PATH.login} element={<LogIn />} />
        <Route index element={<App />} />
        <Route path={PATH.hotels} element={<Hotel />} />
      </Route>
    </Route>,
  ),
);