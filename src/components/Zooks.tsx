import React, {Component} from 'react';
import ApiZook from "../api/zook";
import {List, Loader} from "semantic-ui-react";

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
                <List.Item as='a' href={"/zooks/" + id}>
                    <List.Header>{name}</List.Header>
                </List.Item>
            ))
            return (
                <List divided relaxed>
                    {zookItems}


                </List>

            )
        }
    }
}