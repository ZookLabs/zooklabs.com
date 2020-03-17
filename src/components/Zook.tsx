import React, {Component} from 'react';
import ApiZook from "../api/zook";
import Trial from "./Trial";

export default class Zook extends Component {

    state = {
        loading: true,
        zook: {
            id: null,
            name: null,
            dateCreated: null,
            dateUploaded: null,
            height: null,
            length: null,
            width: null,
            weight: null,
            components: null,
            sprint: null,
            blockPush: null,
            hurdles: null,
            highJump: null,
            lap: null
        },
        id: null
    };


    constructor(props: any) {
        super(props);
        this.state = {
            ...this.state,
            id: props.match.params.id
        };
    }


    async componentDidMount() {
        ApiZook.get(this.state.id).then(value => this.setState({
            ...this.state,
            loading: false,
            zook: value,
        }));
    };

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        else {


            return (
                <div>
                    <div>
                        <div>
                            <img src={"static.zooklabs.com/zook/" + this.state.zook.id + "/image.png"}/>
                        </div>
                        <p>Zook Name: {this.state.zook.name}

                            Zook ID:{this.state.zook.id}

                            Owner: --
                            Birth/Adoption Date: {this.state.zook.dateCreated}
                            Date of Uploaded: {this.state.zook.dateUploaded}
                            Original Creator: --
                            Number of Downloads: --
                            Number of times viewed: --

                            <a href={"static.zooklabs.com/" + this.state.zook.id + "/" + this.state.zook.name + ".zook"}>Download</a>
                        </p>
                    </div>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th colSpan={2} align="left">Physical Information</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Height</td>
                                <td>{this.state.zook.height} cm</td>
                            </tr>
                            <tr>
                                <td>Length</td>
                                <td>{this.state.zook.length} cm</td>
                            </tr>
                            <tr>
                                <td>Width</td>
                                <td>{this.state.zook.width} cm</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{this.state.zook.weight} kg</td>
                            </tr>
                            <tr>
                                <td>Components</td>
                                <td>{this.state.zook.components}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th colSpan={3} align="left">Achievements</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>Trial</th>
                                <th>Result</th>
                                <th>Position</th>
                            </tr>
                            <Trial trail={this.state.zook.sprint} trialName="Sprint"/>
                            <Trial trail={this.state.zook.blockPush} trialName="BlockPush"/>
                            <Trial trail={this.state.zook.hurdles} trialName="Hurdles"/>
                            <Trial trail={this.state.zook.highJump} trialName="HighJump"/>
                            <Trial trail={this.state.zook.lap} trialName="Lap"/>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div>
                            <h2>Zook History</h2>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Zook</th>
                                    <th>Owner</th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        }
    };
}
