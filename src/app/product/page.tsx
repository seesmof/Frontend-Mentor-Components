import React from "react";

const MainPage = () => {
  return (
    <>
      <div className="min-h-screen bg-orange-50 w-full flex justify-center items-center">
        <main className="flex flex-col sm:flex-row bg-white m-4 md:m-24 max-w-4xl rounded-xl overflow-hidden">
          <section className="relative sm:w-1/2">
            <img
              src="/product-preview-card-component/image-product-mobile.jpg"
              alt="parfume product photo"
              className="object-cover w-full h-full block sm:hidden"
            />
            <img
              src="/product-preview-card-component/image-product-desktop.jpg"
              alt="perfume product photo"
              className="object-cover w-full h-full sm:block hidden"
            />
          </section>
          <section className="flex flex-col sm:justify-between p-5 sm:p-7 md:p-9 sm:w-1/2">
            <p className="uppercase tracking-[.2rem] md:tracking-[.4rem] text-gray-500 sm:pt-4">
              perfume
            </p>
            <h1 className="capitalize font-serif font-bold text-3xl md:text-4xl lg:text-5xl py-3 text-gray-800">
              gabrielle essense eau de parfum
            </h1>
            <p className="text-gray-500 tracking-wide sm:text-lg md:text-xl">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex flex-row items-center py-4 gap-x-5">
              <div className="text-emerald-700 font-bold font-serif text-3xl md:text-4xl lg:text-5xl">
                $149.99
              </div>
              <div className="line-through text-gray-500 md:text-lg">
                $169.99
              </div>
            </div>
            <a
              href="#"
              className="bg-emerald-700 flex justify-center text-white gap-x-2 font-medium py-3 duration-300 hover:bg-emerald-800 rounded-xl sm:mb-4"
            >
              <i className="bi bi-cart"></i>
              Add to Cart
            </a>
          </section>
        </main>
      </div>
    </>
  );
};

export default MainPage;
