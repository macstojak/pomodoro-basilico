import React, {useState} from 'react';
import styled from "styled-components";
import Task from "./Task";
import {Draggable} from "react-beautiful-dnd";



const TaskList = (props) =>{
    const [tasks, setTasks] = useState(props.tasks);


    return(
        <div>
            {tasks.map((task, index)=>{
                return(
                                <Draggable
                                    key={task.id}
                                    draggableId={task.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                           >
                                            <Task key={index} task={task}></Task>
                                        </div>
                                    )}
                                </Draggable>
               
                )
            })}
            
        </div>
    )
}

export default TaskList;