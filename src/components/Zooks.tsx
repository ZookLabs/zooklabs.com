import React, {Component} from 'react';
import ApiZook from "../api/zook";
import {Header, Icon, List, Loader, Segment} from "semantic-ui-react";

export default class Zooks extends Component {

    state = {
        loading: true,
        zooks: [],
    };

    async componentDidMount() {
        ApiZook.getList().then(value => this.setState({
            loading: false,
            zooks: value,
        }));
    };

    render() {

        if (this.state.loading) {
            return <Loader active inline='centered'/>;
        } else {
            const zookItems = this.state.zooks.map(({id, name}) => (
                <List.Item href={"/zooks/" + id}>
                    <Icon name='bug' inverted/>
                    <List.Content>
                        <List.Header>{id} - <b>{name}</b></List.Header>
                    </List.Content>
                </List.Item>
            ))
            return (
                <Segment.Group>
                    <Segment>
                        <Header size="huge">
                            Zooks
                        </Header>
                    </Segment>
                    <Segment>
                        <List divided selection size='large'>
                            {zookItems}
                        </List>
                    </Segment>
                </Segment.Group>

            )
        }
    }
}