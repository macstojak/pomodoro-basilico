import React, {useState} from 'react';
import styled from 'styled-components';

const Task = (props) =>{
    
    const [task, setTask] = useState(props.task);

    const MainTask = styled.div`
        margin: 0 auto;
        background-color: olive;
       
    `
    const Title = styled.h4`
        padding: 5px;
        color: white;
        font-weight: lighter;
        font-family: "Fredoka One";
    `
    const Description = styled.p`
    margin: 0 auto;
    padding: 5px;
        color: black;
        background-color: white;
    `
    return(
        <MainTask>
            <Title>{task.title}</Title>
            <Description>{task.description}</Description>
        </MainTask>
    )
}


export default Task;