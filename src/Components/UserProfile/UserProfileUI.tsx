import React from "react";
import { useUserContext } from "../../Contexts/UserContext";


const UserProfileUI: React.FC = () => {

    const { userData } = useUserContext();

    return (
        <div>
            <div>UserId: {userData.userId}</div>
            <div>Email: {userData.email}</div>
            <div>UserName: {userData.userName}</div>
            <div>
                               
            </div>
        </div>
    );
};
export default UserProfileUI;