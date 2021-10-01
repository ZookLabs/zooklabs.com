import React, {FC, useEffect} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {useLoginLoadAction} from "./actions/AuthAction";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Redirect} from "react-router-dom";
import Register from "./components/Register";
import {isRegistering, UserState} from "./redux/userReducer";
import {ApplicationState} from "./redux/rootReducer";
import Home from "./components/Home";
import Login from "./components/Login";
import League from "./components/League";
import Leagues from "./components/Leagues";
import Users from "./components/Users";
import Zook from "./components/Zook";
import Upload from "./components/Upload";
import Zooks from "./components/Zooks";
import Admin from "./components/Admin";
import Menu from "./components/Menu";
import {Container} from "semantic-ui-react";
import User from "./components/User";


const App: FC = () => {

    const userState = useSelector<ApplicationState, UserState>(state => state.user)

    const loginLoad = useLoginLoadAction()

    useEffect(loginLoad, [loginLoad]);

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

                <Route path="/leagues/overall_league"
                       render={props => <League {...props} league="overall_league" title="Overall"
                                                measurement=""/>}/>

                <Route path="/admin" exact component={Admin}/>

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