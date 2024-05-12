const CreateNeeds = () => {

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
  <div className="w-full px-[5%] md:w-[38rem]">
        <h1 className="text-[2rem] my-5 text-left ">Створити  допис</h1>
        <hr className="w-full my-0  border-t-4 rounded  " />
        <form action="#" method="POST" className="  mt-[3rem]   ">
          <div className="grid grid-cols-1 gap-x-24 gap-y-20 sm:grid-cols-2">

            <div className="sm:col-span-2">
              <label htmlFor="name" className="text-left block text-sm font-semibold leading-6 text-gray-900">ПІБ зниклого(-ої) *</label>
              <div className="mt-2.5">
                <input type="name" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="text" className="text-left block text-sm font-semibold leading-6 text-gray-900">Дата зникнення *</label>
              <div className="">
                <input type="date" name="text" id="text" autoComplete="text" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-left block text-sm font-semibold leading-6 text-gray-900">Опис(вік, стать, зріст, будова тіла, особливості)</label>
              <div className="mt-2.5">
                <textarea name="message" id="message" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>

          </div>

        </form>     <div className="relative   ">
                <h1 className="text-[2rem] my-5 text-left ">Місце зникнення *</h1>
        <hr className="w-full my-0  border-t-4 rounded  " />
        <form action="#" method="POST" className="  mt-[3rem] mb-[10rem]   ">
          <div className="grid grid-cols-1 gap-x-24 gap-y-10 sm:grid-cols-2">


            <div className="sm:col-span-2">
            <div className="sm:col-span-3">
            <label htmlFor="email" className="text-left block text-sm font-semibold leading-6 text-gray-900">Місце зникнення *</label>
           
          <div className="mt-2">
            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Область</option>
              <option>Волинь</option>
              <option>Львів</option>
            </select>
          </div>
          <div className="mt-2">
            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Місто\Село</option>
              <option>Львів</option>
              <option>Луцьк</option>
            </select>
          </div>
        </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="text-left block text-sm font-semibold leading-6 text-gray-900">Точніше місце зникнення</label>
              <div className="mt-2.5">
                <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

          </div>

        </form>    </div>
      </div>

<div  className="w-full px-[5%] md:w-[35rem] ">
<div className="flex flex-grow items-center justify-end  ">

<a href="#" className="  block  w-40 mx-4   border-[2px] border-[solid] border-black   rounded-[4px] text-center text-sm font-semibold text-black   hover:bg-[#FEFCF4] hover:text-[#1B4B8B] hover:border-[#1B4B8B]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[13px] ">Скасувати</p></a>
<a href="#" className="  block  w-40  bg-[#1B4B8B] border-[2px] border-[solid] border-black   rounded-[4px] text-center text-sm font-semibold  text-black-900   hover:bg-[#FEFCF4] hover:text-[#1B4B8B] hover:border-[#1B4B8B] ocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[13px] ">Зберегти</p></a>
</div>
<div className="col-span-full my-8">
          <label htmlFor="cover-photo" className="text-left text-[200%] block text-sm font-medium leading-6 text-gray-900">Завантажте фото *</label>
          <div className="  flex justify-center  rounded-lg border border-dashed border-[#5BC0EB] px-6 py-10">
            <div className="text-center">
              <svg className="  h-48 w-40  text-[#5BC0EB] inline" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div className="mt-4  flex text-sm leading-6 text-gray-600">
                <label htmlFor="file-upload" className="bg-[#5BC0EB] flex flex-grow items-center justify-end  relative mx-10 cursor-pointer rounded-full font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <p className="text-white  text-center items-center mx-4   ">Вибрати фото </p>
                  <p className="text-white text-[2rem] text-center  my-1 pr-2 mb-2">+</p>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                </label>
                
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>


          <div className="flex flex-col items-center justify-between py-4 px-20 md:px-6 2xl:px-11">
          <div className="relative  w-full  ">
                <h1 className="text-[2rem] my-5 text-left ">Місце зникнення *</h1>
        <hr className="w-full my-0  border-t-4 rounded  " />
        <form action="#" method="POST" className="  mt-[3rem] mb-[10rem]   ">
          <div className="grid grid-cols-1 gap-x-24 gap-y-20 sm:grid-cols-2">


            <div className="sm:col-span-2">
              <label htmlFor="number" className="text-left block text-sm font-semibold leading-6 text-gray-900">Номер телефону *</label>
              <div className="mt-2.5">
                <input type="number" name="number" id="number" autoComplete="number" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
</div></form></div>
      <a href="/reg" className="mx-5    w-[70%]   py-3 rounded-[20px] bg-[#C60914] border-[2px] border-[solid] border-[#FEFCF4]    text-center text-sm font-semibold text-black shadow-sm hover:bg-[#FEFCF4] hover:text-[#C60914] hover:border-[#C60914]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Опублікувати</a>
      </div>



        </div>
    
 
</div>



      </div>






    </>
  );



}; export default CreateNeeds;