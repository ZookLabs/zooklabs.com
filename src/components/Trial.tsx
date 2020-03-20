import React from "react";
import {Table} from "semantic-ui-react";

function Trial(props: any) {
    if (props.trail == null) {
        return (
            <Table.Row>
                <Table.Cell>{props.trialName}</Table.Cell>
                <Table.Cell>N/A</Table.Cell>
                <Table.Cell>N/A</Table.Cell>
            </Table.Row>
        );
    } else {
        return (
            <Table.Row>
                <Table.Cell>{props.trialName}</Table.Cell>
                <Table.Cell>{props.trail.score} {props.measurement}</Table.Cell>
                <Table.Cell>{props.trail.position === 2147483647 ? '--' : props.trail.position}</Table.Cell>
            </Table.Row>
        );
    }
}

export default Trial