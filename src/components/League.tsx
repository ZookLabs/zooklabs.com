import React, {Component} from "react";
import ApiZook from "../api/zook";
import {Header, Image, Loader, Segment, Table} from "semantic-ui-react";

type LeagueProps = {
    league: string,
    title: string,
    measurement: string
}

export default class League extends Component<LeagueProps> {

    state = {
        loading: true,
        league: {
            updatedAt: '',
            entries: []
        },
    };

    async componentDidMount() {
        ApiZook.getLeague(this.props.league).then(value => this.setState({
            loading: false,
            league: value,
        }));
    };

    render() {
        if (this.state.loading) {
            return <Loader active inline='centered'/>;
        } else {
            const zookItems = this.state.league.entries.map(({zookId, name, score, position}) => (
                <Table.Row key={zookId}>
                    <Table.Cell><b>{position === 2147483647 ? '--' : position}</b></Table.Cell>
                    <Table.Cell><b>{score}&nbsp;{this.props.measurement}</b></Table.Cell>
                    <a href={"/zooks/" + zookId}
                       style={{display: 'contents', color: "rgba(0,0,0,.87)", verticalAlign: "middle"}}>
                        <Table.Cell>
                            <b>{name}</b>
                        </Table.Cell>
                    </a>
                    <Table.Cell>
                        {
                            position < 6 ?
                                <Image src={`http://static.zooklabs.com/zooks/${zookId}/image.png`}
                                       size={position === 1 ? "small" : "tiny"}/> : null
                        }
                    </Table.Cell>
                </Table.Row>
            ))
            return (
                <Segment.Group>
                    <Segment>
                        <Header size="huge">
                            {this.props.title} League
                        </Header>
                    </Segment>
                    <Segment secondary inverted size='tiny' style={{paddingTop: "6px", paddingBottom: "6px"}}>
                        <b>Updated : {this.state.league.updatedAt}</b>
                    </Segment>
                    <Segment>
                        <Table basic='very' selectable unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell collapsing>Position</Table.HeaderCell>
                                    <Table.HeaderCell collapsing>Score</Table.HeaderCell>
                                    <Table.HeaderCell collapsing>Zook</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {zookItems}
                            </Table.Body>
                        </Table>
                    </Segment>
                </Segment.Group>
            )
        }
    }
}