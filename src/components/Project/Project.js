import React, { Component } from 'react'
import { Button, Container, Grid, Segment, Progress } from 'semantic-ui-react'

class Project extends Component {
    state = {
        percent: 0, //get percent from db
        pomosToDo: this.props.pomosToDo,
        pomosComplete: 0 // get pomosComplete from db
    }
    addPomoComplete = () => {
        this.setState({ percent: this.state.percent + (100 / this.state.pomosToDo) })
        this.setState({ pomosComplete: this.state.pomosComplete + 1 })
        //write done pomos in db
    }

    render() {
        return (
            <div>
                <Segment textAlign='center'>
                    <Button floated='left' textAlign='left' onClick={this.addPomoComplete}>Add Pomo</Button>
                    <div style={{ fontSize: '220%' }}>{this.props.projectName}
                        {this.state.pomosComplete}/
                {this.state.pomosToDo}</div>
                    <Progress style={{ marginTop: '3em' }} percent={this.state.percent} indicating />
                </Segment>
            </div>
        )
    }
}

export default Project