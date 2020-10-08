import React, {FC, useEffect, useState} from "react"
import {Header, Image, Loader, Segment, Table} from "semantic-ui-react"
import axios from 'axios';

type TLeagueEntry = {
    zookId: number
    name: string
    score: number
    position: number
}

type TLeague = {
    updatedAt: string
    entries: TLeagueEntry[]
}


interface ILeagueProps {
    league: string
    title: string
    measurement: string
}

const League: FC<ILeagueProps> = (props) => {

    const [league, setLeague] = useState<TLeague>()

    useEffect(() => {
        axios.get<TLeague>(`/leagues/${props.league}`).then(response => {
            setLeague(response.data)
        })
    }, [props.league])

    const zookItems = (league: TLeague) => league.entries.map(({zookId, name, score, position}) => (
        <Table.Row key={zookId}>
            <Table.Cell><b>{position === 2147483647 ? '--' : position}</b></Table.Cell>
            <Table.Cell><b>{score}&nbsp;{props.measurement}</b></Table.Cell>
            <a href={"/zooks/" + zookId}
               style={{display: 'contents', color: "rgba(0,0,0,.87)", verticalAlign: "middle"}}>
                <Table.Cell>
                    <b>{name}</b>
                </Table.Cell>
            </a>
            <Table.Cell>
                {
                    position < 6 ?
                        <Image src={`${process.env.REACT_APP_STATIC_URL}/image/${zookId}`}
                               size={position === 1 ? "small" : "tiny"}/> : null
                }
            </Table.Cell>
        </Table.Row>
    ))

    const loader = <Loader active inline='centered'/>

    return <>
        <Segment.Group>
            <Segment>
                <Header size="huge">
                    {props.title} League
                </Header>
            </Segment>
            <Segment secondary inverted size='tiny' style={{paddingTop: "6px", paddingBottom: "6px"}}>
                <b>Updated : {league?.updatedAt}</b>
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
                        {league ? zookItems(league) : loader}
                    </Table.Body>
                </Table>
            </Segment>
        </Segment.Group>
    </>


}

export default League