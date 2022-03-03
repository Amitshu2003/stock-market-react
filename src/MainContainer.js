import React from "react";

function MainContainer() {
  return (
    <div className="py-8 mt-2 p-4 w-[100%] sm:w-[88%] bg-[#FCFCFC]">
      <div className="flex flex-row flex-shrink items-center justify-between">
        <div>
          <h1 className="md:text-3xl sm:text-xl text-base mb-2 font-medium">Dashboard</h1>
          <p className="text-[8px] sm:text-base text-[#AAB0C4]">Welcome back, Andrew</p>
        </div>
        <div className="flex flex-row sm:space-x-6 ml-4 items-center">
          <button className="p-1 m-1 sm:p-2 text-[8px] sm:text-base rounded-md text-white bg-[#00E38C]">
            <i className="fa-solid fa-plus"></i> Add Unit
          </button>
          <div className="flex flex-col sm:flex-row justify-center sm:items-center">
          <img
            src="https://randomuser.me/api/portraits/men/34.jpg"
            alt=""
            className="rounded-full w-8 h-8 sm:w-11 sm:h-11 mx-auto sm:mr-4"
          />
          <p className="text-[12px] sm:text-base text-[#B4B8CA]">Andrew Johnstons</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-shrink flex-wrap justify-around items-center mt-8">
        <div className="pr-4 h-16 sm:pr-12 lg:pr-24 w-[25%] sm:w-auto border-r-2 space-y-1 md:space-y-4">
          <h1 className="text-[10px] sm:text-sm lg:text-base text-[#AAB0C4]">BALANCE</h1>
          <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold">$5900.00</h2>
        </div>
        <div className="pr-4 h-16 sm:pr-12 w-[25%] sm:w-auto lg:pr-24 border-r-2 space-y-4 ml-10">
          <h1 className="text-[10px] sm:text-sm lg:text-base text-[#AAB0C4]">PROFITS</h1>
          <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold">
            $950.00{" "}
            <span className="text-[#00E38C] text-[8px] lg:text-sm  pl-4">
              <i class="fa-solid fa-caret-up mr-2"></i>+56 %
            </span>
          </h2>
        </div>
        <div className="pr-4 h-16 sm:pr-12 w-[25%] sm:w-auto lg:pr-24 border-r-2 space-y-4 ml-10">
          <h1 className="text-[10px] sm:text-sm lg:text-base text-[#AAB0C4]">LOSSES</h1>
          <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold">
            $450.00
            <span className="text-[#FF4B75] text-[8px] md:text-sm pl-4 text-sm">
              <i class="fa-solid fa-caret-down mr-2"></i>+56 %
            </span>
          </h2>
        </div>
        <div className="ml-1 h-16 sm:ml-10 w-[25%] sm:w-auto space-y-4 mt-2 flex flex-col items-center justify-center">
          <h2 className="text-[10px] sm:text-sm lg:text-base text-[#AAB0C4]">CURRENCIES</h2>
          <div className="flex flex-row">
          <i class="fa-solid fa-bitcoin-sign bg-blue-100 rounded-full text-blue-500 px-[4px] py-[2px] lg:px-2 lg:py-1"></i>
          <i class="fa-solid fa-dollar-sign bg-blue-100 rounded-full text-blue-500 mx-2 px-[4px] py-[2px] sm:px-2 sm:py-1"></i>
          <i class="fa-solid fa-euro-sign bg-blue-100 rounded-full text-blue-500 px-[4px] py-[2px] sm:px-2 sm:py-1"></i>
          <i class="fa-solid fa-yen-sign bg-blue-100 rounded-full text-blue-500 mx-2 px-[4px] py-[2px] sm:px-2 sm:py-1"></i>
          </div>
        </div>
      </div>

      <div className="ml-2 mt-10 mr-2 shadow-lg p-4 flex bg-white flex-row flex-wrap items-center sm:justify-between justify-center space-y-2">
        <div className="text-center space-y-2">
          <h1 className="text-[#9A9EB1]">Italy</h1>
          <h1 className=" text-base sm:text-xl md:text-2xl font-medium ml-4">
            475{" "}
            <i class="fa-solid fa-caret-up text-lg m-1 text-[#00E38C] mr-2"></i>
          </h1>
          <img src={require("./img3.jpeg")} alt="" className="w-32 h-10" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-[#9A9EB1]">United States</h1>
          <h1 className="text-base sm:text-xl md:text-2xl font-medium">
            431{" "}
            <i class="fa-solid fa-caret-up text-lg m-1 text-[#00E38C] mr-2"></i>
          </h1>
          <img src={require("./img2.jpeg")} alt="" className="w-32 h-10" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-[#9A9EB1]">Canada</h1>
          <h1 className="text-base sm:text-xl md:text-2xl font-medium">
            174{" "}
            <i class="fa-solid fa-caret-down m-1 text-lg text-[#FF4B75] mr-2"></i>
          </h1>
          <img src={require("./img1.jpeg")} alt="" className="w-32 h-10" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-[#9A9EB1]">Spain</h1>
          <h1 className="text-base sm:text-xl md:text-2xl font-medium">
            475{" "}
            <i class="fa-solid fa-caret-up m-1 text-lg text-[#00E38C] mr-2"></i>
          </h1>
          <img src={require("./img3.jpeg")} alt="" className="w-32 h-10" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-[#9A9EB1]">Japan</h1>
          <h1 className="text-base sm:text-xl md:text-2xl font-medium">
            134{" "}
            <i class="fa-solid fa-caret-up m-1 text-lg text-[#00E38C] mr-2"></i>
          </h1>
          <img src={require("./img2.jpeg")} alt="" className="w-32 h-10" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-[#9A9EB1]">South Africa</h1>
          <h1 className="text-base sm:text-xl md:text-2xl font-medium">
            471{" "}
            <i class="fa-solid fa-caret-down text-lg m-1 text-[#FF4B75] mr-2"></i>
          </h1>
          <img src={require("./img1.jpeg")} alt="" className="w-32 h-10" />
        </div>
      </div>


      <div className="flex flex-row sm:flex-nowrap flex-shrink flex-wrap sm:justify-center justify-around m-2 mt-4 space-y-4">
        <div className="flex flex-col m-2 sm:mt-3 space-y-2 w-[100%] sm:w-[50%]">
          <div className="flex flex-row items-center justify-between m-2 mt-0">
            <h1 className="text-sm sm:text-base md:text-xl font-medium">Team Members</h1>
            <h1 className="text-xs sm:text-sm text-blue-600 ">View All</h1>
          </div>

          <div className="flex flex-row items-center justify-between p-3 text-center shadow-lg">
            <div className="flex flex-row items-center bg-white text-sm sm:text-base">
              <img
                src="https://randomuser.me/api/portraits/men/34.jpg"
                alt=""
                className="w-6 h-6 rounded-full mr-2"
              />
              Andrew Johnston
            </div>
            <div className="bg-green-100 text-[#00E38C] font-semibold px-1 w-fit h-fit sm:px-2 md:px-3 md:py-1 rounded-2xl text-[8px] sm:text-xs ">
              Top Trader
            </div>
          </div>

          <div className="flex flex-row justify-between items-center p-3 bg-white  text-center shadow-lg">
            <div className="flex flex-row items-center text-sm sm:text-base">
              <img
                src="https://randomuser.me/api/portraits/men/61.jpg"
                alt=""
                className="w-6 h-6 rounded-full mr-2"
              />
              Anna Atkinsons
            </div>
            <div className="bg-blue-100 text-blue-600 font-semibold px-1 w-fit h-fit sm:px-2 md:px-3 md:py-1 rounded-2xl text-[8px] sm:text-xs ">
              Manager
            </div>
          </div>
          <div className="flex flex-row justify-between items-center p-3 bg-white text-center shadow-lg">
            <div className="flex flex-row items-center text-sm sm:text-base">
              <img
                src="https://randomuser.me/api/portraits/men/26.jpg"
                alt=""
                className="w-6 h-6 rounded-full mr-2"
              />
              Mark Atkinsons
            </div>
            <div className="bg-green-100 text-[#00E38C] font-semibold   px-1  w-fit h-fit sm:px-2 md:px-3 md:py-1 rounded-2xl text-[8px] sm:text-xs ">
              Top Trader
            </div>
          </div>
          <div className="flex flex-row justify-between items-center p-3 bg-white  text-center shadow-lg">
            <div className="flex flex-row items-center text-sm sm:text-base">
              <img
                src="https://randomuser.me/api/portraits/women/49.jpg"
                alt=""
                className="w-6 h-6 rounded-full mr-2"
              />
              Johanna Tairons
            </div>
            <div className="bg-blue-100 text-blue-600 font-semibold px-1 w-fit h-fit sm:px-2 md:px-3 md:py-1 rounded-2xl text-[8px] sm:text-xs ">
              Manager
            </div>
          </div>
        </div>

        <div className="flex flex-col m-2 mt-0 w-[100%] sm:w-[50%]">
          <div className="flex flex-row justify-between m-2 mt-0">
            <h1 className="text-sm sm:text-base md:text-xl font-medium">Comparison</h1>
            <h1 className="text-xs sm:text-sm text-blue-600">View All</h1>
          </div>

          <div className="flex flex-col shadow-xl space-y-6 px-4 bg-white text-xs ">
            <div className="py-3">
              <div className="flex flex-row items-center">
                <img
                  src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"
                  alt=""
                  className="w-5 h-4 mr-4"
                />
                United States
              </div>
              <div className="flex flex-row items-center mt-2">
                <div className="w-[93%] h-[6px] bg-[#00E38C] rounded-lg"></div>
                <h1 className="text-xs ml-3">93%</h1>
              </div>
            </div>

            <div>
              <div className="flex flex-row items-center">
                <img
                  src="https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png"
                  alt=""
                  className="w-5 h-4 mr-4"
                />
                Italy
              </div>
              <div className="flex flex-row items-center mt-2">
                <div className="w-[73%]  h-[6px] bg-[#00E38C] rounded-lg"></div>
                <h1 className="text-xs ml-3">73%</h1>
              </div>
            </div>

            <div className="py-3">
              <div className="flex flex-row items-center">
                <img
                  src="https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png"
                  alt=""
                  className="w-5 h-4 mr-4"
                />
                Spain
              </div>
              <div className="flex flex-row items-center mt-2">
                <div className="w-[23%] h-[6px] bg-[#00E38C] rounded-lg"></div>
                <h1 className="text-xs ml-4">13%</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
