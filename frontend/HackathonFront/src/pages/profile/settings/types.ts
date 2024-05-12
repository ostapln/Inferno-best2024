import { IUser } from "../../../store/reducers/auth/types";

export interface IUpdateUser {
 
    tokens: string;
    email: string,
    username: string,
    aboutme: string,
   
  }