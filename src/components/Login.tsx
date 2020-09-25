import React, {FC, useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router";

import {ApplicationState} from "../redux/rootReducer";
import {useSelector} from "react-redux";
import {Loader, Segment} from "semantic-ui-react";
import {Redirect} from "react-router-dom";
import {UserLoginState, UserState} from "../redux/userReducer";
import {useLoginAction} from "../actions/AuthAction";

const Login: FC = () => {

    const userState = useSelector<ApplicationState, UserState>(state => state.user)

    const login: (code: string) => Promise<void> = useLoginAction()

    let location = useLocation()
    let history = useHistory()

    let code = new URLSearchParams(location.search).get("code")

    let loggingInState = () => {
        if (code) {
            history.replace("/login")
            return true
        } else {
            return false
        }
    }

    const [loggingIn, setLoggingIn] = useState<boolean>(loggingInState());

    useEffect(() => {
        if (code) { login(code).then(() => setLoggingIn(false))}
    }, [code,login])

    if (loggingIn) {
        return <Segment><Loader active inline='centered'/></Segment>
    } else {
        switch (userState.state) {
            case UserLoginState.LoggedOut:
                let discordUrl = `https://discord.com/api/oauth2/authorize?client_id=${process.env.REACT_APP_DISCORD_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_DISCORD_CALLBACK_URL}&response_type=code&scope=identify`
                return <Segment>
                    <script>{window.location.href = discordUrl}</script>
                    Redirecting to Discord.
                    <a href={discordUrl}>Not Redirecting? Click Here!</a>
                    <Loader active inline='centered'/>
                </Segment>

            case UserLoginState.Registering:
                return <Segment><Loader active inline='centered'/></Segment>
            case UserLoginState.LoggedIn:
                return <Redirect to={`/users/${userState.username}`}/>
        }
    }
}

export default Login
