import React,{useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TaskList from "../Tasks/TaskList";
import {DragDropContext, Droppable} from "react-beautiful-dnd";

const Board = () =>{
    const [tasks, setTasks] = useState([]);

    const BoardStyle = styled.div`
    display: flex;
    `
    const Container = styled.div`
        margin: 0 auto;
        width:25%;
        padding: 5px;
        border: ${props=> (props.snapshotBorder ? "5px solid red" : "2px solid lightcoral")}
       
    ` 
    const Title = styled.h2`
    text-align: center;
    padding: 5px;
    color: white;
    background: tomato;
    font-family: "Fredoka One", cursive;
    `

    useEffect(()=>{
        // const getTasks = () =>{
        //     axios.get(`http://localhost:3000/tasks/list`)
        //     .then(result=>{
        //         setTasks(result);
        //     })
        // }
        // getTasks();
let arrayOfLists = {
    "lists":[
        {
            "title": "To Do",
            "tasks": [
                {id:"1", title: 'Buy milk', description:'3 litres of 1,5% milk'},
                {id:"2", title: 'Take trash', description:'bio and glass'},
                {id:"3", title: 'Clean up the house', description:'do the dishes, laundry'}
            ]},
        {
            "title": "Doing",
            "tasks": []
        },
        {
            "title": "Done",
            "tasks": []
        }

    ]
}
    
        setTasks(arrayOfLists.lists);
    },[])

    
    const reorder = (list, startIndex, endIndex) => {
       
     console.log(list)
        const removed = list.tasks.splice(startIndex, 1);
        list.tasks.splice(endIndex, 0, removed);
    
        return list;
    };

    
    const onDragEnd = result => {
        const { source, destination } = result;

        if (!destination  || destination===null) {
            return;
        }
        
        if (source.droppableId === destination.droppableId) {
            let item = tasks[parseInt(source.droppableId)].tasks[source.index];
            let list = tasks[parseInt(source.droppableId)];

           tasks[parseInt(source.droppableId)] = reorder(list, source.index,destination.index)
       
        } else {
            let item = tasks[parseInt(source.droppableId)].tasks[source.index];
        tasks[parseInt(source.droppableId)].tasks.splice(source.index,1);
        tasks[parseInt(destination.droppableId)].tasks.splice(destination.index, 0,item)
       
        }
    };

    return(
        
        <DragDropContext onDragEnd={onDragEnd}>
            <BoardStyle>
            {tasks.map((el,i)=>{
                return(
                <Droppable key={i} droppableId={i.toString()}>
            {(provided, snapshot) => (
                <Container snapshotBorder={snapshot.isDraggingOver}>
                        <div
                            ref={provided.innerRef}
                            >
                                <Title>{el.title}</Title>
                                <TaskList tasks={el.tasks}>

                                </TaskList>
                            
                            {provided.placeholder}
                        </div>
                        </Container>
                    )}
                
           
            </Droppable>

             ) })}
             </BoardStyle>
            </DragDropContext>            
       
    )
}

export default Board;