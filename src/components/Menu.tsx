import React, {FC} from 'react'
import {Container, Icon, Menu as SMenu} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";
import LoginButton from "./LoginButton";


const zookRegex = /^\/zooks\/?\d*$/

const Menu: FC = () => {

    return (
        <Container>
            <SMenu>
                <NavLink to="/" activeClassName="active" className="item" exact={true} style={{padding: 10}}>
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt={"logo"}/><b
                    style={{paddingLeft: 10}}>ZookLabs</b></NavLink>
                <NavLink to="/zooks" activeClassName="active" className="item"
                         isActive={(_, {pathname}) => {
                             return zookRegex.test(pathname)
                         }}
                >Zooks</NavLink>
                <NavLink to="/leagues" activeClassName="active" className="item">Leagues</NavLink>
                <NavLink to="/zooks/upload" activeClassName="active" className="item" exact={true}>Upload</NavLink>
                <NavLink to="/users" activeClassName="active" className="item">Users</NavLink>
                <LoginButton/>
                <a className="discord item" href="http://discord.zooklabs.com" data-splitbee-event="External Link"
                   data-splitbee-event-destination="discord"><Icon name='discord'
                                                                   inverted/>Discord</a>
            </SMenu>
        </Container>
    )
}

export default Menu
