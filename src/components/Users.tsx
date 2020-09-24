import React, {Component} from 'react';
import {Header, Icon, List, Loader, Segment} from "semantic-ui-react";
import axios from 'axios';
import {TUserIdentifier} from "../types/TUserIdentifier";
import {Link} from "react-router-dom";


interface IUsersProps {

}

interface IUsersState {
    loading: boolean
    users: TUserIdentifier[],
}

export default class Users extends Component<IUsersProps, IUsersState> {
    state = {
        loading: true,
        users: []
    }

    async componentDidMount() {
        axios.get<TUserIdentifier[]>('/users').then(response =>
            this.setState({
                loading: false,
                users: response.data
            })
        )
    }

    render() {
        if (this.state.loading) {
            return <Loader active inline='centered'/>;
        } else {
            const userItems = this.state.users.map(({username}) => (
                <List.Item as={Link} to={`/users/${username}`} key={username}>
                    <Icon name='user' inverted/>
                    <List.Content>
                        <List.Header>{username}</List.Header>
                    </List.Content>
                </List.Item>
            ))
            return (
                <Segment.Group>
                    <Segment>
                        <Header size="huge">
                            Users
                        </Header>
                    </Segment>
                    <Segment>
                        <List divided selection size='large'>
                            {userItems}
                        </List>
                    </Segment>
                </Segment.Group>
            )
        }
    }
}