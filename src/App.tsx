import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Menu from './components/Menu'
import Home from "./components/Home";
import {Container} from "semantic-ui-react";
import Zooks from "./components/Zooks";
import Leagues from "./components/Leagues";
import Zook from "./components/Zook";
import Upload from "./components/Upload";
import League from "./components/League";


export default function App() {
    return (
        <Router>
            <Menu/>
            <Container>
                <Switch>
                    <Route path="/" exact children={Home}/>
                    <Route path="/zooks/upload" exact component={Upload}/>
                    <Route path="/zooks/:id" component={Zook}/>
                    <Route path="/zooks" exact component={Zooks}/>
                    <Route path="/leagues" exact component={Leagues}/>
                    <Route path="/leagues/sprint"
                           render={props => <League {...props} league="sprint" title="Sprint" measurement="cm/sec"/>}/>
                    <Route path="/leagues/block_push"
                           render={props => <League {...props} league="block_push" title="Block Push" measurement="cm"/>}/>
                    <Route path="/leagues/hurdles"
                           render={props => <League {...props} league="hurdles" title="Hurdles" measurement="cm/sec"/>}/>
                    <Route path="/leagues/high_jump"
                           render={props => <League {...props} league="high_jump" title="High Jump" measurement="cm"/>}/>
                    <Route path="/leagues/lap"
                           render={props => <League {...props} league="lap" title="Lap" measurement="sec"/>}/>
                </Switch>
            </Container>
        </Router>
    );
}
