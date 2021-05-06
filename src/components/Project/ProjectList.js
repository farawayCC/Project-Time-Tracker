import React from 'react'
import { Segment } from 'semantic-ui-react'
import Project from './Project'


class ProjectList extends React.Component {
    projectNames = [
        'Rent an Account',
        'Geography',
        'Math',
        'Social science',
        'Russian',
        'fuck the exams',
        //тут нужно будет вместо projectNames && pomosToDo передавать обьект и его рендерить в renderProjects, но через редукс
    ]
    pomosToDo = [
        '8',
        '20',
        '6',
        '6',
        '4',
        '0',
    ]
    // const name = useSelector()
    renderProjects = () => {
        let arr = []
        for (let index = 0; index < this.projectNames.length; index++) {
            arr.push(<Project projectName={this.projectNames[index]} pomosToDo={this.pomosToDo[index]} />)
        }
        return arr
    }
    render() {
        return (
            <div className='project-list'>
                {this.renderProjects()}
            </div>
        )
    }
}

export default ProjectList