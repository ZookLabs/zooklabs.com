import React, {FC} from "react";
import {Label, Table} from "semantic-ui-react";

export type TZookTrial = {
    score: number
    position: number
    disqualified: boolean
}

type ITrialProps = {
    trialName: string
    trial?: TZookTrial
    measurement: string
}

const Trial: FC<ITrialProps> = (props) => {
    if (props.trial) {
        const position = (trial: TZookTrial) => {

            if (trial.disqualified) {
                return <Label color="red">DISQUALIFIED</Label>
            } else if (trial.position === 2147483647) {
                return '--'
            }
            return trial.position
        }
        return (
            <Table.Row>
                <Table.Cell>{props.trialName}</Table.Cell>
                <Table.Cell>{props.trial.score} {props.measurement}</Table.Cell>
                <Table.Cell>{position(props.trial)}</Table.Cell>
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