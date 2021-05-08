import React from 'react'
import { Segment } from 'semantic-ui-react'
import Project from './Project'
import { useSelector, useDispatch } from 'react-redux';
import {
    cardList,
} from '../redux/createNewProjectSlice'
import { pomoList } from '../redux/addPomoDone'

const ProjectList = () => {
    const q = useSelector(cardList)
    const pomos = useSelector(pomoList)
    const createPomosToDo = () => {
        let arr1 = []

        for (let index = 0; index < q.length; index++) {
            arr1.push(q[index].projectArr[1])
        }

        return arr1
    }

    const createProjectNames = () => {
        let arr2 = []

        for (let index = 0; index < q.length; index++) {
            arr2.push(q[index].projectArr[0])
        }

        return arr2
    }

    const getProjectPomos = () => {
        let arr3 = []

        for (let index = 0; index < q.length; index++) {
            arr3.push(pomos[index])
            
        }
        return arr3
    }

    const renderProjects = () => {
        let arr = []
        for (let index = 1; index < q.length; index++) {
            arr.push(<Project index={index-1} projectName={createProjectNames()[index]} pomosToDo={createPomosToDo()[index]} />)
        }
        return arr
    }
    return (
        <div className='project-list'>
            {renderProjects()}

        </div>
    )

}

export default ProjectList