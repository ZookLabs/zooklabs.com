import React, {FC, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Menu from "./components/Menu";
import {Container} from "semantic-ui-react";
import Routes from "./components/Routes";
import {useLoginLoadAction} from "./actions/AuthAction";
import splitbee from '@splitbee/web';

const App: FC = () => {
    splitbee.init({disableCookie: true})

    const loginLoadAction = useLoginLoadAction()

    useEffect(loginLoadAction, [loginLoadAction]);

    return (
        <Router>
            <Menu/>
            <Container>
                <Routes/>
            </Container>
        </Router>
    )
}

export default App