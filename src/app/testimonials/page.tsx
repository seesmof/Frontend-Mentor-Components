import React from "react";

const MainPage = () => {
  return (
    <>
      <div className="bg-slate-100 flex items-center justify-center min-h-screen">
        <div className="lg:grid-cols-4 md:grid-cols-2 lg:px-6 xl:px-24 2xl:px-48 lg:grid-rows-2 grid grid-cols-1 gap-6 px-4 py-12">
          <article className="rounded-xl bg-violet-700 bg-opacity-90 lg:order-1 lg:col-span-2 relative p-6 shadow-md">
            <img
              src="/testimonials-grid-section/bg-pattern-quotation.svg"
              alt="background pattern"
              className="right-4 absolute top-0 z-10"
            />

            <main className="flex flex-col">
              <header className="text-neutral-50 gap-x-4 flex flex-row items-center">
                <img
                  src="/testimonials-grid-section/image-daniel.jpg"
                  alt="daniel avatar image"
                  className="border-violet-400 object-cover h-10 border-2 rounded-full"
                />

                <div className="flex flex-col">
                  <h2 className="text-sm font-medium capitalize">
                    daniel clifford
                  </h2>
                  <p className="text-violet-400 text-xs capitalize">
                    verified graduate
                  </p>
                </div>
              </header>

              <section className="text-neutral-50 z-20 py-4">
                <h1 className="text-lg font-bold">
                  I received a job offer mid-course, and the subjects I learned
                  were current, if not more so, in the company I joined. I
                  honestly feel I got every penny's worth.
                </h1>
                <p className="text-violet-400 pt-4 text-sm">
                  “ I was an EMT for many years before I joined the bootcamp.
                  I’ve been looking to make a transition and have heard some
                  people who had an amazing experience here. I signed up for the
                  free intro course and found it incredibly fun! I enrolled
                  shortly thereafter. The next 12 weeks was the best - and most
                  gruelling - time of my life. Since completing the course, I've
                  succesfully switched careers, working as a Software Engineer
                  at a VR startup. ”
                </p>
              </section>
            </main>
          </article>
          <article className="rounded-xl bg-slate-600 lg:order-2 lg:col-span-1 p-6 shadow-md">
            <main className="flex flex-col">
              <header className="text-neutral-50 gap-x-4 flex flex-row items-center">
                <img
                  src="/testimonials-grid-section/image-jonathan.jpg"
                  alt="daniel avatar image"
                  className="border-slate-400 object-cover h-10 border-2 rounded-full"
                />

                <div className="flex flex-col">
                  <h2 className="text-sm font-medium capitalize">
                    jonathan walters
                  </h2>
                  <p className="text-slate-400 text-xs capitalize">
                    verified graduate
                  </p>
                </div>
              </header>

              <section className="text-neutral-50 z-20 py-4">
                <h1 className="text-lg font-bold">
                  The team was very supportive and kept me motivated
                </h1>
                <p className="text-slate-400 pt-4 text-sm">
                  “ I started as a total newbie with virtually no coding skills.
                  I now work as a mobile engineer for a big company. This was
                  one of the best investments I've made in myself. ”
                </p>
              </section>
            </main>
          </article>
          <article className="rounded-xl bg-neutral-50 lg:order-4 lg:col-span-1 p-6">
            <main className="flex flex-col">
              <header className="text-neutral-50 gap-x-4 flex flex-row items-center">
                <img
                  src="/testimonials-grid-section/image-jeanette.jpg"
                  alt="daniel avatar image"
                  className="object-cover h-10 border-2 border-gray-400 rounded-full"
                />

                <div className="flex flex-col">
                  <h2 className="text-sm font-medium text-gray-900 capitalize">
                    jeanette harmon
                  </h2>
                  <p className="text-xs text-gray-400 capitalize">
                    verified graduate
                  </p>
                </div>
              </header>

              <section className="z-20 py-4 text-gray-900">
                <h1 className="text-lg font-bold">
                  An overall wonderful and rewarding experience
                </h1>
                <p className="pt-4 text-sm text-gray-400">
                  “ Thank you for the wonderful experience! I now have a job I
                  really enjoy, and make a good living while doing something I
                  love. ”
                </p>
              </section>
            </main>
          </article>
          <article className="rounded-xl lg:order-5 lg:col-span-2 p-6 bg-gray-900">
            <main className="flex flex-col">
              <header className="text-neutral-50 gap-x-4 flex flex-row items-center">
                <img
                  src="/testimonials-grid-section/image-patrick.jpg"
                  alt="daniel avatar image"
                  className="border-neutral-400 object-cover h-10 border-2 rounded-full"
                />

                <div className="flex flex-col">
                  <h2 className="text-neutral-50 text-sm font-medium capitalize">
                    patrick abrams
                  </h2>
                  <p className="text-neutral-400 text-xs capitalize">
                    verified graduate
                  </p>
                </div>
              </header>

              <section className="text-neutral-50 z-20 py-4">
                <h1 className="text-lg font-bold">
                  Awesome teaching support from TAs who did the bootcamp
                  themselves. Getting guidance from them and learning from their
                  experiences was easy.
                </h1>
                <p className="text-neutral-400 pt-4 text-sm">
                  “ The staff seem genuinely concerned about my progress which I
                  find really refreshing. The program gave me the confidence
                  necessary to be able to go out in the world and present myself
                  as a capable junior developer. The standard is above the rest.
                  You will get the personal attention you need from an
                  incredible community of smart and amazing people. ”
                </p>
              </section>
            </main>
          </article>
          <article className="rounded-xl bg-neutral-50 lg:order-3 lg:row-span-2 p-6">
            <main className="flex flex-col">
              <header className="text-neutral-50 gap-x-4 flex flex-row items-center">
                <img
                  src="/testimonials-grid-section/image-kira.jpg"
                  alt="daniel avatar image"
                  className="border-slate-400 object-cover h-10 border-2 rounded-full"
                />

                <div className="flex flex-col">
                  <h2 className="text-slate-900 text-sm font-medium capitalize">
                    kira whittle
                  </h2>
                  <p className="text-slate-400 text-xs capitalize">
                    verified graduate
                  </p>
                </div>
              </header>

              <section className="text-slate-900 z-20 py-4">
                <h1 className="text-lg font-bold">
                  Such a life-changing experience. Highly recommended!
                </h1>
                <p className="text-slate-400 pt-4 text-sm">
                  “ Before joining the bootcamp, I’ve never written a line of
                  code. I needed some structure from professionals who can help
                  me learn programming step by step. I was encouraged to enroll
                  by a former student of their who can only say wonderful things
                  about the program. The entire currciulum and staff did not
                  disappoint. They were very hands-on and I never had to wait
                  long for assistance. The agile team project, in particular,
                  was outstanding. It took my learning to the next level in a
                  way that no tutorial could ever have. In fact, I’ve often
                  referred to it during interviews as an example of my
                  developent experience. It certainly helped me land a job as a
                  full-stack developer after receiving multiple offers. 100%
                  recommend! ”
                </p>
              </section>
            </main>
          </article>
        </div>
      </div>
    </>
  );
};

export default MainPage;
