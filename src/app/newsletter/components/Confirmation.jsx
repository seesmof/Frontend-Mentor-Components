import React from "react";

const Confirmation = ({ email = "your inbox", setEmailSent }) => {
  return (
    <>
      <div className="min-h-screen bg-[#36384d] font-medium w-full flex items-center justify-center">
        <div className="bg-white lg:rounded-xl h-screen lg:h-min lg:w-max lg:max-w-xl lg:p-6 w-full">
          <div className="flex flex-col p-4 h-full justify-between">
            <div className="flex flex-col space-y-5 py-24 lg:py-0">
              <img
                src="/newsletter-sign-up-with-success-message-component/icon-list.svg"
                alt=""
                className="w-16 h-16 lg:w-20 lg:h-20"
              />
              <h2 className="font-bold text-3xl">Thanks for subscribing!</h2>
              <p>
                A confirmation email has been sent to{" "}
                <span className="font-bold">{email}</span>. Please open it and
                click the button inside to confirm your subscription
              </p>
            </div>
            <button
              className="w-full bg-slate-800 text-white p-4 rounded-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:shadow-lg hover:shadow-orange-400/50 active:scale-95 self-end lg:mt-8"
              onClick={() => setEmailSent(false)}
            >
              Dismiss message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
