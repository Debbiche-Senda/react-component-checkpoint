import React from "react";
import myphoto from "./myphoto.jpg";
import "./ProfilePhoto.css";

const ProfilePhoto = () =>{
    return (
        <>
        <img className="myphoto" src={myphoto} alt="img"/>

        </>
    );
};
export default ProfilePhoto;