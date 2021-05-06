import React from 'react'
import { Label, Button, Segment, Item, Icon, Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class TopBar extends React.Component {
    state = {
        completedPomos: 0,
    }
    startNewWeek = () => {
        //панулям)))
    }
    render() {
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
                        You have completed {this.state.completedPomos} Pomo this week. {/* 
                        get CompletedPomos using reduX */}
                    </Header>

                    <Button.Group floated='right' style={{ marginRight: '4%' }}>
                        <Button style={{ marginRight: '20px' }} compact>{/*onClick={startNewWeek}*/}
                            Start new week
                        </Button>
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
}

export default TopBar