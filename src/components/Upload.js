import React from 'react'
import ApiZook from "../api/zook";
import  { Redirect } from 'react-router-dom'

export default class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            response: {}
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault(); // Stop form submit
        const formData = new FormData();
        formData.append('zook', this.state.file);
        ApiZook.upload(formData).then((response) => {
                this.setState({file: null, response: response});

        })
    }

    onChange(e) {
        this.setState({file: e.target.files[0], response: {}});
    }

    render() {
        if (this.state.response.hasOwnProperty('id')){
            return <Redirect to={'/zook/' + this.state.response.id}/>
        } else {
            return (
                <div>
                    <p>{this.state.response.errorMsg}</p>
                    <form onSubmit={this.onFormSubmit}>
                        <h1>File Upload</h1>
                        <input type="file" name="zook" onChange={this.onChange}/>
                        <button type="submit">Upload</button>
                    </form>
                </div>
            )
        }
    }
}
