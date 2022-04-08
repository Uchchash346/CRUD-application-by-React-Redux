import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const UsersList = () => {
    const users = useSelector(state => state);

    const dispatch = useDispatch();
    const deleteUser = (id) => {
        dispatch({ type: "DELETE_USER", payload: id })
        toast.success("User deleted successfully");
    }
    return (
        <div className="container pt-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, id) => (
                            <tr key={id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => deleteUser(user.id)}
                                        className="btn btn-sm btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    {/* <tr>
                        <td>Mark</td>
                        <td>mark@gmail.com</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;