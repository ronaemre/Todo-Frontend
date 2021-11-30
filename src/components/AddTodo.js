import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import { getTodo } from "../api/TodoApı";

const AddTodo = () => {

    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [todos, setTodos] = useState([]);


    async function addTodo() {
        /*    console.log(name, details) */
        const formData = new FormData();
        formData.append('name', name);
        formData.append('details', details);
        const result = await axios.post(`http://127.0.0.1:3000/todo`, {
            name,
            details,
        });
        alert("Todo Saved")
        /*  getTodo(); */            //TODO EKLENDİKTEN SONRA SAYFANIN GÜNCELLENMESİ 
    }



    return (
        <div className="container" style={{ backgroundColor: "pink", borderRadius: "20px", marginTop: "30px" }} data-testid="container">
            <div >
                <input
                    className="form-control"
                    id="disabledInput"
                    type="text"
                    placeholder="Fill The Form To Add A Todo.."
                    disabled
                />
                <div className="form-row">
                    <div className="form-group col-md-10" data-testid="name">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" name="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-2" data-testid="details">
                        <label htmlFor="inputRating">Details</label>
                        <input type="text" className="form-control" name="rating" onChange={(e) => setDetails(e.target.value)} />
                    </div>
                </div>
                <input
                    onClick={addTodo}
                    type="submit"
                    className="btn btn-danger btn-block"
                    value="Add Todo"
                />
            </div >
        </div >
    );

}

export default AddTodo;
