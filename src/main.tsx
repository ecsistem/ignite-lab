import { ApolloProvider } from "@apollo/client";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/tailwind.css'
import App from './pages/Home'
import { client } from "./lib/apollo";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
  </React.StrictMode>
);
