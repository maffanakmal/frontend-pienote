import React from "react";
import '../assets/Css/Profile.css'
import profileImg from "../assets/Image/people-1.webp"
import { NavLink } from "react-router-dom";
import '../assets/Css/Profile.css';

const Profile = () => {
    return (
        <>
            <div className='profile-container min-vh-100 d-flex justify-content-center align-items-center'>
                <div className="profile-back">
                    <NavLink to="/profileSetting"><i className="fa-solid fa-arrow-left"></i></NavLink>
                </div>
            <div className="profile-card row rounded-4 p-3 area-box border m-4">
                <div className="profile-image d-flex justify-content-center align-items-center">
                    <img src={profileImg} alt=""/>
                </div>
                <div className="profile-info col-md-12 d-flex flex-column align-items-center justify-content-center">
                    <h3 className="mb-5">Personal Info</h3>
                    <p className="mb-4">Laura Ziegler</p>
                    <p className="mb-4">@lauraziegler</p>
                    <p className="mb-4">12 Januari 2024</p>
                    <div>
                        <button className="btn btn-primary btn-lg fs-6">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Profile;
