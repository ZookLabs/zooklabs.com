import React, {FC, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Menu from "./components/Menu";
import {Container} from "semantic-ui-react";
import Routes from "./components/Routes";
import {useLoginLoadAction} from "./actions/AuthAction";


const App: FC = () => {

    useEffect(useLoginLoadAction(), []);

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