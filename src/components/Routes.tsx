import React, {FC, useEffect} from "react";
import {useSelector} from "react-redux";
import {ApplicationState} from "../redux/rootReducer";
import {isRegistering, UserState} from "../redux/userReducer";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Upload from "./Upload";
import Zook from "./Zook";
import Zooks from "./Zooks";
import Users from "./Users";
import User from "./User";
import Leagues from "./Leagues";
import League from "./League";
import Admin from "./Admin";
import Register from "./Register";


const Routes: FC = () => {

    const userState = useSelector<ApplicationState, UserState>(state => state.user)

    if (isRegistering(userState)) {
        return <Switch>
            <Route path="/login" exact component={Register}/>
            <Redirect to="/login"/>
        </Switch>
    } else {
        return <Switch>
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

    }

}

export default Routes