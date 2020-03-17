import {Link} from "react-router-dom";
import React from "react";

function Leagues() {
    return (
        <div>
            <h2>Leagues</h2>
            <ul>
                <li>
                    <Link to="/leagues/sprint">Sprint</Link>
                </li>
                <li>
                    <Link to="/leagues/blockpush">BlockPush</Link>
                </li>
                <li>
                    <Link to="/leagues/hurdles">Hurdles</Link>
                </li>
                <li>
                    <Link to="/leagues/highjump">HighJump</Link>
                </li>
                <li>
                    <Link to="/leagues/lap">Lap</Link>
                </li>
            </ul>
        </div>
    );
}

export default Leagues