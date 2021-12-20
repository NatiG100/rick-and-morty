import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import './../main.css';
export default function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}