import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Grid, Form, Input } from 'semantic-ui-react'

import {
    newCardPomo,
    cardList,
    newCardName,
} from '../redux/createNewProjectSlice'
import { useSelector, useDispatch } from 'react-redux';
import {
    addNewProjectPomo,
} from '../redux/addPomoDone'

const getNewProjectData = () => {
    let projectName = document.getElementById('projectName').value
    let pomosAWeek = document.getElementById('pomosAWeek').value
    if (projectName == '' || Number.isInteger(parseInt(pomosAWeek)) === false) {
        return null
    } else {
        return [projectName, pomosAWeek]
    }

}

const NewProject = () => {
    const q = useSelector(cardList)

    const dispatch = useDispatch()
    const sendData = () => {
        if (getNewProjectData() === null) {
            console.log('nulь');
        }
        else {
            let toPost = getNewProjectData()
            dispatch(newCardName(toPost))
            dispatch(addNewProjectPomo())
        }
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '4%' }}>
                <Input size='large' placeholder='name of a project' id='projectName' />

                <div style={{ marginTop: '2%' }}>
                    <Input size='large' placeholder='Pomos a week' id='pomosAWeek' />
                </div>
            </div>
            <Divider hidden />
            <Link to='/'>
                <Button negative>cancel</Button>
            </Link>
            <Link to='/'>
                <Button onClick={sendData} style={{ marginLeft: '30px' }} positive>{/* для того чтобы передать введенные данные
            используешь getNewProjectData, он вернет массив, проверь его на ===null, иначе добавишь пустой проект */}
                Confirm
                </Button>
            </Link>
        </div >
        // hidden
    )
}

export default NewProject