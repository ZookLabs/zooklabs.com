import React, {FC, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Header, Segment} from "semantic-ui-react";
import axios, {AxiosError, AxiosResponse} from 'axios';
import {TUserIdentifier} from "../types/TUserIdentifier";

const Admin: FC = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [users, setUsers] = useState<TUserIdentifier[]>([])

    useEffect(() => {
        setLoading(true)
        axios.get<TUserIdentifier[]>('/users').then(response => {
                setLoading(false)
                setUsers(response.data)
            }
        )
    }, [])


    const [ownerSetZookId, setOwnerSetZookId] = useState<string>()
    const [ownerSetOwner, setOwnerSetOwner] = useState<string>()


    const [updateOwnerResponse, setUpdateOwnerResponse] = useState<AxiosResponse<string>>()

    const updateOwner = () => {
        setLoading(true)
        axios.patch(`admin/zook/${ownerSetZookId}/owner/${ownerSetOwner}`).then(response => {
                setUpdateOwnerResponse(response)
                setLoading(false)
            }
        ).catch((error: AxiosError) => {
            setLoading(false)
            setUpdateOwnerResponse(error.response)
        })
    }

    return (
        <Segment.Group>
            <Segment>
                <Header size="huge">
                    Admin Tools
                </Header>
            </Segment>
            <Segment loading={loading}>
                <Header size="medium">
                    Zook Owner Assigner
                </Header>
                <Form onSubmit={updateOwner}>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>ZookId</label>
                            <input name="zookId" placeholder='Zook Id' type="number" inputMode="numeric"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => setOwnerSetZookId(event.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Owner</label>
                            <Dropdown
                                name="owner"
                                clearable
                                options={users.map(({username}) => ({
                                    key: username,
                                    text: username,
                                    value: username
                                }))}
                                selection
                                onChange={(event, data) => setOwnerSetOwner(data.value as string)}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Button type='submit'>Update</Button>
                    <pre>Response: {updateOwnerResponse?.status} - {updateOwnerResponse?.data}</pre>
                </Form>


            </Segment>
        </Segment.Group>
    )

}

export default Admin