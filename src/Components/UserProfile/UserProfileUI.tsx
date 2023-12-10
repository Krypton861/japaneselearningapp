import React, { useEffect, useState } from "react";
import { useUserContext } from "../../Contexts/UserContext";
import getUserExp from "../../Database/getUserExp";
import { setUserExp } from "../../Database/setUserExp";

const UserProfileUI: React.FC = () => {

    const { userData } = useUserContext();
    const [expGained, setExpGained] = useState<number | null>(null);

    useEffect(() => {
        if (userData.userId) {
            getUserExp(userData.userId).then(exp => {
                setExpGained(exp);
            });
        }
    }, []);


    function setExp(){
        if (userData.userId && expGained) {
            setUserExp(userData.userId, expGained + 1);
            setExpGained(expGained + 1);
        }
    }

    
    return (
        <div>
            <div>UserName: {userData.userName}</div>
            <div>Email: {userData.email}</div>

            <div>[Debug] UserId: {userData.userId}</div>
            <div>
                   EXP: {expGained}            
            </div>
            <button onClick={setExp}>Get 1 XP</button>
        </div>
    );
};
export default UserProfileUI;