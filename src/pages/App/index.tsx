import { BrowserRouter } from "react-router-dom";
import { Router } from "../../router/Router";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../lib/apollo";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}
