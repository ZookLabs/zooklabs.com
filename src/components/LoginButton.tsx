import {UserLoginState, UserState} from "../redux/userReducer";
import {Button, Menu as SMenu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import React, {FC} from "react";
import {useLogoutAction} from "../actions/AuthAction";
import {useSelector} from "react-redux";
import {ApplicationState} from "../redux/rootReducer";

const LoginButton: FC = () => {

    const userState = useSelector<ApplicationState, UserState>(state => state.user)

    const logout = useLogoutAction()

    switch (userState.state) {
        case UserLoginState.LoggedIn:
            let username = userState.username
            return <SMenu.Menu position='right'>
                <NavLink to={`/users/${username}`} activeClassName="active" className="item"
                         isActive={(_, {pathname}) => {
                             return `/users/${username}` === pathname
                         }}
                >{username}</NavLink>
                <SMenu.Item>
                    <Button active onClick={logout} primary>Logout</Button>
                </SMenu.Item>
            </SMenu.Menu>

        case UserLoginState.LoggedOut:
            return <SMenu.Menu position='right'>
                <SMenu.Item>
                    <NavLink to="/login" activeClassName="active" className="ui primary button">Login</NavLink>
                </SMenu.Item>
            </SMenu.Menu>

        case UserLoginState.Registering:
            return <SMenu.Menu position='right'>
                <SMenu.Item>
                    <Button active onClick={logout} color='red' primary>Cancel</Button>
                </SMenu.Item>
            </SMenu.Menu>
    }
}

export default LoginButton