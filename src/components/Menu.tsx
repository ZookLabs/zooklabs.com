import React, {Component} from 'react'
import {Container, Menu as SMenu} from 'semantic-ui-react'
import {Link, withRouter} from "react-router-dom";

class Menu extends Component {
    state = {activeItem: '/'}

    constructor(props: any) {
        super(props);
        this.state = {activeItem: props.location.pathname}
    }


    handleItemClick = (e: any, {to}: any) => this.setState({activeItem: to})


    render() {
        const {activeItem} = this.state

        return (
            <Container>
                <SMenu>
                    <SMenu.Item
                        as={Link}
                        to='/'
                        active={activeItem === '/'}
                        onClick={this.handleItemClick}>
                        ZookLabs
                    </SMenu.Item>

                    <SMenu.Item
                        as={Link}
                        to='/zook'
                        active={activeItem === '/zook'}
                        onClick={this.handleItemClick}>
                        Zooks
                    </SMenu.Item>

                    <SMenu.Item
                        as={Link}
                        to='/leagues'
                        active={activeItem === '/leagues'}
                        onClick={this.handleItemClick}>
                        Leagues
                    </SMenu.Item>

                    <SMenu.Item
                        as={Link}
                        to='/upload'
                        active={activeItem === '/upload'}
                        onClick={this.handleItemClick}>
                        Leagues
                    </SMenu.Item>
                </SMenu>
            </Container>
        )
    }
}

// @ts-ignore
export default withRouter(Menu)