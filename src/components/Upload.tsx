import React, {Component} from 'react'
import ApiZook from "../api/zook";
import {Button, Form, Message} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom';

class Upload extends Component {
    state = {
        isLoading: false,
        error: '',
        formData: new FormData(),
        zookid: 0
    }

    constructor(props: any) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onFormSubmit(e: any) {
        e.preventDefault(); // Stop form submit
        if (this.state.formData.get('zook') === null) {
            this.setState({error: 'Please Select A File', isLoading: false});
        } else {
            this.setState({isLoading: true});
            ApiZook.upload(this.state.formData).then(response => {
                if (response.id !== undefined) {
                    this.setState({zookid: response.id, error: ''})
                } else if (response.reason !== undefined) {
                    this.setState({error: response.reason, isLoading: false});
                } else {
                    this.setState({error: 'Something Went Wrong', isLoading: false});
                }
            })
        }
    }

    onChange(event: any) {
        const formData = new FormData();
        formData.append('zook', event.target.files[0]);
        this.setState({
            formData: formData
        });
    }

    render() {
        if (this.state.zookid !== 0) {
            return <Redirect to={'/zook/' + this.state.zookid}/>
        }
        return (
            <div>
                <Form error loading={this.state.isLoading} onSubmit={this.onFormSubmit}>
                    <h1>Zook Upload</h1>
                    <Form.Field>
                        <label>Zook File</label>
                        <input type='file' onChange={this.onChange}/>
                    </Form.Field>
                    <Message hidden={this.state.error === ''}
                             error
                             header='Error'
                             content={this.state.error}
                    />
                    <Button type="submit">Upload</Button>
                </Form>
            </div>
        )
    }
}


export default Upload