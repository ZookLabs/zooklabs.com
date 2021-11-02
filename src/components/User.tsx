import React, {FC, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import {Header, Icon, List, Loader, Segment, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {TUser} from "../types/TUser";
import UserApi from "../api/UserApi";

interface RouteParams {
    username: string
}

const User: FC = () => {
    let {username} = useParams<RouteParams>()
    let history = useHistory()

    const [user, setUser] = useState<TUser>();

    useEffect(() => {
        UserApi.getUser(username).then(response => {
                history.replace(response.data.identifier.username)
                setUser(response.data)
            }
        )
    }, [username, history])


    if (user) {
        const zookItems = user.zooks.map(({id, name}) => (
            <List.Item as={Link} to={`/zooks/${id}`} key={id}>
                <Icon name='bug' inverted/>
                <List.Content>
                    <List.Header>{id} - <b>{name}</b></List.Header>
                </List.Content>
            </List.Item>
        ))


        return <Segment.Group>
            <Segment clearing attached='top'>
                <Header floated="left" size='huge' style={{margin: 0}}>
                    User: {user.identifier.username}
                </Header>
            </Segment>
            <Table attached='top' celled striped unstackable color="green">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2'>About</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Signed Up</Table.Cell>
                        <Table.Cell>{user.about.signUpAt}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Last Logged In</Table.Cell>
                        <Table.Cell>{user.about.lastLoginAt}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Uploaded Zooks</Table.Cell>
                        <Table.Cell>{zookItems.length}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <Segment attached>
                <List divided selection size='large'>
                    {zookItems}
                </List>
            </Segment>
        </Segment.Group>
    } else {

        return <Segment><Loader active inline='centered'/></Segment>
    }
}

export default User