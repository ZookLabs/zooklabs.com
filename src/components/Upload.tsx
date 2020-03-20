import React, {Component} from 'react'
import ApiZook from "../api/zook";
import {Button, Form, Header, Icon, Message, Segment, Table} from 'semantic-ui-react'
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
            this.setState({error: 'Please Select A Zook', isLoading: false});
        } else {
            this.setState({isLoading: true});
            ApiZook.upload(this.state.formData).then(response => {
                if (response.id !== undefined) {
                    this.setState({zookid: response.id, error: ''})
                } else if (response.error !== undefined) {
                    this.setState({error: response.error, isLoading: false});
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
            return <Redirect to={'/zooks/' + this.state.zookid}/>
        }
        return (
            <Segment.Group>
                <Segment>
                    <Header size='huge'>
                        Zook Upload
                    </Header>
                </Segment>
                <Segment>
                    <Table compact color="orange" inverted>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell> <Icon name='attention'/> Upload Requirements</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell error>
                                    <Icon name='attention'/>Must have a Passport Photo</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell error>
                                    <Icon name='attention'/>Does not support Street Rules</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Segment>
                <Segment>
                    <Form error={this.state.error !== ''} loading={this.state.isLoading} onSubmit={this.onFormSubmit}>
                        <Message
                            error
                            header='Error'
                            content={this.state.error}
                        />


                        <Form.Field>
                            <label>Zook File</label>
                            <input type='file' onChange={this.onChange} accept=".zook"/>
                        </Form.Field>

                        <Button type="submit" color='blue' icon="upload" content="Upload Zook"/>
                    </Form>
                </Segment>
            </Segment.Group>
        )
    }
}


export default Upload