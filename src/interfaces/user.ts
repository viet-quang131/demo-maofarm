export interface IUser {
    id: string;
    name: string;
    fullname: string;
    ngaysinh: Date; 
    email: string;
    password: string;
    role: string;
    status: string;
    image_url: string; 
    favoriteProducts: string[]; 
    addressUser: string[];     
}