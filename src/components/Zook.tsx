import React, {FC, useEffect, useState} from 'react';
import Trial, {TZookTrial} from "./Trial";
import {Grid, Header, Loader, Segment, Table} from 'semantic-ui-react';
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import {useParams} from "react-router";
import axios from 'axios';
import {Link} from "react-router-dom";
import {TZookIdentifier} from "../types/TZookIdentifier";

type TZookOwner = {
    id: string
    username: string
}

type TZookAbout = {
    owner?: TZookOwner
    dateCreated: string
    dateUploaded: string
}

type TZookPhysical = {
    height: number
    length: number
    width: number
    weight: number
    components: number
}

type TZookAchievement = {
    sprint?: TZookTrial
    blockPush?: TZookTrial
    hurdles?: TZookTrial
    highJump?: TZookTrial
    lap?: TZookTrial
}

type TZook = {
    identifier: TZookIdentifier
    about: TZookAbout
    physical: TZookPhysical
    achievement: TZookAchievement
}

interface RouteParams {
    id: string
}


const Zook: FC = () => {
    const [zook, setZook] = useState<TZook>();
    let {id} = useParams<RouteParams>()

    useEffect(() => {
        axios.get<TZook>(`zooks/${id}`).then(response =>
            setZook(response.data)
        )
    },[id])


    if (!zook) {
        return <Loader active inline='centered'/>;
    } else {

        const owner = () => {
            if (zook.about.owner) {
                return (<Table.Cell>
                    <Link to={`/users/${zook.about.owner.username}`}>{zook.about.owner.username}</Link>
                </Table.Cell>)
            } else {
                return <Table.Cell>Anonymous</Table.Cell>
            }
        }
        return (
            <Segment.Group>
                <Segment clearing attached='top'>
                    <Header floated="left" size='huge' style={{margin: 0}}>
                        Zook Name: {zook.identifier.name}
                    </Header>
                    <Header floated="right" size='huge'>
                        Zook ID: {zook.identifier.id}
                    </Header>
                </Segment>
                <Segment attached>
                    <Grid stackable>
                        <div className="two column row ui segment attached">
                            <Grid.Column style={{flex: "0"}}>
                                <img src={"http://static.zooklabs.com/zooks/" + zook.identifier.id + "/image.png"}
                                     style={{minWidth: 256, maxWidth: 256}} alt={"" + zook.identifier.name}/>
                                <Button color='blue' as="a" icon="download" fluid content="Download Zook"
                                        href={"http://static.zooklabs.com/zooks/" + zook.identifier.id + "/" + zook.identifier.name + ".zook"}/>
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
                                            {owner()}
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Birth/Adoption date</Table.Cell>
                                            <Table.Cell>{zook.about.dateCreated}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Date of Upload</Table.Cell>
                                            <Table.Cell>{zook.about.dateUploaded}</Table.Cell>
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
                                            <Table.HeaderCell colSpan='2'>Physical Information</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>Height</Table.Cell>
                                            <Table.Cell>{zook.physical.height} cm</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Length</Table.Cell>
                                            <Table.Cell>{zook.physical.length} cm</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Width</Table.Cell>
                                            <Table.Cell>{zook.physical.width} cm</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Weight</Table.Cell>
                                            <Table.Cell>{zook.physical.weight} kg</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Components</Table.Cell>
                                            <Table.Cell>{zook.physical.components}</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                                <Table celled striped unstackable color="green">
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell colSpan={3}>Achievements</Table.HeaderCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.HeaderCell>Trial</Table.HeaderCell>
                                            <Table.HeaderCell>Result</Table.HeaderCell>
                                            <Table.HeaderCell>Position</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <Trial trial={zook.achievement.sprint} trialName="Sprint"
                                               measurement="cm/sec"/>
                                        <Trial trial={zook.achievement.blockPush} trialName="Block Push"
                                               measurement="cm"/>
                                        <Trial trial={zook.achievement.hurdles} trialName="Hurdles"
                                               measurement="cm/sec"/>
                                        <Trial trial={zook.achievement.highJump} trialName="High Jump"
                                               measurement="cm"/>
                                        <Trial trial={zook.achievement.lap} trialName="Lap"
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
}

export default Zook