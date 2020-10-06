import React from 'react';
import {Header, Segment} from "semantic-ui-react";

function Home() {
    return (
        <Segment.Group>
            <Segment>
                <Header size="huge">
                    Welcome To ZookLabs!
                </Header>
                {process.env.REACT_APP_WELCOME_MESSAGE}
            </Segment>
        </Segment.Group>
    );
}

export default Home;
