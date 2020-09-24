import React, {FC} from "react";
import {Table} from "semantic-ui-react";

export type TZookTrial = {
    score: number
    position: number
}

type ITrialProps = {
    trialName: string
    trial?: TZookTrial
    measurement: string
}

const Trial: FC<ITrialProps> = (props) => {
    if (props.trial) {
        return (
            <Table.Row>
                <Table.Cell>{props.trialName}</Table.Cell>
                <Table.Cell>{props.trial.score} {props.measurement}</Table.Cell>
                <Table.Cell>{props.trial.position === 2147483647 ? '--' : props.trial.position}</Table.Cell>
            </Table.Row>
        )
    } else {
        return (
            <Table.Row>
                <Table.Cell>{props.trialName}</Table.Cell>
                <Table.Cell>N/A</Table.Cell>
                <Table.Cell>N/A</Table.Cell>
            </Table.Row>
        )
    }
}

export default Trial