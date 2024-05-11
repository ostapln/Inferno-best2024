 
 
import { jwtDecode } from 'jwt-decode';
import { AuthUserActionType, IUser } from '../store/reducers/auth/types';
import http_api from './http_api';
import { store } from '../store';
 
 

export const storeToken = async (token:any) => {
  console.log('store token');
  localStorage.setItem('token', `Bearer ${token}`);
  http_api.defaults.headers['Authorization'] = getToken();
  console.log("tokens" , token);
  const user = (await http_api.get<IUser>('/api/v1/users/me/', token)).data;
     
  console.log("user" , user);
  store.dispatch({
    type: AuthUserActionType.LOGIN_USER,
    payload: {
      email: user.email,
      username: user.username,
      userId: user.userId,
      photo:user.photo,
    },
  });
};
 
export const loadTokenFromStorage = () => {
  console.log('loadTokenFromStorage token');
  
  const token = getToken() as string;
   http_api.defaults.headers['Authorization'] = token;
  const user: IUser = jwtDecode(token);
  store.dispatch({
    type: AuthUserActionType.LOGIN_USER,
    payload: {
      email: user.email,
      username: user.username,
      photo:user.photo,
      userId: user.userId,
    },
  });
};

export const getToken = () => {
const token =  localStorage.getItem('token')  ;
  console.log("dsad",token);
  
  return token;
};

export const removeToken = () => {
  delete http_api.defaults.headers['Authorization'];
  store.dispatch({
    type: AuthUserActionType.LOGOUT_USER,
    payload: {},
  });
  return localStorage.removeItem('token');
};

export const decodeToken = (token: string) => {
  return jwtDecode(token);
};

 

 

 
export const isSignedIn = (): boolean => {
  let t = getToken();
  // todo add overdue check
  return t != null && t != '' && t != undefined;
};

export enum Roles {
  Administrator = 'Administrator',
  User = 'User',
  Unverified = 'Unverified',
}

 
 
 
 




 
