import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Header, Segment} from "semantic-ui-react";
import {AxiosError, AxiosResponse} from 'axios';
import {TUserIdentifier} from "../types/TUserIdentifier";
import UserApi from "../api/UserApi";
import AdminApi from "../api/AdminApi";

const Admin: FC = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [users, setUsers] = useState<TUserIdentifier[]>([])

    useEffect(() => {
        setLoading(true)
        UserApi.listUsers().then(response => {
                setLoading(false)
                setUsers(response.data)
            }
        )
    }, [])


    const [ownerSetZookId, setOwnerSetZookId] = useState<string>()
    const [ownerSetOwner, setOwnerSetOwner] = useState<string>()


    const [updateOwnerResponse, setUpdateOwnerResponse] = useState<AxiosResponse>()

    const updateOwner = () => {
        setLoading(true)
        AdminApi.setOwner(ownerSetZookId, ownerSetOwner).then((response: AxiosResponse) => {
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
                                   onChange={(event: ChangeEvent<HTMLInputElement>) => setOwnerSetZookId(event.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Owner</label>
                            <Dropdown
                                name="owner"
                                clearable
                                options={users.map(({username}) => ({
                                    text: username,
                                    value: username
                                }))}
                                selection
                                onChange={(event, data) => setOwnerSetOwner(data.value as string)}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Button type='submit'>Update</Button>
                    <pre>Response: {updateOwnerResponse?.status} - {JSON.stringify(updateOwnerResponse?.data)}</pre>
                </Form>


            </Segment>
        </Segment.Group>
    )

}

export default Admin