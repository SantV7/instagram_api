export interface UserData {
    username: string;
    password: string;
    email?: string; 
}

export interface UserLogin {
    username: string;
    password: string;
}

export interface UserRegisterReq {
    username: string; 
    email: string; 
    password: string; 
    confirm_password: string;  
}