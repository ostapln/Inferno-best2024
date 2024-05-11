 
export interface ILoginRequest {
email: string;
password: string;
}

export interface ILoginResult {
  userId:string;
  tokens: ITockens ;
}
export interface ITockens {
  access:string;
  refresh: string ;
}