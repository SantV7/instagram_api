export interface UserLogin {
    username: string;
    password: string;
}

export interface UserRegisterReq {
    username: string; 
    email: string; 
    password: string; 
    confirm_passoword: string;  
}