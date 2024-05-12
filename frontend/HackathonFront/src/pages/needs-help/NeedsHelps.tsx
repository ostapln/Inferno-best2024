 
 import { useState } from 'react';
import Chat from '../chat/chat';
 
 

const NeedsHelps =() =>{

    
    
return(
    <>
    
    <div className="grid   md:grid-cols-2  ">

<div>
    <div className="  rounded-[40px]   w-full h-[810px] left-0 top-0  ">
        <img src={"../../../../public/sss.png"} alt="Logo" />
    </div>
</div>
<div className="mx-5  w-full bg-[white]">

    <h1 className="text-left font-bold  mt-10  text-black text-[33px]">Степаненко Іван Михайлович</h1>
    <a href="" className="relative right-36  w-[17rem] inline-block   px-4 my-10 py-3 rounded-[20px] bg-[#1B4B8B] border-[2px] border-[solid] border-[#FEFCF4] text-center text-sm font-semibold text-white shadow-sm hover:bg-[#FEFCF4] hover:text-[#1B4B8B] hover:border-[#1B4B8B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">херсонська область</a>

<h3 className="text-left font-bold">Опис</h3>
    <p className="text-left">Lorem ipsum dolor sit amet consectetur. Consectetur dui donec enim ultrices egestas id. Cras praesent mi faucibus ultricies diam. In augue fermentum ac gravida justo in vitae volutpat. Volutpat viverra ultrices orci porta. Amet lorem a auctor netus leo tortor nunc convallis. At ornare bibendum tortor urna sit nec. Amet duis elit id donec quis augue porta varius ornare. Nibh bibendum pellentesque eu nisi est sed semper. Metus nunc lacus enim gravida risus justo purus elementum pharetra.</p>
     
    <h1 className="text-left font-bold  mt-10  text-black text-[33px]">Дата зникнення: 10/05/2024</h1>
    <h3 className="text-left font-bold my-5">м. Херсон</h3>
    <p className="text-left text-gray-300">Херсонська область, Херсонський район</p>
    <h1 className="text-left font-bold  mt-5  text-black text-[33px]">Контактна</h1>
    <h1 className="text-left font-bold text-10   text-black text-[33px] text-[#C60914]">+(380) 68 162 34 56</h1>
    <a href="/userlayout/post" className="relative left-48 font-bold px-10    py-3 rounded-[10px]   border-[2px] border-[solid] border-[#1B4B8B]    text-center text-sm font-semibold text-black shadow-sm  hover:text-[#1B4B8B] hover:border-[#1B4B8B]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">повернутись</a>
     
</div>

</div>
<div className="w-full">
<h1 className="text-center font-bold w-full mt-10 text-[#C60914] text-[38px]">Маєте якусь важливу інформацію стосовно цієї людини?</h1>

<h1 className="text-center font-bold mt-10 text-black text-[24px]">Напишіть нижче в коментарях</h1>

<h1 className="text-right font-bold  mt-10  text-black text-[33px]">2 коментаря</h1>
<Chat/>
</div>

 
    </>
);



};
 export default NeedsHelps;