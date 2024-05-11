const Settings =()=> {



    return ( 
<>

         
 <div><div className="flex flex-grow items-center justify-end  ">
      
      <a href="#" className="  block  w-40 mx-4   border-[2px] border-[solid] border-black   rounded-[4px] text-center text-sm font-semibold text-black   hover:bg-[#FEFCF4] hover:text-[#C60914] hover:border-[#C60914]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[13px] ">Скасувати</p></a>
    <a href="" className="  block  w-40  bg-[#C60914] border-[2px] border-[solid] border-black   rounded-[4px] text-center text-sm font-semibold  text-black-900   hover:bg-[#FEFCF4] hover:text-[#C60914] hover:border-[#C60914] ocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[13px] ">Зберегти</p></a>
        </div>
 <h1 className="text-[2rem] my-5 text-left ">Інформація про себе</h1>
    <hr className="w-full my-0  border-t-4 rounded  " />
  <form action="#" method="POST" className="  mt-[3rem]   ">
    <div className="grid grid-cols-1 gap-x-24 gap-y-20 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Ім’я</label>
        <div className="mt-2.5">
          <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  "/>
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Прізвище</label>
        <div className="mt-2.5">
          <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "/>
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Про мене</label>
        <div className="mt-2.5">
          <textarea name="message" id="message"  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
    
    </div>
   
  </form>
 
  </div>

</>


);

};
export default Settings; 