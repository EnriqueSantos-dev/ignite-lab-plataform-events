import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { MenuContextProvider } from './context/MenuContext';

const RootElement = document.getElementById('root')!;
const root = createRoot(RootElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <MenuContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MenuContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);
