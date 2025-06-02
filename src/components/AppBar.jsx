"use client";
import { useState } from "react";

const AppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#008062] h-[133px] flex items-center sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[140px] gap-4 w-full relative">
      <button
        className="xl:hidden text-white ml-4 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src="/icons/menu-icon.svg" alt="Menu" className="w-8 h-8" />
      </button>
      <div className="hidden xl:flex gap-10 items-center text-[#FFFFFF]">
        <button className="flex items-center gap-2 text-[16px] cursor-pointer">
          حسابي
          <img
            src="/icons/account.svg"
            alt="Account"
            className="w-[21px] h-[21px] relative top-[1px]"
          />
        </button>
        <button className="flex items-center gap-2 text-[18px] cursor-pointer">
          ...بحث
          <img
            src="/icons/search.svg"
            alt="Search"
            className="w-[20px] h-[20px] relative top-[1px]"
          />
        </button>
      </div>

      <div className="hidden xl:flex gap-10 items-center justify-end text-[#FFFFFF] text-[18px] ml-auto w-full max-w-[800px]">
        <button className="text-center cursor-pointer">اتصل بنا</button>
        <button className="text-center cursor-pointer">البث المباشر</button>
        <button className="flex items-center gap-2 text-center cursor-pointer">
          <span className="text-[#FFBF00] font-bold text-[18px] relative top-[1px]">
            +
          </span>
          المسابقات
        </button>
        <button className="text-center cursor-pointer">الخدمات</button>
        <button className="text-center cursor-pointer">عن ميادين</button>
      </div>

      <div className="flex-shrink-0 cursor-pointer ml-auto xl:ml-4">
        <img src="/logo.svg" alt="Logo" className="w-[193.38px] h-[58.02px]" />
      </div>

      <div
        className={`absolute top-[133px] left-0 right-0 bg-[#008062] z-50 flex flex-col gap-6 py-6 px-6 text-white text-[18px] xl:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <button className="text-right">اتصل بنا</button>
        <button className="text-right">البث المباشر</button>
        <button className="text-right flex items-center gap-2 justify-end">
          <span className="text-[#FFBF00] font-bold text-[18px]">+</span>
          المسابقات
        </button>
        <button className="text-right">الخدمات</button>
        <button className="text-right">عن ميادين</button>
        <hr className="border-white/20" />
        <div className="flex flex-col items-end gap-4">
          <button className="flex items-center gap-2">
            حسابي
            <img src="/icons/account.svg" className="w-[21px] h-[21px]" />
          </button>
          <button className="flex items-center gap-2">
            ...بحث
            <img src="/icons/search.svg" className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
