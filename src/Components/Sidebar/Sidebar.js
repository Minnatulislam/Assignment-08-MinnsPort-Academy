import React from 'react';
const Sidebar = ({ cartTime, handleBreakTime, breakTime,notifySuccess }) => {
    return (
      <div className="bg-slate-100 sticky top-0 py-8 px-5">
        <div className="flex justify-center gap-3">
          <img
            className="w-12 h-12 rounded-xl"
            src="https://scontent-ccu1-1.xx.fbcdn.net/v/t39.30808-6/290341996_2334174193417521_8139725824092930502_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHlYWcBVZnGXYr0ghqKGxc-nCTTqyed6n6cJNOrJ53qfpeFrIUPf8b4gZw29kvDOApc-q_Ni3xRaa9Ea5Je3Zvh&_nc_ohc=aZ0yMCqkOwgAX-QZ8LA&_nc_zt=23&_nc_ht=scontent-ccu1-1.xx&oh=00_AT-kw8UU3czb0O3VEvWp9D8k_mTK8jus4pnqMnbCYjIFWA&oe=633B6C65"
            alt=""
          />
          <div>
            <h3 className="md:text-base lg:text-xl text-slate-700 font-semibold">
              S.M Minnatul Islam
            </h3>
            <div className="flex items-center text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p>Dhaka, Bangladesh.</p>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-3 justify-center rounded-lg bg-slate-200 my-5 p-4">
          <div>
            <h1 className="text-3xl font-semibold text-slate-700">
              68<sub className="text-base font-normal text-slate-400">kg</sub>
            </h1>
            <p className="text-slate-500">Weight</p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-slate-700">5.5</h1>
            <p className="text-slate-500">Height</p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-slate-700">
              25<sub className="text-base font-normal text-slate-400">yrs</sub>
            </h1>
            <p className="text-slate-500">Age</p>
          </div>
        </div>
  
        <h3 className="text-xl font-semibold text-slate-600 mb-4">Add A Break</h3>
        <div className="grid grid-cols-5 gap-2 py-4 px-3 rounded-lg bg-slate-200">
          <button
            onClick={(e) => handleBreakTime(e.target.value)}
            value="10"
            style={{ textTransform: "none" }}
            className="btn btn-outline rounded-full text-base font-semibold text-slate-600"
          >
            10s
          </button>
          <button
            onClick={(e) => handleBreakTime(e.target.value)}
            value="20"
            style={{ textTransform: "none" }}
            className="btn btn-outline rounded-full text-base font-semibold text-slate-600"
          >
            20s
          </button>
          <button
            onClick={(e) => handleBreakTime(e.target.value)}
            value="30"
            style={{ textTransform: "none" }}
            className="btn btn-outline rounded-full text-base font-semibold text-slate-600"
          >
            30s
          </button>
          <button
            onClick={(e) => handleBreakTime(e.target.value)}
            value="40"
            style={{ textTransform: "none" }}
            className="btn btn-outline rounded-full text-base font-semibold text-slate-600"
          >
            40s
          </button>
          <button
            onClick={(e) => handleBreakTime(e.target.value)}
            value="50"
            style={{ textTransform: "none" }}
            className="btn btn-outline rounded-full text-base font-semibold text-slate-600"
          >
            50s
          </button>
        </div>
  
        <h3 className="text-xl font-semibold text-slate-600 mt-5 mb-4">
          Exercise Details
        </h3>
        <div className="bg-slate-200 py-3 px-3 rounded-lg flex justify-between mb-4">
          <h4 className="text-lg font-semibold text-slate-600">
            Exercise Time
          </h4>
          <p className="font-semibold text-slate-500">{cartTime || 0} seconds</p>
        </div>
        <div className="bg-slate-200 py-3 px-3 rounded-lg flex justify-between">
          <h4 className="text-lg font-semibold text-slate-600">Break time</h4>
          <p className="font-semibold text-slate-500">{breakTime || 0} seconds</p>
        </div>
  
        <button onClick={notifySuccess} className="btn mt-10 bg-blue-400 px-8  py-2">Activity Completed</button>
      </div>
    );
  };
  
export default Sidebar;