export interface UserData {
    id: number
    username: string;
    password: string;
    email?: string; 
}

export interface UserLogin {
    username: string;
    password: string;
}

export interface UserRegisterReq {
    id: number;
    username: string; 
    email: string; 
    password: string; 
    confirm_password: string;  
}