import React, {FC} from 'react'
import {Button, Container, Icon, Menu as SMenu} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";
import {UserLoginState, UserState} from "../redux/userReducer";
import {useSelector} from "react-redux";
import {ApplicationState} from "../redux/rootReducer";
import {useLogoutAction} from "../actions/AuthAction";


const zookRegex = /^\/zooks\/?\d*$/

const Menu: FC = () => {

    const userState = useSelector<ApplicationState, UserState>(state => state.user)

    const logout = useLogoutAction()

    const loginState = () => {

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
                        <Button active={true} onClick={logout} primary>Logout</Button>
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
                        <Button active={true} onClick={logout} color='red' primary>Cancel</Button>
                    </SMenu.Item>
                </SMenu.Menu>
        }
    }


    return (
        <Container>
            <SMenu>
                <NavLink to="/" activeClassName="active" className="item" exact={true} style={{padding: 10}}>
                    <img src={'logo.png'} alt={"logo"}/><b style={{paddingLeft: 10}}>ZookLabs</b></NavLink>
                <NavLink to="/zooks" activeClassName="active" className="item"
                         isActive={(_, {pathname}) => {
                             return zookRegex.test(pathname)
                         }}
                >Zooks</NavLink>
                <NavLink to="/leagues" activeClassName="active" className="item">Leagues</NavLink>
                <NavLink to="/zooks/upload" activeClassName="active" className="item" exact={true}>Upload</NavLink>
                <NavLink to="/users" activeClassName="active" className="item">Users</NavLink>
                {loginState()}
                <a className="discord item" href="http://discord.zooklabs.com"><Icon name='discord'
                                                                                     inverted/>Discord</a>
            </SMenu>
        </Container>
    )
}

export default Menu
