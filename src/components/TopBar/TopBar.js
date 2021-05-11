import React from 'react'
import { Label, Button, Segment, Item, Icon, Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import {
    pomoList,
    setNull,
} from '../redux/addPomoDone'

const TopBar = () => {

    const pomos = useSelector(pomoList)
    const dispatch = useDispatch()

    const startNewWeek = () => {
        for (let index = 0; index < pomos.length; index++) {
            dispatch(setNull(index))

        }
    }
    const getSum = () => {
        let sum = 0
        for (let index = 0; index < pomos.length; index++) {
            sum += pomos[index]
        }
        return sum
    }
    const completedPomos = getSum()
    return (
        <div>
            <Segment
                inverted
                color='grey'
                textAlign='center'
                style={{ minHeight: '60px', padding: '1em 0em', opacity: 0.9 }}
                vertical
            >
                <Header floated='left'>
                    You have completed {completedPomos} Pomo this week. {/* 
                        get CompletedPomos using reduX */}
                </Header>

                <Button.Group floated='right' style={{ marginRight: '4%' }}>
                    <div>
                        <Button style={{ marginRight: '20px' }} onClick={startNewWeek} compact>
                            Start new week
                        </Button>
                    </div>
                    <Link to='/NewProject'>
                        <Button compact >
                            <div>+</div>
                        </Button>
                    </Link>
                </Button.Group>

            </Segment>
        </div>
    )

}

export default TopBar