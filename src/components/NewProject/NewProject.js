import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Grid, Form, Input } from 'semantic-ui-react'

const getNewProjectData = () => {
    let projectName = document.getElementById('projectName').value
    let hoursAWeek = document.getElementById('hoursAWeek').value
    if (projectName == '' && hoursAWeek == '') {
        return null
    }
    return [projectName, hoursAWeek]
}
let qwe= 'weq'
const NewProject = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '4%' }}>
                <Input size='large' placeholder='name of a project' id='projectName' />

                <div style={{ marginTop: '2%' }}>
                    <Input size='large' placeholder='Pomos a week' id='hoursAWeek' />
                </div>
            </div>
            <Divider hidden />
            <Link to='/'>
                <Button negative>cancel</Button>
            </Link>
            <Button style={{ marginLeft: '30px' }} positive>{/* для того чтобы передать введенные данные
            используешь getNewProjectData, он вернет массив, проверь его на ===null, иначе добавишь пустой проект */}
                Confirm 
            </Button>
        </div >
        // hidden
    )
}

export default NewProject