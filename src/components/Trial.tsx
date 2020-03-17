import React from "react";

function Trial(props: any) {
    if (props.trail == null) {
        return (<tr>
            <td>{props.trialName}</td>
            <td>N/A</td>
            <td>N/A</td>
        </tr>);
    } else {
        return (<tr>
            <td>{props.trialName}</td>
            <td>{props.trail.score} cm/s</td>
            <td>{props.trail.position} pos</td>
        </tr>);
    }
}

export default Trial