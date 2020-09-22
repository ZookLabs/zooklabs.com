import React, {Component} from 'react';
import {Header, Icon, List, Loader, Segment} from "semantic-ui-react";
import axios from 'axios';
import {TZookIdentifier} from "../types/TZookIdentifier";

interface IZooksProps {

}

interface IZooksState {
    loading: boolean
    zooks: TZookIdentifier[],
}

export default class Zooks extends Component<IZooksProps,IZooksState> {
    state = {
        loading: true,
        zooks: []
    }

    async componentDidMount() {
        axios.get<TZookIdentifier[]>('/zooks').then(response =>
            this.setState({
                loading: false,
                zooks: response.data
            })
        )
    }

    render() {
        if (this.state.loading) {
            return <Loader active inline='centered'/>;
        } else {
            const zookItems = this.state.zooks.map(({id, name}) => (
                <List.Item href={"/zooks/" + id} key={id}>
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