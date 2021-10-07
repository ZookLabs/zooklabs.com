import React, {FC, useEffect, useState} from "react";
import {Card, Grid, Header, Image, Placeholder, Segment} from "semantic-ui-react";
import axios from "axios";
import {Link} from "react-router-dom";

type TLeagues = {
    block_push: number
    sprint: number
    hurdles: number
    lap: number
    high_jump: number
    overall_league: number
}

const Leagues: FC = () => {
    const [leagues, setLeagues] = useState<TLeagues>()

    useEffect(() => {
        axios.get<TLeagues>('/leagues').then(response => {
                setLeagues(response.data)
            }
        )
    }, [])

    let leagueCard = (league: string, id: number | undefined, name: string, description: string) => {
        return (
            <Card as={Link} to={`/leagues/${league}`}>
                {id ? (
                    <Image src={`${process.env.REACT_APP_STATIC_URL}/zooks/${id}/image.png`} wrapped ui={false}/>
                ) : (
                    <Placeholder>
                        <Placeholder.Image square/>
                    </Placeholder>
                )}
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>

            </Card>
        )
    }

    return (
        <Segment.Group>
            <Segment>
                <Header size="huge">
                    Leagues
                </Header>
            </Segment>
            <Segment>
                <Grid stackable>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            {leagueCard('sprint', leagues?.sprint, 'Sprint', 'Which is the fastest Zook in the world? Check the Sprint Trial League.')}
                        </Grid.Column>
                        <Grid.Column>
                            {leagueCard('high_jump', leagues?.high_jump, 'High Jump', 'The Zooks are jumping higher and higher, but which is the highest?')}
                        </Grid.Column>
                        <Grid.Column>
                            {leagueCard('lap', leagues?.lap, 'Single Lap', 'Whose Zook can run a lap faster than all the other Zooks?')}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            {leagueCard('block_push', leagues?.block_push, 'Block Push', 'There\'s some stiff competition in the Block Push Trial League...')}
                        </Grid.Column>
                        <Grid.Column>
                            {leagueCard('hurdles', leagues?.hurdles, 'Hurdles', 'Which Zook does the best at getting over the hurdles?')}
                        </Grid.Column>
                        <Grid.Column>
                            {leagueCard('overall_league', leagues?.overall_league, 'Overall', 'Which Zook is has the best scores across all the leagues?')}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Segment>
        </Segment.Group>
    )
}

export default Leagues