import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useState } from "react";

export const useServices = () => {
    const [tasks, setTasks] = useState([])

    const { login } = useAuth();
    const navigate = useNavigate();
    function handleFormLogin(e) {
        e.preventDefault();
        login({ token: "dummy_token", name: "Syaihan" });
        navigate("/dashboard");
    }

    const handleOAuthLogin = () => {
        window.location.href = 'https://backend-api.com'
    }
    return {
        tasks,
        setTasks,
        handleFormLogin,
        handleOAuthLogin
    };
}