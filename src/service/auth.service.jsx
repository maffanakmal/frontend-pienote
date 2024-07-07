import Cookies from "js-cookie";
import axios from "axios";
import config from "../utils/config";

const authService = () => {
    const { SERVER_URL } = config();
    const login = async ({ authIdentifier, password }) => {
        try {
            const response = await axios.post(`${SERVER_URL}/login`, {
                authIdentifier,
                password,
            });
            const token = response.data?.accessToken ?? null;
            const user = response.data?.userId ?? null;
            // Save to cookies
            Cookies.set("accessToken", token);
            Cookies.set("userId", user);
        } catch (error) {
            throw error;
        }
    };

    const register = async ({ full_name, username, email, phone_number, password, confirm_pass }) => {
        try {
            const response = await axios.post(`${SERVER_URL}/register`, {
                full_name, 
                username, 
                email, phone_number, 
                password, 
                confirm_pass
            });
            const { token, user } = response.data;

            // Save to cookies
            Cookies.set("accessToken", token);
            Cookies.set("userId", user);
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        // Remove from cookies
        Cookies.remove("accessToken");
        Cookies.remove("userId");
    };

    const auth = () => {
        const token = Cookies.get("accessToken") ?? null;
        const user = Cookies.get("userId") ?? null;
        return { token, user };
    };

    return { login, register, logout, auth };
};

export default authService;