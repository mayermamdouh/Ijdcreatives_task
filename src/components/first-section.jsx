import React from "react";

const FirstPage = () => {
  return (
    <div
      className="w-full min-h-[calc(100vh-133px)] bg-cover bg-center relative text-[#F8F8F8] text-right pr-[5%] sm:pr-[10%] lg:pr-[14%]"
      style={{ backgroundImage: "url('/home-page/main-img.svg')" }}
    >
      <div className="pt-[13%]">
        <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] mb-4">
          عنوان رئيسي
        </h1>
        <p className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] mb-6">
          العنوان الفرعي هنا او التفاصيل
        </p>
        <button className="bg-[#FFBF00] text-[#000E5A] w-[141px] sm:w-[160px] md:w-[180px] h-[36px] sm:h-[42px] md:h-[48px] rounded-3xl text-[14px] sm:text-[16px] cursor-pointer">
          <div className="flex flex-row justify-center items-center gap-3">
            <img src="/icons/left-arrow.svg" className="w-4 h-4" />
            اذهب إلى
          </div>
        </button>
      </div>

      <div className="mt-[9%] pb-[2%] flex flex-wrap gap-5 justify-end items-center">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-[#008062]/55 w-[280px] sm:w-[300px] md:w-[338px] h-[187px]"
            >
              <div className="flex flex-col p-6 sm:p-8 md:p-10">
                <div className="text-[16px] sm:text-[18px] md:text-[21px]">
                  20/3/2025
                </div>
                <div className="text-[24px] sm:text-[30px] md:text-[38px]">
                  عنوان رئيسي
                </div>
                <div className="text-[16px] sm:text-[18px] md:text-[21px]">
                  العنوان الفرعي هنا او التفاصيل
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirstPage;
