import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const users = useSelector((state) => state)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = users.find(contact => contact.email === email && email)
        
        if (!name || !email) {
            return toast.warning("Please fill in all fields")
        }

        if (checkEmail) {
            return toast.error("This email already exists!")
        }

        const data = {
            id: users[users.length - 1].id + 1,
            name,
            email
        }
        dispatch({ type: "ADD_USER", payload: data })
        toast.success("User added successfully");
    }

    return (
        <div className="container pt-5">
            <div className="input-group justify-content-start">
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="form-group col-auto">
                        <input
                            className=""
                            type="text"
                            aria-label="Name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-auto">
                        <input
                            type="email"
                            name="" id=""
                            placeholder="Email"
                            className="mx-3 "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* <button
                        type="submit"
                        className="btn btn-outline-dark">Add</button> */}
                    <div className="form-group col-auto">
                        <input
                            type="submit"
                            className="btn btn-outline-dark "
                            value="Add User"
                            onClick={() => navigate("/")}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};



export default AddUser;