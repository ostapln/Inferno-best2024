import { useState } from "react";
import http_api from "../../services/http_api";
import { getToken } from "../../services/tokenService";
import { useNavigate } from "react-router-dom";

 




 export interface PasswordEdit{
    token:string;
    password_1:string;
    password_2:string;
 }
const Password = () => {  const navigator = useNavigate();
    const [userData, setUserData] = useState<PasswordEdit>({
        token:'',
        password_1:'',
    password_2:'',
    
    });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    const handleSubmit = async () => {
        try {
            userData.token =getToken();
 
            const result = await http_api.patch('/api/v1/users/me/',userData);
              
 navigator('/profile');
          console.log('Profile deleted successfully',result);
        } catch (error) {
          console.error('Failed to delete profile', error);
        }
      };

    return (<>
        <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                </div>
                <div className="relative left-[35%] bottom-[80%] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className=" -mx-10 my-5 flex w-full flex-shrink-0 items-center justify-end rounded-full  ">
                <a href="/profile" className="text-24 ">X</a>
                </div>
                <h1 className="text-[2rem] my-5 mx-5 text-left ">Зміна паролю</h1>
                    <form className="my-5 max-w-md mx-auto">
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={handleInputChange}  type="password" name="password_1" id="password_1" className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">  Пароль</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={handleInputChange}   type="password" name="password_2" id="password_2" className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label   htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Повторіть Пароль</label>
                        </div>

                    </form>
                    <div className="flex flex-grow items-center justify-between py-4 px-20 md:px-6 2xl:px-11">

                        <button onClick={handleSubmit} type="submit" className="  h-[Hug (72px)px] block  w-full my-12 px-[25px]   py-5 bg-[#1B4B8B] border-[2px] border-[solid] border-[#FEFCF4]   rounded-[4px] text-center text-sm font-semibold text-black   hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[25px] ">Змінити пароль</p></button>
                    </div>

                </div>
            </div>
        </div>


    </>);

};
export default Password;