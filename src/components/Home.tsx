import React from 'react';
import {Divider, Grid, Header, Image, Item, List, Segment} from "semantic-ui-react";

function Home() {
    return (
        <Segment.Group>
            <Segment>
                <Header size="huge">
                    Welcome To ZookLabs!
                </Header>
                {process.env.REACT_APP_WELCOME_MESSAGE}
                <Divider></Divider>

                <Grid columns={2} stackable textAlign='left' verticalAlign='top'>
                    <Divider vertical={true} hidden={true}></Divider>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <List>
                                <Item>
                                    This site allows you to upload, view and download zooks much like how you could on
                                    the BBC site
                                    back in the day!
                                </Item>
                                <Item>
                                    You can either upload Zooks anonymously or register a username to upload them under
                                    (requires a
                                    Discord account).
                                </Item>
                                <Item>
                                    If your zook has any trial scores, they will be ranked on the leagues, and if your
                                    zook has been
                                    tested on every trial, it will be ranked in the overall league!
                                </Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={`${process.env.PUBLIC_URL}/turtle_white.png`}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Segment>

        </Segment.Group>
    );
}

export default Home;
