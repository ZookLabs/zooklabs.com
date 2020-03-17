import React, {Component} from 'react';
import ApiZook from "../api/zook";

export default class Zook extends Component {

    state = {
        loading: true,
        zook: null,
    };


    id = this.props.match.params.id;



    async componentDidMount() {
        ApiZook.get(this.id).then(value => this.setState({
            loading: false,
            zook: value,
        }));
    };

    Trial(props) {
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

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        return (
            <div>
                <div>
                    <div>
                        <img src={"static.zooklabs.com/" + this.state.zook.id + "/image.png"}/>
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
                            <th colSpan="2" align="left">Physical Information</th>
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
                            <th colSpan="3" align="left">Achievements</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>Trial</th>
                            <th>Result</th>
                            <th>Position</th>
                        </tr>
                        <this.Trial trail={this.state.zook.sprint} trialName="Sprint"/>
                        <this.Trial trail={this.state.zook.blockPush} trialName="BlockPush"/>
                        <this.Trial trail={this.state.zook.hurdles} trialName="Hurdles"/>
                        <this.Trial trail={this.state.zook.highJump} trialName="HighJump"/>
                        <this.Trial trail={this.state.zook.lap} trialName="Lap"/>
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
    };
}

// export default Zook;

//
// function Zook() {
//     return (
//         <div style="display: table;
//         width: 100%;">
//             <div style="display: table-row;">
//                 <div style="width: 256px;
//                 height: 256px;
//                 display: inline-block;">
//                     {/*<img src="@imageLink"/>*/}
//                 </div>
//                 <div style="display: inline-block;
//                 height: 256px;
//                 vertical-align: top;">
//                     Zook Name: @zookView.name<br>
//                     Zook ID:@zookView.id<br>
//                     <br>
//                         Owner: --<br>
//                         Birth/Adoption Date: @{
//                         zookView.dateCreated
//                     }<br>
//                         Date of Uploaded: @zookView.dateUploaded<br>
//                         Original Creator: --<br>
//                         Number of Downloads: --<br>
//                         Number of times viewed: --<br>
//                         <br>
//                             <a href="@zookLink">Download</a><br>
//                 </div>
//             </div>
//             <div style="display: table-row;">
//                 <table style="width: 500px">
//                     <tr>
//                         <th colSpan="2" style="height: 30px" align="left">Physical Information</th>
//                     </tr>
//                     <tr>
//                         <td>Height</td>
//                         <td>@zookView.height cm</td>
//                     </tr>
//                     <tr>
//                         <td>Length</td>
//                         <td>@zookView.length cm</td>
//                     </tr>
//                     <tr>
//                         <td>Width</td>
//                         <td>@zookView.width cm</td>
//                     </tr>
//                     <tr>
//                         <td>Weight</td>
//                         <td>@zookView.weight kg</td>
//                     </tr>
//                     <tr>
//                         <td>Components</td>
//                         <td>@zookView.components</td>
//                     </tr>
//                 </table>
//             </div>
//             <div style="display: table-row;">
//                 <table style="width: 500px">
//                     <tr>
//                         <th colSpan="3" style="height: 30px" align="left">Achievements</th>
//                     </tr>
//                     <tr>
//                         <th>Trial</th>
//                         <th>Result</th>
//                         <th>Position</th>
//                     </tr>
//                     <tr>
//                         <td>Sprint</td>
//                         <td>@{
//                             zookView.sprint.map(_._1) match {
//                             case Some(score) => s"$score cm/sec"
//                             case None => "N/A"
//                         }
//                         }</td>
//                         <td>@zookView.sprint.map(_._2).getOrElse("N/A")</td>
//                     </tr>
//                     <tr>
//                         <td>BlockPush</td>
//                         <td>@{
//                             zookView.blockPush.map(_._1) match {
//                             case Some(score) => s"$score cm"
//                             case None => "N/A"
//                         }
//                         }</td>
//                         <td>@zookView.blockPush.map(_._2).getOrElse("N/A")</td>
//                     </tr>
//                     <tr>
//                         <td>Hurdles</td>
//                         <td>@{
//                             zookView.hurdles.map(_._1) match {
//                             case Some(score) => s"$score cm/sec"
//                             case None => "N/A"
//                         }
//                         }</td>
//                         <td>@zookView.hurdles.map(_._2).getOrElse("N/A")</td>
//                     </tr>
//                     <tr>
//                         <td>HighJump</td>
//                         <td>@{
//                             zookView.highJump.map(_._1) match {
//                             case Some(score) => s"$score cm"
//                             case None => "N/A"
//                         }
//                         }</td>
//                         <td>@zookView.highJump.map(_._2).getOrElse("N/A")</td>
//                     </tr>
//                     <tr>
//                         <td>Lap</td>
//                         <td>@{
//                             zookView.lap.map(_._1) match {
//                             case Some(score) => s"$score sec"
//                             case None => "N/A"
//                         }
//                         }</td>
//                         <td>@zookView.lap.map(_._2).getOrElse("N/A")</td>
//                     </tr>
//                 </table>
//             </div>
//             <div style="display: table-row;">
//                 <div style="display: table-cell;">
//                     <h2>Zook History</h2>
//                     <table>
//                         <tbody>
//                         <tr>
//                             <th>Zook</th>
//                             <th>Owner</th>
//                         </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
// );
// }
//
// export default Zook;
