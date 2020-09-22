import React, {FC, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Zooks from "./components/Zooks";
import Login from "./components/Login";
import Leagues from "./components/Leagues";
import Zook from "./components/Zook";
import Upload from "./components/Upload";
import League from "./components/League";
import {useSelector} from "react-redux";
import User from "./components/User";
import Users from "./components/Users";
import Register from "./components/Register";
import {ApplicationState} from "./redux/rootReducer";
import {isRegistering, UserState} from "./redux/userReducer";
import {useLoginLoadAction} from "./actions/AuthAction";
import Menu from "./components/Menu";
import {Container} from "semantic-ui-react";

const App: FC = () => {

    const userState = useSelector<ApplicationState, UserState>(state => state.user)

    const loginLoad = useLoginLoadAction()

    useEffect(loginLoad, []);

    let registering = () => {
        return <>
            <Switch>
                <Route path="/login" exact component={Register}/>
                <Redirect to="/login"/>
            </Switch>
        </>
    }

    let routes = () => {
        return <>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" exact component={Login}/>

                <Route path="/zooks/upload" exact component={Upload}/>
                <Route path="/zooks/:id" component={Zook}/>
                <Route path="/zooks" exact component={Zooks}/>

                <Route path="/users" exact component={Users}/>
                <Route path="/users/:username" component={User}/>

                <Route path="/leagues" exact component={Leagues}/>
                <Route path="/leagues/sprint"
                       render={props => <League {...props} league="sprint" title="Sprint"
                                                measurement="cm/sec"/>}/>
                <Route path="/leagues/block_push"
                       render={props => <League {...props} league="block_push" title="Block Push"
                                                measurement="cm"/>}/>
                <Route path="/leagues/hurdles"
                       render={props => <League {...props} league="hurdles" title="Hurdles"
                                                measurement="cm/sec"/>}/>
                <Route path="/leagues/high_jump"
                       render={props => <League {...props} league="high_jump" title="High Jump"
                                                measurement="cm"/>}/>
                <Route path="/leagues/lap"
                       render={props => <League {...props} league="lap" title="Lap"
                                                measurement="sec"/>}/>
                <Redirect to="/"/>
            </Switch>
        </>
    }


    return (
        <Router>
            <Menu/>
            <Container>
                {isRegistering(userState) ? registering() : routes()}
            </Container>
        </Router>
    )
}

export default App