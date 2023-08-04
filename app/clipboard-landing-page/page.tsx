import React from "react";

const MainPage = () => {
  return (
    <>
      <section className="w-full bg-center bg-no-repeat bg-cover bg-[url('/clipboard-landing-page/bg-header-mobile.png')] md:bg-[url('/clipboard-landing-page/bg-header-desktop.png')]">
        <div className="text-zinc-600 container flex flex-col items-center justify-center max-w-4xl p-6 py-20 mx-auto text-center">
          <img
            src="/clipboard-landing-page/logo.svg"
            alt="logo image"
            className="object-cover"
          />
          <h1 className="heading md:text-4xl pt-8 text-2xl">
            A history of everything you copy
          </h1>
          <p className="text-zinc-400 md:text-lg pt-4">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="md:flex-row md:w-1/2 flex flex-col items-center w-full gap-5 pt-8">
            <div className="group relative w-full">
              <a
                href="#"
                className="text-teal-50 bottom-1 group-hover:bottom-0 group-active:scale-95 relative block w-full py-2 font-semibold duration-500 bg-teal-500 rounded-full"
              >
                Download for iOS
              </a>
              <div className="-z-10 group-active:scale-95 shadow-teal-200 absolute top-0 w-full py-2 duration-500 bg-teal-600 rounded-full shadow-2xl">
                Download for iOS
              </div>
            </div>
            <div className="group relative w-full">
              <a
                href="#"
                className="text-indigo-50 bottom-1 group-hover:bottom-0 group-active:scale-95 relative block w-full py-2 font-semibold duration-500 bg-indigo-500 rounded-full"
              >
                Download for iOS
              </a>
              <div className="-z-10 group-active:scale-95 shadow-indigo-300 absolute top-0 w-full py-2 duration-500 bg-indigo-600 rounded-full shadow-2xl">
                Download for Mac
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container flex flex-col items-center justify-center max-w-4xl p-6 mx-auto text-center">
          <header className="flex flex-col items-center justify-center">
            <h2 className="heading md:text-4xl text-2xl">
              Keep track of your snippets
            </h2>
            <p className="text-zinc-400 md:text-lg pt-4">
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </p>
          </header>
        </div>
      </section>
      <div className="md:flex-row lg:gap-12 md:gap-6 md:max-w-full flex flex-col items-center max-w-4xl p-6 pt-8 pb-20">
        <img
          src="/clipboard-landing-page/image-computer.png"
          alt="image of a computer"
          className="md:h-full md:-left-12 md:w-1/2 relative pb-8"
        />
        <div className="md:text-left lg:gap-12 flex flex-col max-w-lg gap-6 text-center">
          <div className="flex flex-col">
            <h3 className="heading md:text-2xl text-xl">Quick Search</h3>
            <p className="text-zinc-400 md:text-lg pt-2">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="heading md:text-2xl text-xl">iCloud Sync</h3>
            <p className="text-zinc-400 md:text-lg pt-2">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="heading md:text-2xl text-xl">Complete History</h3>
            <p className="text-zinc-400 md:text-lg pt-2">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full">
        <div className="container flex flex-col items-center justify-center max-w-4xl p-6 pb-20 mx-auto text-center">
          <header className="flex flex-col items-center justify-center">
            <h2 className="heading md:text-4xl text-2xl">
              Access Clipboard anywhere
            </h2>
            <p className="text-zinc-400 md:text-lg pt-4">
              Whether you're on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </p>
          </header>
          <img
            src="/clipboard-landing-page/image-devices.png"
            alt="image of devices"
            className="w-full pt-6"
          />
        </div>
      </section>

      <section className="w-full">
        <div className="container flex flex-col items-center justify-center max-w-6xl p-6 pb-20 mx-auto text-center">
          <header className="flex flex-col items-center justify-center">
            <h2 className="heading md:text-4xl text-2xl">
              Supercharge your workflow
            </h2>
            <p className="text-zinc-400 md:text-lg pt-4">
              We've got the tools to boost your productivity
            </p>
          </header>
          <div className="lg:grid-cols-3 grid items-start grid-cols-1 gap-10 pt-16">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/clipboard-landing-page/icon-blacklist.svg"
                alt=""
                className="pb-6"
              />
              <h2 className="heading md:text-2xl text-xl">Create blacklists</h2>
              <p className="text-zinc-400 md:text-lg pt-2">
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/clipboard-landing-page/icon-text.svg"
                alt=""
                className="pb-6"
              />
              <h2 className="heading md:text-2xl text-xl">
                Plain text snippets
              </h2>
              <p className="text-zinc-400 md:text-lg pt-2">
                Remove unwanted information from copied text for a consistent
                look.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/clipboard-landing-page/icon-preview.svg"
                alt=""
                className="pb-6"
              />
              <h2 className="heading md:text-2xl text-xl">Sneak preview</h2>
              <p className="text-zinc-400 md:text-lg pt-2">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-7xl container p-6 pb-20 mx-auto text-center">
          <div className="lg:flex-row lg:justify-between flex flex-col items-center justify-center gap-12">
            <img
              src="/clipboard-landing-page/logo-google.png"
              alt="google logo"
              className="max-w-xs"
            />
            <img
              src="/clipboard-landing-page/logo-ibm.png"
              alt="ibm logo"
              className="max-w-xs"
            />
            <img
              src="/clipboard-landing-page/logo-microsoft.png"
              alt="microsoft logo"
              className="max-w-xs"
            />
            <img
              src="/clipboard-landing-page/logo-hp.png"
              alt="hp logo"
              className="max-w-xs"
            />
            <img
              src="/clipboard-landing-page/logo-vector-graphics.png"
              alt="vector graphics logo"
              className="max-w-xs"
            />
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container flex flex-col items-center justify-center max-w-4xl p-6 pb-20 mx-auto text-center">
          <h2 className="heading md:text-4xl pt-8 text-2xl">
            Clipboard for iOS and Mac OS
          </h2>
          <p className="text-zinc-400 md:text-lg pt-4">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCould and you're ready to start adding to your clipboard.
          </p>
          <div className="md:flex-row md:w-1/2 flex flex-col items-center w-full gap-5 pt-8">
            <div className="group relative w-full">
              <a
                href="#"
                className="text-teal-50 bottom-1 group-hover:bottom-0 group-active:scale-95 relative block w-full py-2 font-semibold duration-500 bg-teal-500 rounded-full"
              >
                Download for iOS
              </a>
              <div className="-z-10 group-active:scale-95 shadow-teal-200 absolute top-0 w-full py-2 duration-500 bg-teal-600 rounded-full shadow-2xl">
                Download for iOS
              </div>
            </div>
            <div className="group relative w-full">
              <a
                href="#"
                className="text-indigo-50 bottom-1 group-hover:bottom-0 group-active:scale-95 relative block w-full py-2 font-semibold duration-500 bg-indigo-500 rounded-full"
              >
                Download for iOS
              </a>
              <div className="-z-10 group-active:scale-95 shadow-indigo-300 absolute top-0 w-full py-2 duration-500 bg-indigo-600 rounded-full shadow-2xl">
                Download for Mac
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 md:mt-12 w-full mt-6">
        <div className="md:flex-row md:justify-between container flex flex-col items-center justify-center max-w-6xl p-6 pb-12 mx-auto">
          <div className="w-[20%] flex items-center justify-center">
            <img
              src="/clipboard-landing-page/logo.svg"
              alt="logo image"
              className="object-cover md:w-[30%] w-[60%]"
            />
          </div>
          <div className="text-zinc-500 md:flex-row md:gap-x-24 flex flex-col flex-wrap flex-1 gap-4 py-8 text-center">
            <a href="#" className="footer-link">
              FAQs
            </a>
            <a href="#" className="footer-link">
              contact us
            </a>
            <a href="#" className="footer-link">
              privacy policy
            </a>
            <a href="#" className="footer-link">
              press kit
            </a>
            <a href="#" className="footer-link">
              install guide
            </a>
          </div>
          <div className="flex flex-row md:justify-center gap-6 md:w-[30%]">
            <img
              src="/clipboard-landing-page/icon-facebook.svg"
              alt="facebook logo"
              className="object-cover"
            />
            <img
              src="/clipboard-landing-page/icon-twitter.svg"
              alt="twitter logo"
              className="object-cover"
            />
            <img
              src="/clipboard-landing-page/icon-instagram.svg"
              alt="instagram logo"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
