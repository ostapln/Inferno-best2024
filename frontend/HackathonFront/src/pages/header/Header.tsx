 
 

const Header = ( ) => {
 

  return (
 <header className="sidebar">
 {/*<div className="  w-5 h-full      "
       >


 </div>*/}
  <div className="flex flex-col  w-28 h-[873px] rounded-[40px]   bg-[#1B4B8B] text-white flex flex-col   p-4">
      {/* Вміст хедера */}
      <div className="flex-grow flex flex-col justify-start"><a href="/post" className="mx-5 my-5 rounded-[40px] "><img src="../../../../public/posts carousel vertical.svg" alt="" /></a>
      </div>
      <div className="flex-grow flex flex-col justify-end">
<a href="/userlayout" className="mx-5 my-5 rounded-[40px] "><img src="../../../../public/octicon_report-16.svg" alt="" /></a>
<a href="/profile" className="mx-5 my-5 rounded-[40px] "><img src="../../../../public/iconamoon_profile.svg" alt="" /></a>

</div>
</div>
</header> 

  );
};

export default Header;
