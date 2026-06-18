import React from "react";

const MainPage = () => {
  return (
    <>
      <div className="text-[15px] bg-slate-200 min-h-screen w-full flex justify-center items-center">
        <div className="bg-neutral-50 max-w-xs rounded-2xl p-4 flex flex-col m-6 gap-4 pb-8">
          <img
            src="/qr-code-component/image-qr-code.png"
            alt="qr code image"
            className="rounded-xl"
          />
          <h1 className="text-center text-slate-800 font-bold text-xl">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-center text-slate-500 px-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
