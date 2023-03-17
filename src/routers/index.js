import React, { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { App } from '../Components/App/App';
import { Content } from '../Components/Content/Content';
import { ErrorBoundary } from '../Components/ErrorBoundaryRouter.js/ErrorBoundaryRouter';
import { Homes } from '../Components/Homes';
import { PAGE, PATH } from '../Constants/paths';
import { LogIn } from '../Pages/LogIn/LogIn';
import { BaseURL } from '../Services/Constanst/links';
import { getHotels } from '../Services/HotelsCards/SearchAPI';

const Hotel = lazy(() => import('../Pages/Hotel'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      {/* TODO: style LogIn element */}
      <Route path={PATH.login} element={<LogIn />} />
      <Route path="/hotels/:id" element={<Hotel />} props="props" />
      <Route index element={<App />} />

      {/* <Route index element={<Content />} loader={async () => ({ hotels: getHotels(BaseURL) })} /> */}

      {/* </Route> */}
    </Route>,
  ),
);
