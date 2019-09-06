import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.js';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { IntlProvider } from 'react-intl';
import  { BreakpointProvider } from 'react-socks';
import { ThemeContextProvider } from './ThemeContext';
import * as serviceWorker from './serviceWorker';

// the uri where the server is running
const client = new ApolloClient({
    uri: process.env.REACT_APP_PRODUCTION_URI || "http://localhost:4000" 
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <BreakpointProvider>
            <ThemeContextProvider>
                <IntlProvider>
                    <App />
                </IntlProvider>
            </ThemeContextProvider>
        </BreakpointProvider>
    </ApolloProvider>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
