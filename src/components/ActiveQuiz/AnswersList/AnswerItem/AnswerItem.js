import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerItem = props => {

    const classesArr = [classes.AnswerItem]
    if(props.state) {
        classesArr.push(classes[props.state])
    }

    return (
        <li 
            className={classesArr.join(' ')}
            onClick ={() => props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text }
        </li>
    )
}
    
export default AnswerItem