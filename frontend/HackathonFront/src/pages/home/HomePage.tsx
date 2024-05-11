import Banner from '../../../public/unsplash_0nkFvdcM-X4.png';

const HomePage =()=>{
    return(
        <>

<div   role="dialog" aria-modal="true">
 
        <div className="  min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
        <div className="  w-full h-[634px]  rounded-[12px]">
          <img src={Banner} alt="Logo"  className="absolute"/>
           <div className="w-[60rem] my-24 fixed items-center justify-between py-4 px-20 md:px-6 2xl:px-11    ">
             <p className="absolute ml-[25%] font-semibold text-[40px]  leading-[53px] text-[#FEFCF4]">
             З Findmee ти можеш знайти своїх рідних в зоні бойових дій
            </p>
            </div>
            
            <div className="fixed mx-[25rem] my-80 items-center justify-between py-4 px-20 md:px-6 2xl:px-11">
      
      <a href="/log" className="  h-[Hug (72px)px] block  w-full my-12 px-[25px]   py-5 bg-[#C60914] border-[2px] border-[solid] border-[#FEFCF4]   rounded-[4px] text-center text-sm font-semibold text-black   hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[25px] ">перейти в застосунок</p></a>
        </div>
            </div>

          

        </div>
      </div>







        </>
    );
};
export default HomePage;