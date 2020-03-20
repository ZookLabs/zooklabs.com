import React from 'react';
import {Header, Segment} from "semantic-ui-react";

function Home() {
    return (
        <Segment.Group>
            <Segment>
                <Header size="huge">
                    Welcome To Zook Labs!
                </Header>
            </Segment>
        </Segment.Group>
    );
}

export default Home;
