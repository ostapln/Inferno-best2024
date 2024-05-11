 
export interface ILoginRequest {
email: string;
password: string;
}

export interface ILoginResult {
  tokens: ITockens ;
  userId:string;

}
export interface ITockens {
  access:string;
  refresh: string ;
}