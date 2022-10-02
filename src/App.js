import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import AllCart from "./Components/AllCart/AllCart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Questions from "./Components/Questions/Questions";
import Sidebar from "./Components/Sidebar/Sidebar";


function App() {const [trainings, setTrainings] = useState([]);

  const [cartTime, setCartTime] = useState(0);

  const [setBreakTime] = useState(0);

  const savedCartTime = localStorage.getItem("cart-time");
  let totalCartTime = 0;
  const handleCartTime = (time) => {
    if (savedCartTime) {
      totalCartTime = time + parseInt(savedCartTime);
    } else {
      totalCartTime = time + cartTime;
    }
    setCartTime(totalCartTime);
    localStorage.setItem("cart-time", totalCartTime);
  };
  const savedBreakTime = localStorage.getItem("break-time");
  const handleBreakTime = (e) => {
    setBreakTime(e);
    localStorage.setItem("break-time", e);
  };

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setTrainings(data));
  }, []);

  const notifySuccess = () =>
    toast.success("Congrats... You completed your exercise.", {
      position: "top-center",
    });
  return (
    <div className="App container mx-auto">
      <ToastContainer />
      <div className="flex md:gap-5 lg:gap-10">
        <div className="lg:w-3/4 px-5">
          <Header></Header>

          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content lg:ml-2">
              <AllCart
                trainings={trainings}
                handleCartTime={handleCartTime}
              ></AllCart>
              <Questions></Questions>
              <Footer></Footer>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                className="drawer-overlay block lg:hidden"
              ></label>
              <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content block lg:hidden">
                <li>
                  <div className="flex justify-center gap-3 bg-slate-200">
                    <img
                      className="w-12 h-12 rounded-xl"
                      src="https://yt3.ggpht.com/ytc/AMLnZu_xdP6VGIIwJeEDdry1mtZkURbwdR5MtPtSp0NOQw=s900-c-k-c0x00ffffff-no-rj"
                      alt=""
                    />
                    <div>
                      <h3 className="md:text-base lg:text-xl text-slate-700 font-semibold">
                        Indrajith Goswami
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
                        <p>Chittagong, Bangladesh.</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid grid-cols-3 justify-items-center rounded-lg bg-slate-200 my-5 p-4">
                    <div>
                      <h1 className="text-3xl font-semibold text-slate-700">
                        68
                        <sub className="text-base font-normal text-slate-400">
                          kg
                        </sub>
                      </h1>
                      <p className="text-slate-500">Weight</p>
                    </div>
                    <div>
                      <h1 className="text-3xl font-semibold text-slate-700">
                        5.5
                      </h1>
                      <p className="text-slate-500">Height</p>
                    </div>
                    <div>
                      <h1 className="text-3xl font-semibold text-slate-700">
                        25
                        <sub className="text-base font-normal text-slate-400">
                          yrs
                        </sub>
                      </h1>
                      <p className="text-slate-500">Age</p>
                    </div>
                  </div>
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-slate-600">
                    Add A Break
                  </h3>
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
                      className="btn btn-outline rounded-full  text-base font-semibold text-slate-600"
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
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-slate-600">
                    Exercise Details
                  </h3>
                  <div className="bg-slate-200 py-3 px-3 rounded-lg flex justify-between mb-4">
                    <h4 className="text-lg font-semibold text-slate-600">
                      Exercise Time
                    </h4>
                    <p className="font-semibold text-slate-500">
                      {savedCartTime} seconds
                    </p>
                  </div>
                  <div className="bg-slate-200 py-3 px-3 rounded-lg flex justify-between">
                    <h4 className="text-lg font-semibold text-slate-600">
                      Break time
                    </h4>
                    <p className="font-semibold text-slate-500">
                      {savedBreakTime} seconds
                    </p>
                  </div>
                </li>
                <li>
                  <button
                    onClick={notifySuccess}
                    className="btn w-full mt-10 text-slate-300"
                  >
                    Activity Completed
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-slate-100 hidden lg:block">
          <Sidebar
            cartTime={savedCartTime}
            handleBreakTime={handleBreakTime}
            breakTime={savedBreakTime}
            notifySuccess={notifySuccess}
          ></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
