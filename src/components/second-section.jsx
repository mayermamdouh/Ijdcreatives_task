import React from "react";

const SecondPage = () => {
  const date = [
    {
      day: "23",
      name: "الأحد",
    },
    {
      day: "24",
      name: "الإثنين",
    },
    {
      day: "25",
      name: "الثلاثاء",
    },
    {
      day: "26",
      name: "الأربعاء",
    },
    {
      day: "27",
      name: "الخميس",
    },
    {
      day: "28",
      name: "الجمعة",
    },
    {
      day: "29",
      name: "السبت",
    },
    {
      day: "30",
      name: "الأحد",
    },
    {
      day: "01",
      name: "الإثنين",
    },
    {
      day: " ",
      name: " ",
    },
  ];
  return (
    <div className="flex flex-col px-4 sm:px-[110px] py-[50px] text-right w-[100%]">
      <div className="text-[61px] text-[#177245]">رزنامة السباقات</div>

      <div className="relative w-full flex flex-row justify-center mt-7 gap-4">
        <div className="overflow-x-auto w-full sm:w-[85%]">
          <table className="min-w-[800px] sm:w-full border-[2px] border-[#E3E3E3] border-collaps mt-14 ">
            <thead>
              <tr>
                {date.reverse().map((date, index) => (
                  <th
                    key={index}
                    className=" h-[60px] border-[2px] border-[#E3E3E3] text-center py-3 font-[Helvetica Neue LT Arabic]"
                  >
                    <div className="flex flex-col ">
                      {date.day === "28" ? (
                        <div className="text-[57px] text-[#FFBF00]">
                          {date.day}
                        </div>
                      ) : (
                        <div className="text-[57px] text-[#177245]">
                          {date.day}
                        </div>
                      )}
                      <div className="text-[21px] text-[#000E5A]">
                        {date.name}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {date.map((day, index) => {
                  const noDataDays = ["30", "29", "27", "25", "23", " "];
                  const isEmpty = noDataDays.includes(day.day);

                  return (
                    <td
                      key={index}
                      className=" h-[200px] border-[2px] border-[#E3E3E3] py-3 text-center align-middle"
                    >
                      {isEmpty ? (
                        <div className="h-full p-1"></div>
                      ) : (
                        <div className="flex flex-col items-center h-full gap-2 ">
                          {day.day === "28" ? (
                            <>
                              <div className="w-[40px] h-[40px] border-[11px] border-[#008062] rounded-full"></div>
                              <div className="w-[40px] h-[40px] border-[11px] border-[#FFBF00] rounded-full"></div>
                              <div className="w-[40px] h-[40px] border-[11px] border-[#008062] rounded-full"></div>
                            </>
                          ) : (
                            <div className="w-[40px] h-[40px] border-[11px] border-[#008062] rounded-full"></div>
                          )}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[15%] ml-3 text-[#008062]  text-[18px] mr-4 whitespace-nowrap relative ">
          <div className="text-[25px] absolute top-[60%] left-[2%]  sm:left-[40%]">
            الأحداث
          </div>
          <div className="flex flex-col text-[#000000] items-end mt-4">
            <div className="text-[22px]">2024</div>
            <div className="text-[36px]">أكتوبر</div>
            <div className="flex flex-row gap-3 mt-10">
              <img
                className="h-[35px] w-[35px]"
                src="/icons/left-arrow-circle.svg"
                alt="icon"
              ></img>
              <img
                className="h-[35px] w-[35px]"
                src="/icons/right-arrow-circle.svg"
                alt="icon"
              ></img>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-[198px] w-[100%] h-[4px] bg-[#E3E3E3] z-[-1]"></div>
      </div>
    </div>
  );
};

export default SecondPage;
