import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Menu from './components/Menu'
import Home from "./components/Home";
import {Container, Segment} from "semantic-ui-react";
import Zooks from "./components/Zooks";
import Leagues from "./components/Leagues";


export default function App() {
    return (
            <Router>
                <Menu/>
                <Container>
                    <Switch>
                        <Route path="/" exact children={Home}/>
                        {/*<Route path="/zook/upload" component={Upload}/>*/}
                        {/*<Route path="/zook/:id" component={Zook}/>*/}
                        <Route path="/zook" exact component={Zooks}/>
                        <Route path="/leagues" exact children={Leagues}/>
                        <Route path="/leagues/sprint" children={Sprint}/>
                        <Route path="/leagues/blockpush" children={BlockPush}/>
                        <Route path="/leagues/hurdles" children={Hurdles}/>
                        <Route path="/leagues/highjump" children={HighJump}/>
                        <Route path="/leagues/lap" children={Lap}/>
                    </Switch>
                </Container>
            </Router>
    );
}


function Sprint() {
    return (
        <div>
            <h3>Sprint</h3>
        </div>
    );
}

function BlockPush() {
    return (
        <div>
            <h3>BlockPush</h3>
        </div>
    );
}

function Hurdles() {
    return (
        <div>
            <h3>Hurdles</h3>
        </div>
    );
}

function HighJump() {
    return (
        <div>
            <h3>HighJump</h3>
        </div>
    );
}

function Lap() {
    return (
        <div>
            <h3>Lap</h3>
        </div>
    );
}