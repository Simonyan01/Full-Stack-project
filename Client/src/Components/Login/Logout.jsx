import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const [logout, setLogout] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login")
        };
    }, [logout, navigate]);

    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setLogout(true);
    };

    return (
        <>
            <button onClick={logoutHandler} className="login-btn">
                Logout
            </button>
        </>
    );
};

export default Logout;