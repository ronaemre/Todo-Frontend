import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import TodoList from './TodoList/TodoList';
import { getTodo } from '../../api/TodoApı';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    }
}));



const TodoLists = () => {
    const classes = useStyles();
    const [todos, setTodos] = useState([]);


    const getTodosHandler = async () => {
        const response = await getTodo();
        setTodos(response.data)

    }


    const setTodosHandler = (todos) => {
        setTodos(todos)
    }

    useEffect(() => {
        getTodosHandler();
    }, [])

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            {<Grid container justify="center" spacing={4}>
                {todos.map((todo) => (
                    <Grid item key={todo.id} xs={12} sm={6} md={4} lg={3}>
                        <TodoList todo={todo} setTodosHandler={setTodosHandler} />
                    </Grid>
                ))}
            </Grid>}
        </main>
    )

}

export default TodoLists;