export default function Latestpage() {
  return (
    <div class="container my-24 px-6 mx-auto">
      <section class="mb-32 text-gray-800">
        <h2 class="text-3xl font-bold mb-12 text-center">Latest articles</h2>

        <div class="grid lg:grid-cols-3 gap-6">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
            style="background-position: 50%;"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/051.jpg"
              class="w-full"
            />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.4)"
              >
                <div class="flex justify-start items-end h-full">
                  <div class="text-white m-6">
                    <h5 class="font-bold text-lg mb-3">I miss the sun</h5>
                    <p>
                      <small>
                        Published <u>13.01.2022</u> by Anna Maria Doe
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div
            class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
              class="w-full"
            />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.4)"
              >
                <div class="flex justify-start items-end h-full">
                  <div class="text-white m-6">
                    <h5 class="font-bold text-lg mb-3">
                      Adventure in the desert
                    </h5>
                    <p>
                      <small>
                        Published <u>12.01.2022</u> by Mark Equel
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div
            class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/045.jpg"
              class="w-full"
            />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.4)"
              >
                <div class="flex justify-start items-end h-full">
                  <div class="text-white m-6">
                    <h5 class="font-bold text-lg mb-3">Lonely mountain</h5>
                    <p>
                      <small>
                        Published <u>10.01.2022</u> by Bilbo baggins
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div
            class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/047.jpg"
              class="w-full"
            />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.4)"
              >
                <div class="flex justify-start items-end h-full">
                  <div class="text-white m-6">
                    <h5 class="font-bold text-lg mb-3">Let's go!</h5>
                    <p>
                      <small>
                        Published <u>09.01.2022</u> by Halley Frank
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div
            class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/028.jpg"
              class="w-full"
            />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.4)"
              >
                <div class="flex justify-start items-end h-full">
                  <div class="text-white m-6">
                    <h5 class="font-bold text-lg mb-3">
                      A hut in the mountains
                    </h5>
                    <p>
                      <small>
                        Published <u>07.01.2022</u> by David Beak
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div
            class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/049.jpg"
              class="w-full"
            />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.4)"
              >
                <div class="flex justify-start items-end h-full">
                  <div class="text-white m-6">
                    <h5 class="font-bold text-lg mb-3">Beautiful waterfall</h5>
                    <p>
                      <small>
                        Published <u>04.01.2022</u> by Joe Svan
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function lastestblogs(){
  return(
<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Latest Research Results</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        How to use sticky note for problem solving
                    </a>
                    
                    <span class="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        How to use sticky note for problem solving
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Morning routine to boost your mood
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2020</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        All the features you want to know
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">On: 30 September 2020</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Minimal workspace for your inspirations
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">On: 13 October 2019</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        What do you want to know about Blockchane
                    </a>
                    
                    <span class="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}