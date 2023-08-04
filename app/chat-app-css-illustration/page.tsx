import React from "react";

const MainPage = () => {
  return (
    <>
      <div className="relative z-10 w-full min-h-screen overflow-hidden bg-gray-100">
        <div className="rounded-br-full rounded-bl-full bg-gradient-to-tr to-[#e942ef] from-[#8838ff] w-[100vw] h-[50vh] top-0 -left-1/2 md:-left-2/3 absolute -z-10"></div>
        <div className="rounded-tr-full rounded-tl-full bg-[#c6c2c6] bg-opacity-10 w-[100vw] h-[50vh] bottom-0 -right-1/2 md:-right-2/3 absolute -z-10"></div>

        <main className="md:flex-row md:px-8 z-10 flex flex-col items-center justify-center max-w-5xl min-h-screen gap-8 mx-auto">
          <div className="md:w-1/2">
            <div className="bg-neutral-50 w-[18rem] shadow-2xl p-3 h-[620px] rounded-3xl">
              <div className="rounded-2xl relative w-full h-full overflow-hidden bg-gray-100">
                <div className="bg-neutral-50 rounded-br-2xl rounded-bl-2xl absolute top-0 left-0 right-0 w-3/5 h-6 mx-auto"></div>

                <header className="bg-gradient-to-r to-[#e942ef] text-neutral-50 from-[#8838ff] pt-9 p-3 rounded-br-lg rounded-bl-lg shadow-sm">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                      <div className="flex flex-row items-center gap-1">
                        <i className="bi-chevron-left"></i>
                        <img
                          src="/chat-app-css-illustration/avatar.jpg"
                          alt="avatar picture"
                          className="border-opacity-60 border-neutral-50 object-cover w-8 h-8 border-2 rounded-full"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <h2 className="text-sm font-medium capitalize">
                          samuel green
                        </h2>
                        <div className="text-neutral-50 text-opacity-60 text-xs">
                          Available to Walk
                        </div>
                      </div>
                    </div>
                    <i className="bi-three-dots-vertical"></i>
                  </div>
                </header>

                <main className="flex text-[.7rem] flex-col h-full p-2 gap-y-2">
                  <div className="bg-opacity-10 rounded-xl w-2/3 p-2 font-medium text-purple-600 bg-purple-600 rounded-bl-sm shadow-sm">
                    That sounds great. I'd be happy to discuss more.
                  </div>
                  <div className="bg-opacity-10 rounded-xl w-2/3 p-2 font-medium text-purple-600 bg-purple-600 rounded-bl-sm shadow-sm">
                    Could you send over some pictures of your dog, please?
                  </div>
                  <div className="flex flex-row self-end w-2/3 gap-2">
                    <img
                      src="/chat-app-css-illustration/dog-image-1.jpg"
                      alt="char dog image"
                      className="object-cover w-12 h-12 rounded-md shadow-sm"
                    />
                    <img
                      src="/chat-app-css-illustration/dog-image-2.jpg"
                      alt="char dog image"
                      className="object-cover w-12 h-12 rounded-md shadow-sm"
                    />
                    <img
                      src="/chat-app-css-illustration/dog-image-3.jpg"
                      alt="char dog image"
                      className="object-cover w-12 h-12 rounded-md shadow-sm"
                    />
                  </div>
                  <div className="text-slate-900 bg-neutral-50 rounded-xl self-end w-2/3 p-2 rounded-br-sm shadow-sm">
                    Here are a few pictures. She's a happy girl
                  </div>
                  <div className="text-slate-900 bg-neutral-50 rounded-xl self-end p-2 px-3 rounded-br-sm shadow-sm">
                    Can you make it?
                  </div>
                  <div className="bg-opacity-10 rounded-xl w-2/3 p-2 font-medium text-purple-600 bg-purple-600 rounded-bl-sm shadow-sm">
                    She looks so happy! The time we discussed works. How long
                    shall I take her out for?
                  </div>
                  <div className="bg-gradient-to-r px-2 py-3 from-[#e942ef] to-[#8838ff] w-3/4 rounded-xl rounded-bl-sm text-neutral-50 flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                      <i className="bi-circle"></i>
                      30 minutes walk
                    </div>
                    <div className="pr-3 text-base font-bold">$29</div>
                  </div>
                  <div className="bg-gradient-to-r px-2 py-3 from-[#e942ef] to-[#8838ff] w-3/4 rounded-xl rounded-bl-sm text-neutral-50 flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                      <i className="bi-circle"></i>1 hour walk
                    </div>
                    <div className="pr-3 text-base font-bold">$49</div>
                  </div>
                  <div className="rounded-xl bg-neutral-50 flex items-center justify-between w-full py-1 mt-1">
                    <div className="pl-4 text-gray-400">Type a message...</div>
                    <div className="bg-purple-950 text-neutral-50 flex items-center justify-center w-6 h-6 mr-1 rounded-full">
                      <i className="bi-chevron-right"></i>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>

          <div className="md:text-start md:items-start flex flex-col items-center justify-center max-w-lg gap-4 px-12 text-center">
            <h1 className="text-zinc-700 text-4xl font-bold">Simple booking</h1>
            <p className="text-zinc-400 font-medium">
              Stay in touch with out dog walkers through the chat interface.
              This makes it easy to discuss arrangements and make bookings. Once
              the walk has been completed you can rate your walker and book
              again through the chat.
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
