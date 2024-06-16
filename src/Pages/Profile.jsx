import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import profileImg from "../assets/Image/people-1.webp";
import "../assets/Css/Profile.css";

const Profile = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProfile = async () => {
        try {
            const response = await axios.get("http://localhost:8000/profile", {
                withCredentials: true,
            });
            setData(response.data.user);
        } catch (error) {
            console.error("Error fetching profile data:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading profile: {error.message}</p>;

    return (
        <div className="profile-container min-vh-100 d-flex justify-content-center align-items-center">
            <div className="profile-back">
                <NavLink to="/home" className="w-auto"><i className="fa-solid fa-arrow-left"></i></NavLink>
            </div>
            <div className="profile-card row rounded-4 p-3 area-box border m-4">
                <div className="profile-image d-flex justify-content-center align-items-center">
                    <img src={profileImg} alt="Profile" />
                </div>
                <div className="profile-info col-md-12 d-flex flex-column align-items-center justify-content-center">
                    <h3 className="mb-4">Personal Info</h3>
                    <p className="mb-3">#{data.user_id}</p>
                    <p className="mb-3">{data.full_name}</p>
                    <p className="mb-3">@{data.username}</p>
                    <p className="mb-4">{new Date(data.created_at).toLocaleDateString()}</p>
                    <div>
                        <button className="btn btn-primary btn-lg fs-6 w-auto">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
