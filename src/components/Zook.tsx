import React, {Component} from 'react';
import ApiZook from "../api/zook";
import Trial from "./Trial";
import {Grid, Table, Segment, Header, Loader, Image} from 'semantic-ui-react';
import Button from "semantic-ui-react/dist/commonjs/elements/Button";

export default class Zook extends Component {

    state = {
        loading: true,
        zook: {
            id: null,
            name: null,
            dateCreated: null,
            dateUploaded: null,
            height: null,
            length: null,
            width: null,
            weight: null,
            components: null,
            sprint: null,
            blockPush: null,
            hurdles: null,
            highJump: null,
            lap: null
        },
        id: null
    };


    constructor(props: any) {
        super(props);
        this.state = {
            ...this.state,
            id: props.match.params.id
        };
    }


    async componentDidMount() {
        ApiZook.get(this.state.id).then(value => this.setState({
            ...this.state,
            loading: false,
            zook: value,
        }));
    };

    render() {
        if (this.state.loading) {
            return <Loader active inline='centered'/>;
        } else {

            return (
                <Segment.Group>
                    <Segment clearing attached='top'>
                        <Header floated="left" size='huge' style={{margin: 0}}>
                            Zook Name: {this.state.zook.name}
                        </Header>
                        <Header floated="right" size='huge'>
                            Zook ID: {this.state.zook.id}
                        </Header>
                    </Segment>
                    <Segment attached>
                        <Grid stackable>
                            <div className="two column row ui segment attached">
                                <Grid.Column style={{flex: "0"}}>
                                    <img src={"http://static.zooklabs.com/zooks/" + this.state.zook.id + "/image.png"}
                                         style={{minWidth: 256, maxWidth: 256}}/>
                                    <Button color='blue' as="a" icon="download" fluid content="Download Zook"
                                            href={"http://static.zooklabs.com/zooks/" + this.state.zook.id + "/" + this.state.zook.name + ".zook"}/>
                                </Grid.Column>
                                <Grid.Column style={{flex: "1"}}>
                                    <Table celled striped unstackable color="green">
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell colSpan='2'>About</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell>Owner</Table.Cell>
                                                <Table.Cell>N/A</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Birth/Adoption date</Table.Cell>
                                                <Table.Cell>{this.state.zook.dateCreated}</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Date of Upload</Table.Cell>
                                                <Table.Cell>{this.state.zook.dateUploaded}</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Number of Downloads</Table.Cell>
                                                <Table.Cell>N/A</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Number of times viewed</Table.Cell>
                                                <Table.Cell>N/A</Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                </Grid.Column>
                            </div>
                            <div className="column row ui segment attached">
                                <Grid.Column>
                                    <Table celled striped unstackable color="green">
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell colSpan='2'>Physical
                                                    Information</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell>Height</Table.Cell>
                                                <Table.Cell>{this.state.zook.height} cm</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Length</Table.Cell>
                                                <Table.Cell>{this.state.zook.length} cm</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Width</Table.Cell>
                                                <Table.Cell>{this.state.zook.width} cm</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Weight</Table.Cell>
                                                <Table.Cell>{this.state.zook.weight} kg</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Components</Table.Cell>
                                                <Table.Cell>{this.state.zook.components}</Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                    <Table celled striped unstackable color="green">
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell colSpan={3}>Achievements</Table.HeaderCell>
                                            </Table.Row>
                                            <Table.Row stackable={false}>
                                                <Table.HeaderCell>Trial</Table.HeaderCell>
                                                <Table.HeaderCell>Result</Table.HeaderCell>
                                                <Table.HeaderCell>Position</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            <Trial trail={this.state.zook.sprint} trialName="Sprint"
                                                   measurement="cm/sec"/>
                                            <Trial trail={this.state.zook.blockPush} trialName="Block Push"
                                                   measurement="cm"/>
                                            <Trial trail={this.state.zook.hurdles} trialName="Hurdles"
                                                   measurement="cm/sec"/>
                                            <Trial trail={this.state.zook.highJump} trialName="High Jump"
                                                   measurement="cm"/>
                                            <Trial trail={this.state.zook.lap} trialName="Lap"
                                                   measurement="sec"/>
                                        </Table.Body>
                                    </Table>
                                </Grid.Column>
                            </div>
                        </Grid>
                    </Segment>
                </Segment.Group>
            )
        }
    };
}
