import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-center bg-no-repeat bg-cover bg-[url('./img/bg-mobile.png')] sm:bg-[url('./img/bg-desktop.png')] flex items-center justify-center">
        <div className="sm:flex-row xl:max-w-6xl container flex flex-col items-end justify-center w-full gap-6 px-6">
          <div className="bg-indigo-900 flex flex-col w-full sm:w-2/5 sm:py-12 rounded-xl rounded-tr-[8rem] md:px-10 px-6 py-8">
            <div className="flex flex-row gap-2">
              <img src="./img/logo.svg" alt="" />
            </div>

            <div className="flex flex-row w-full gap-3 pt-6">
              <div className="bg-slate-900 rounded-xl flex items-center justify-center">
                <img
                  src="./img/icon-document.svg"
                  alt=""
                  className="object-cover p-3"
                />
              </div>
              <div className="bg-slate-900 rounded-xl flex items-center justify-center">
                <img
                  src="./img/icon-folder.svg"
                  alt=""
                  className="object-cover p-3"
                />
              </div>
              <div className="bg-slate-900 rounded-xl flex items-center justify-center">
                <img
                  src="./img/icon-upload.svg"
                  alt=""
                  className="object-cover p-3"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl sm:w-3/5 md:pb-8 md:pt-12 relative flex flex-col w-full px-6 py-8 pb-12 bg-indigo-900">
            <h2 className="md:text-start pb-4 text-center text-indigo-200">
              You've used <span className="font-bold">815 GB</span> of your
              storage
            </h2>
            <div className="bg-indigo-950 relative p-1 rounded-full">
              <div className="bg-gradient-to-r from-red-300 to-pink-500 flex justify-end items-center w-4/5 h-full p-0.5 rounded-full">
                <div className="rounded-full bg-white h-full p-1.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full px-1 pt-1 text-sm font-medium text-indigo-200">
              <div className="uppercase">0 gb</div>
              <div className="uppercase">1000 gb</div>
            </div>

            <div className="bg-neutral-50 rounded-xl md:rounded-br-none md:bottom-36 -bottom-7 md:-right-40 xl:-right-[26rem] lg:-right-[23rem] lg:w-1/4 absolute left-0 right-0 flex items-center justify-center w-2/4 p-3 mx-auto text-center">
              <div className="md:block h-0 w-0 border-b-[20px] border-r-[20px] border-b-transparent p-3 border-solid border-neutral-50 -bottom-5 absolute right-0 hidden"></div>
              <div className="text-neutral-400 text-sm flex items-center gap-1.5 font-medium uppercase">
                <span className="text-slate-900 text-3xl font-bold">185</span>{" "}
                gb left
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
