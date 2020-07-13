import '../styles/global.scss'
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";

const App = ({ Component, pageProps, apollo }) => {
    return (
        <ApolloProvider client={apollo}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
};

export default withData(App);