import axios from 'axios'


export const getTodo = async () => {
    const response = await axios.get("http://127.0.0.1:3000/todos")
    return response;
}



export const deleteTodo = async (id) => {
    const response = (
        await axios.delete(`http://127.0.0.1:3000/todo/${id}`)
    )
    return getTodo();
}



/* export const addTodo = async () => {
    const response = (
        await axios.post(`http://127.0.0.1:3000/todos`, {
            name,
            details
        })
}
 */