import { useSelector } from "react-redux";
import { IAuthUser, IUser } from "../../../store/reducers/auth/types";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import http_api from "../../../services/http_api";
import { getToken, storeToken } from "../../../services/tokenService";
import { useEffect, useState } from "react";
import { IUpdateUser } from "./types";
 

const Settings =()=> {


  const { isAuth,user } = useSelector((store: any) => store.auth as IAuthUser);

  const navigator = useNavigate();

  const [userDatatokent, setUser] = useState<IUpdateUser>({
tokens:'',
email: '',
username: '',
aboutme: '',

  });
  const [userData, setUserData] = useState<IUser>({
   
      email: '',
      username: '',
      aboutme: '',
   photo:'',
   userId:'',
  
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (isAuth) {
      let token: any;
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token:any) => {
    try {
        token =getToken();
      const users = (await http_api.get<IUser>('/api/v1/users/me/',token )).data;
      console.log("users",users);
      setUserData(users);
      console.log("users",userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
 
  const onSubmit = async ( ) => {
    try {
      let token: any ;token +=getToken();
    console.log("user",userData+"!!!!!!!!"+token);
    userDatatokent.tokens =getToken();
    userDatatokent.aboutme=userData.aboutme;
    userDatatokent.email=userData.email;
    userDatatokent.username=userData.username;
      const result =   (await http_api.patch<IUser>('/api/v1/users/me/',userDatatokent )).data;
 
     
      navigator('/profile');
    } catch (error) {
     
    } finally {
     }
  };
 

 

    return ( 
<>

         
 <div className="w-full"><div className="w-full flex flex-grow items-center justify-end  ">
      
      <a href="#" className="  block  w-40 mx-4   border-[2px] border-[solid] border-black   rounded-[4px] text-center text-sm font-semibold text-black   hover:bg-[#FEFCF4] hover:text-[#C60914] hover:border-[#C60914]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[13px] ">Скасувати</p></a>
    <button onClick={onSubmit } className="  block  w-40  bg-[#C60914] border-[2px] border-[solid] border-black   rounded-[4px] text-center text-sm font-semibold  text-black-900   hover:bg-[#FEFCF4] hover:text-[#C60914] hover:border-[#C60914] ocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[13px] ">Зберегти</p></button>
        </div>
 <h1 className="text-[2rem] my-5 text-left ">Інформація про себе</h1>
    <hr className="w-full my-0  border-t-4 rounded  " />
  <form action=""  method="POST" className="  mt-[3rem]   ">
    <div className="grid grid-cols-1 gap-x-24 gap-y-20 sm:grid-cols-2">
    
      <div className="sm:col-span-2">
      <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">Ім’я Прізвище</label>
        <div className="mt-2.5">
          <input type="text" placeholder="Ім’я Прізвище"   onChange={handleInputChange} value={userData.username} name="username" id="username" autoComplete="username" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  "/>
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email"   placeholder="email"  onChange={handleInputChange}  value={userData.email} name="email" id="email"   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Про мене</label>
        <div className="mt-2.5">
          <textarea name="aboutme" placeholder="Про мене" onChange={handleInputChange}    id="aboutme"  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
    
    </div>
   
  </form>
 
  </div>

</>


);

};
export default Settings; 

function setIsLoading(arg0: () => boolean) {
  throw new Error("Function not implemented.");
}
