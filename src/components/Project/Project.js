import React, { Component } from 'react'
import { Button, Container, Grid, Segment, Progress } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';
import {
    addPomoDone,
    pomoList,
} from '../redux/addPomoDone'

const Project = (props) => {
    const pomos = useSelector(pomoList)
    const dispatch = useDispatch()

    const addPomoComplete = () => {
        dispatch(addPomoDone(props.index))
    }
    return (
        <div>
            <Segment textAlign='center'>
                <Button floated='left' textAlign='left' onClick={addPomoComplete}>Add Pomo</Button>
                <div style={{ fontSize: '220%' }}>{props.projectName}
                    {pomos[props.index]}/
                {props.pomosToDo}
                </div>
                <Progress style={{ marginTop: '3em' }} percent={(pomos[props.index]/props.pomosToDo)*100} indicating />
                {/* percent={state.percent} */}
            </Segment>
        </div>
    )

}

export default Project