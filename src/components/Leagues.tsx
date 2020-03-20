import {Link} from "react-router-dom";
import React from "react";
import {Header, Segment, Icon} from "semantic-ui-react";

function Leagues() {
    return (
        <Segment.Group>
            <Segment>
                <Header size="huge">
                    Leagues
                </Header>
            </Segment>
            <Segment>
                <Icon name='exclamation triangle'/> Work In Progress
            </Segment>
        </Segment.Group>
    );
}

export default Leagues