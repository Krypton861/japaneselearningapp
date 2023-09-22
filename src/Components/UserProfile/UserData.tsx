
export interface UserDataInterface{
    userID:number;
    userName:string;
    userAlias:string;
    createdAt:string; //User Date Format later on
    
}

export class UserData implements UserDataInterface {
    userID: number;
    userName: string;
    userAlias: string;
    createdAt: string;

    constructor(){
        this.userID = 12;
        this.userName = "TestName";
        this.userAlias = "Pjodre";
        this.createdAt = "23-53-2323";
    }

}