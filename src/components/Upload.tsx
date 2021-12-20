import React, {FC, useState} from 'react'
import {Button, Form, Header, Icon, Message, Segment, Table} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom';
import {AxiosError} from "axios";
import ZookApi from "../api/ZookApi";
import splitbee from "@splitbee/web";

type TUploadError = {
    error: string
}

const Upload: FC = () => {
    const [zookId, setZookId] = useState<number>()
    const [loading, setLoading] = useState<boolean>(false)
    const [fileValid, setFileValid] = useState<boolean>(false)

    const [formData, setFormData] = useState<FormData>(new FormData())

    const [uploadError, setUploadError] = useState<string>()

    const handleSubmit = () => {
        if (formData.get('zook')) {
            setLoading(true)
            splitbee.track("Zook Upload")
            ZookApi.uploadZook(formData).then(response => {
                    setZookId(response.data.id)
                    setLoading(false)
                }
            ).catch((error: AxiosError<TUploadError>) => {
                setFileValid(false)
                setLoading(false)
                if (error.response) {
                    setUploadError(error.response.data.error)
                    splitbee.track("Zook Upload Error", {
                        error: error.response.data.error
                    })
                } else {
                    splitbee.track("Unexpected Zook Upload Error")
                    throw error
                }
            })
        }
    }

    const fileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let file = event.target.files?.item(0)
        setUploadError(undefined)
        if (file && file.name.endsWith(".zook")) {
            const formData = new FormData()
            formData.append('zook', file)
            setFormData(formData)
            setFileValid(true)
        } else {
            setFileValid(false)
        }
    }

    if (zookId) {
        return <Redirect to={`/zooks/${zookId}`}/>
    } else {
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
                                <Table.HeaderCell><Icon name='attention'/> Upload Requirements</Table.HeaderCell>
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
                    <Form onSubmit={handleSubmit} loading={loading} error={!!uploadError}>
                        <Form.Field error={!!uploadError}>
                            <label>Zook File</label>
                            <input type='file'
                                   onChange={fileChange}
                                   accept=".zook"/>
                        </Form.Field>
                        <Message
                            error
                            header={uploadError}
                        />
                        <Button type="submit" color='blue' icon="upload" disabled={!fileValid} content="Upload Zook"/>
                    </Form>
                </Segment>
            </Segment.Group>
        )
    }
}

export default Upload