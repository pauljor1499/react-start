import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Student = () => {
    const { email } = useParams(); //params
    const location = useLocation(); //router state

    return (
        <div>
            <h1>Student</h1>
            <h3>User: {email}</h3>
            <h3>Location: {location.state.data}</h3>
        </div>
    );
};

export default Student;
