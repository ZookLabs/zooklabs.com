import React from 'react';
import ApiZook from "../api/zook";

export default class Zooks extends React.Component {

    state = {
        loading: true,
        zooks: [],
    };

    async componentDidMount() {
        ApiZook.getList().then(value => this.setState({
            loading: false,
            zooks: value,
        }));
    };

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        return (
            <div>
                <ul>
                    {this.state.zooks.map(zook => (
                        <li key={zook.id}>
                            <a href={"/zook/" + zook.id}>{zook.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}