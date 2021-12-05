import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles'
import { Link } from "react-router-dom";
import { deleteTodo } from '../../../api/TodoApı';
/* import { getTodo } from '../../../api/TodoApı'; */
/* import { useState, useEffect } from 'react';

 */

const TodoList = ({ todo, setTodosHandler }) => {
    const classes = useStyles();


    async function deleteTodoHandler(id) {
        const response = await deleteTodo(id)
        setTodosHandler(id)
    }



    return (
        <Card className={classes.root} data-testid="todolist-card">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <img className={classes.media} /* src={user.avatar.split("/revision")[0]} */ src={"https://camo.githubusercontent.com/c43d969d9d071c8342e9a69cdd6acb433c541f431127738974ce22290c46f2b8/68747470733a2f2f692e696d6775722e636f6d2f4f764d5a4273392e6a7067"} />
            </div>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom id="todo-info-name" data-testid="todolist-name" >
                        {todo.name}
                    </Typography>
                </div>
                <Typography variant="h5" id="todo-info-details" >
                    {todo.details}
                </Typography>
            </CardContent>
            <IconButton
                onClick={() => deleteTodoHandler(todo.id)} aria-label="Delete">
                <DeleteIcon />
            </IconButton>
        </Card>
    )
}

export default TodoList
