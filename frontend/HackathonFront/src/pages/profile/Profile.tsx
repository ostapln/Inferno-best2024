 import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { IAuthUser } from '../../store/reducers/auth/types';
import Header from '../header/Header';
 const Profile = () => {
    const { isAuth,user } = useSelector((store: any) => store.auth as IAuthUser);
    const handleDeleteProfile = async () => {
        try {
        // Викликаємо функцію для видалення профілю з бекенду
          console.log('Profile deleted successfully');
        } catch (error) {
          console.error('Failed to delete profile', error);
        }
      };
  return (
    <>
 
<div className="flex flex-row my-12">
<Header />

          <div className="   py-4 px-20 md:px-6 2xl:px-11">
              {/* channel photo */} 
              <h1 className="text-[2rem] text-left  ">Обліковий запис</h1>
              <div className="flex flex-grow items-center justify-flex-start py-4     ">

                  <a href="/profile" className="font-medium text-[20px] mx-4 text-black-600 underline dark:text-black-500 hover:no-underline">Налаштування</a>
                  <a href="/profile/history" className="font-medium text-[20px] text-black-600 underline dark:text-black-500 hover:no-underline">Моя iсторя</a>
                   
              </div>
                  <div className="flex flex-col  top-[70px] left-[47%]"> <img
                      className="rounded-full w-40 h-40"
                      src={user?.photo}
                      alt=""
                  />

                      {/* channel info */}
                      <div className="text">
                          {/* Channel title */}
                          <h1 className="text-black text-left font-bold my-8  text-3xl mb-2">{user?.username}</h1>

                      </div>

                  <div className="w-96 my-10">   <a    href='/profile/password' className=" w-[267px] mt-12   mt-12 px-8 py-2 bg-[#E54B4B] border-[2px] border-white    rounded-[4px] text-center text-sm font-semibold text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Змінити пароль</a>

                  <a  href="#"
        onClick={(e) => {
          e.preventDefault();  
          handleDeleteProfile(); 
        }}  className="mt-12 font-medium text-[20px] mx-4 text-black-600 underline dark:text-black-500 hover:no-underline">Видалити профіль</a>  

                  </div> 
                 
                  </div>
              </div>
              <div className="w-full flex my-12  main-content">
                      <Outlet></Outlet>
                  </div> 

         
                  </div>



    </>
  );
};

export { Profile };
