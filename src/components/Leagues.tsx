import React, {Component} from "react";
import {Card, Grid, Header, Icon, Segment, Image} from "semantic-ui-react";
import ApiZook from "../api/zook";


export default class Leagues extends Component{


    state = {
        loading: true,
        leagues: {
            "block_push": null,
            "sprint": null,
            "hurdles": null,
            "lap": null,
            "high_jump": null
        },
    };

    constructor(props: any) {
        super(props);
        this.leagueCard = this.leagueCard.bind(this);
    }

    async componentDidMount() {
        ApiZook.getLeagues().then(value => this.setState({
            loading: false,
            leagues: value,
        }));
    };

    leagueCard(league: any, id: number, name: string, description: string)
    {
        return (
            <Card as='a' href={'/leagues/'+league}>
                <Image src={'http://static.zooklabs.com/zooks/' + id  + '/image.png'} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }

     render() {

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
                                 {this.leagueCard('sprint', this.state.leagues.sprint || 0, 'Sprint', 'Which is the fastest Zook in the world? Check the Sprint Trial League.')}
                             </Grid.Column>
                             <Grid.Column>
                                 {this.leagueCard('high_jump', this.state.leagues.high_jump || 0, 'High Jump', 'The Zooks are jumping higher and higher, but which is the highest?')}
                             </Grid.Column>
                             <Grid.Column>
                                 {this.leagueCard('lap', this.state.leagues.lap || 0, 'Single Lap', 'Whose Zook can run a lap faster than all the other Zooks?')}
                             </Grid.Column>
                         </Grid.Row>
                         <Grid.Row columns={3}>
                             <Grid.Column>
                                 {this.leagueCard('block_push', this.state.leagues.block_push || 0, 'Block Push', 'There\'s some stiff competition in the Block Push Trial League...')}
                             </Grid.Column>
                             <Grid.Column>
                                 {this.leagueCard('hurdles', this.state.leagues.hurdles || 0, 'Hurdles', 'Which Zook does the best at getting over the hurdles?')}
                             </Grid.Column>
                         </Grid.Row>
                     </Grid>

                 </Segment>
             </Segment.Group>
         );
     }
}

