import React, {FC, useState} from "react";
import {Button, Form, Header, Icon, Message, Segment, Table} from "semantic-ui-react";
import {AxiosError, AxiosResponse} from "axios";
import {useRegisterAction} from "../actions/AuthAction";
import {TAvailability} from "../types/TAvailability";
import UserApi from "../api/UserApi";
import {InputOnChangeData} from "semantic-ui-react/dist/commonjs/elements/Input/Input";

enum RegisterState {
    Available,
    UnAvailable,
    Error
}

const Register: FC = () => {

    const [availability, setAvailability] = useState<RegisterState>()

    const [loading, setLoading] = useState<boolean>(false)
    const [checkLoading, setCheckLoading] = useState<boolean>(false)

    const [username, setUsername] = useState<string>("")
    const [usernameValid, setUsernameValid] = useState<boolean>(false)

    const register: (code: string) => Promise<void> = useRegisterAction()

    const usernameChange = (_: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
        setAvailability(undefined)
        setUsername(data.value)
        setUsernameValid(/^[A-Za-z0-9_]{3,20}$/.test(data.value))
    }

    const checkAvailability = () => {
        setCheckLoading(true)
        UserApi.checkUsername(username).then((response: AxiosResponse<TAvailability>) => {
                if (response.data.available) {
                    setAvailability(RegisterState.Available)
                } else {
                    setAvailability(RegisterState.UnAvailable)
                }
                setCheckLoading(false)
            }
        ).catch((error: AxiosError) => {
            setAvailability(RegisterState.Error)
            setCheckLoading(false)
        })
    }

    const handleSubmit = async () => {
        setLoading(true)
        if (availability === RegisterState.Available) {
            await register(username)
        }
    }

    return <>
        <Segment.Group>
            <Segment clearing attached='top'>
                <Header floated="left" size='huge' style={{margin: 0}}>
                    Register Username
                </Header>
            </Segment>
            <Segment attached>
                <Table compact color="orange" inverted>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell> <Icon name='attention'/> Username Cannot be
                                changed</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell error>
                                <Icon name='attention'/>Usernames can be between 3 and 20 characters long.</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell error>
                                <Icon name='attention'/>Usernames may contain UPPER and lower letters (A-Z,a-z), numbers
                                (0-9) and underscore (_).</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Segment>
            <Segment attached>
                <Form onSubmit={handleSubmit} success={availability === RegisterState.Available}
                      error={availability === RegisterState.UnAvailable || availability === RegisterState.Error}
                      loading={loading}>

                    <Form.Group widths='equal'>
                        <Button type='button' disabled={!usernameValid} onClick={checkAvailability}
                                loading={checkLoading}>Check Availability</Button>
                        <Form.Input
                            label='Username'
                            value={username}
                            onChange={usernameChange}
                            error={!usernameValid || availability === RegisterState.UnAvailable || availability === RegisterState.Error}
                            loading={checkLoading}
                        />
                    </Form.Group>

                    <Message
                        success
                        header='Username Is Available'
                        content="REMEMBER YOU CAN ONLY SET THIS ONCE"
                    />
                    <Message
                        hidden={availability !== RegisterState.UnAvailable}
                        error
                        header='Username Not Available'
                    />
                    <Message
                        hidden={availability !== RegisterState.Error || !usernameValid}
                        error
                        header='Username Is Invalid'
                    />

                    <Button type='submit' disabled={availability !== RegisterState.Available}>Submit</Button>
                </Form>
            </Segment>
        </Segment.Group>
    </>

}

export default Register