import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";

const Root = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Root;
