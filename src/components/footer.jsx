import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-[#FFFFFF] w-full">
      <div className="h-auto xl:h-[301px] w-full bg-[#000000E6] px-4 sm:px-10 md:px-16 xl:px-[200px] flex flex-col xl:flex-row-reverse justify-start items-center gap-10 xl:gap-44 py-10 xl:py-0">
        <div className="flex flex-col gap-10 xl:gap-16 w-full xl:w-[70%]">
          <div className="flex flex-col xl:flex-row-reverse gap-6 xl:gap-16 items-center xl:items-start">
            <img src="/logo.svg" alt="logo" className="w-[193px] h-[58px]" />
            <div className="flex flex-row items-center gap-5">
              <img
                alt="tiktok icon"
                src="/icons/tiktok-icon.svg"
                className="w-[20px] h-[23px]"
              />
              <img
                alt="twitter icon"
                src="/icons/twitter-icon.svg"
                className="w-[20px] h-[23px]"
              />
              <img
                alt="instagram icon"
                src="/icons/instagram-icon.svg"
                className="w-[20px] h-[23px]"
              />
              <img
                alt="snapchat icon"
                src="/icons/snapchat-icon.svg"
                className="w-[20px] h-[23px]"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center xl:justify-end gap-4 xl:gap-16 items-center text-[#FFFFFF] text-[16px] xl:text-[20px]">
            <button className="text-center">اتصل بنا</button>
            <button className="text-center">البث المباشر</button>
            <button className="flex items-center gap-2 text-center">
              المسابقات
            </button>
            <button className="text-center">الخدمات</button>
            <button className="text-center">عن ميادين</button>
          </div>
        </div>

        <div className="flex flex-col items-end justify-start gap-4 xl:gap-7 w-full xl:w-[30%]">
          <div className="text-[20px] xl:text-[24px]">النشرة البريدية</div>
          <div className="text-[15px] xl:text-[17px]">
            النص أو الوصف يكتب هنا
          </div>
          <div className="flex flex-col sm:flex-row-reverse items-end sm:items-center gap-2 w-full">
            <input
              placeholder="name@domain.com"
              className="w-full sm:w-[338px] h-[55px] bg-[#FFFFFF] border-[2px] border-[#E3E3E3] rounded-[10px] text-[#E3E3E3] text-right p-3"
            />
            <button className="w-full sm:w-[150px] h-[55px] text-[18px] xl:text-[20px] bg-[#008062] rounded-[10px]">
              اشترك
            </button>
          </div>
        </div>
      </div>

      <div className="h-auto xl:h-[54px] text-[#FFFFFF] w-full bg-[#000000] px-4 sm:px-10 md:px-16 xl:px-20 py-4 xl:py-0 flex flex-col xl:flex-row-reverse justify-center xl:justify-evenly items-center text-center gap-2">
        <p className="ml-0 xl:ml-auto">جميع الحقوق محفوظة</p>
        <p>سياسة الخصوصية | أحكام وشروط | ميثاق العملاء | أدوات الموقع</p>
      </div>
    </footer>
  );
};

export default Footer;
