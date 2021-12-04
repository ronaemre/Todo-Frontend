import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import { getTodo } from "../api/TodoApı";

const AddTodo = ({ setTodosHandler }) => {

    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [saved, setSaved] = useState("")


    async function addTodo() {
        /*    console.log(name, details) */
        const formData = new FormData();
        formData.append('name', name);
        formData.append('details', details);
        const result = await axios.post(`http://127.0.0.1:3000/todo`, {
            name,
            details,
        });

        setSaved("Succesfully")
        /* alert("Todo Saved") */
        setTodosHandler({ name, details })
    }



    return (
        <div className="container" style={{ backgroundColor: "pink", borderRadius: "20px", marginTop: "30px" }} data-testid="container">
            <div >
                <input
                    data-testid="add_info"
                    className="form-control"
                    id="disabledInput"
                    type="text"
                    placeholder="Fill The Form To Add A Todo.."
                    disabled
                />
                <div className="form-row">
                    <div className="form-group col-md-10" data-testid="name" id="todo-name">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" data-testid="name_input" name="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-2" data-testid="details" id="todo-details">
                        <label htmlFor="inputDetails">Details</label>
                        <input type="text" className="form-control" data-testid="details_input" name="details" onChange={(e) => setDetails(e.target.value)} />
                    </div>
                </div>
                <h3>Agaaa gcloud başarılı .d Aga Deploy da başarılı .dddd</h3>
                <h3 data-testid="error" id="saved-succesfuly">{saved}</h3>
                <input
                    onClick={addTodo}
                    type="submit"
                    className="btn btn-danger btn-block"
                    value="Add Todo"
                    name="Add Todo"
                />
            </div >
        </div >
    );

}

export default AddTodo;
