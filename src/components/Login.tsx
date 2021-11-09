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

    const location = useLocation()
    const history = useHistory()

    const [loading, setLoading] = useState<boolean>(true);

    const discordUrl = `https://discord.com/api/oauth2/authorize?client_id=${process.env.REACT_APP_DISCORD_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_DISCORD_CALLBACK_URL}&response_type=code&scope=identify`

    useEffect(() => {
        if (loading && userState.state === UserLoginState.LoggedOut) {
            let code = new URLSearchParams(location.search).get("code")
            if (code) {
                login(code).then(() => {
                    history.replace("/login")
                    setLoading(false)
                })
            } else {
                setLoading(false)
            }
        } else if (userState.state === UserLoginState.LoggedOut) {
            window.location.replace(discordUrl)
        } else if (userState.state === UserLoginState.LoggedIn) {
            setLoading(false)
        }

    }, [loading, login, location.search, history, userState.state, discordUrl])

    if (loading) {
        return <Segment><Loader active inline='centered'/></Segment>
    } else {
        switch (userState.state) {
            case UserLoginState.LoggedOut:
                return <Segment>
                    Redirecting to Discord.
                    <a href={discordUrl}>Not Redirecting? Click Here!</a>
                    <Loader active inline='centered'/>
                </Segment>

            case UserLoginState.Registering:
                return <Segment><Loader active inline='centered'/></Segment>
            case UserLoginState.LoggedIn:
                return <Redirect push to={`/users/${userState.username}`}/>
        }
    }
}

export default Login
