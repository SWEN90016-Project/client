import blogSection from "./englishDynamic/blogSection";
import AborginalFlag from "./assets/aboriginal.png";
import AboriginalHuman from "./assets/aboriginalCool.jpg";
import TorresStraitFlag from "./assets/torres.png";
import AboriginalArt from "./assets/aboriginalArt.jpeg";

export default function lastestblogs() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          Latest Research Results
        </h1>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <div class="lg:flex">
            <img
              class="object-cover w-full h-56 rounded-lg lg:w-64"
              src={TorresStraitFlag}
              alt=""
            />

            <div class="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Title of database pulled post
              </a>
              <author class="text-sm text-gray-500 dark:text-gray-300">
                Name of author{" "}
              </author>
              <span class="text-sm text-gray-500 dark:text-gray-300">
                On: 20 October 2019
              </span>
            </div>
          </div>

          <div class="lg:flex">
            <img
              class="object-cover w-full h-56 rounded-lg lg:w-64"
              src={AborginalFlag}
              alt=""
            />

            <div class="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Title of database pulled post
              </a>
              <author class="text-sm text-gray-500 dark:text-gray-300">
                Name of author{" "}
              </author>
              <span class="text-sm text-gray-500 dark:text-gray-300">
                On: 20 October 2019
              </span>
            </div>
          </div>

          <div class="lg:flex">
            <img
              class="object-cover w-full h-56 rounded-lg lg:w-64"
              src={AboriginalHuman}
              alt=""
            />

            <div class="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Title of database pulled post
              </a>
              <author class="text-sm text-gray-500 dark:text-gray-300">
                Name of author{" "}
              </author>
              <span class="text-sm text-gray-500 dark:text-gray-300">
                On: 25 November 2020
              </span>
            </div>
          </div>

          <div class="lg:flex">
            <img
              class="object-cover w-full h-56 rounded-lg lg:w-64"
              src={TorresStraitFlag}
              alt=""
            />

            <div class="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Title of database pulled post
              </a>
              <author class="text-sm text-gray-500 dark:text-gray-300">
                Name of author{" "}
              </author>
              <span class="text-sm text-gray-500 dark:text-gray-300">
                On: 30 September 2020
              </span>
            </div>
          </div>

          <div class="lg:flex">
            <img
              class="object-cover w-full h-56 rounded-lg lg:w-64"
              src={AborginalFlag}
              alt=""
            />

            <div class="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Title of database pulled post
              </a>
              <author class="text-sm text-gray-500 dark:text-gray-300">
                Name of author{" "}
              </author>
              <span class="text-sm text-gray-500 dark:text-gray-300">
                On: 13 October 2019
              </span>
            </div>
          </div>

          <div class="lg:flex">
            <img
              class="object-cover w-full h-56 rounded-lg lg:w-64"
              src={AboriginalArt}
              alt=""
            />

            <div class="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Title of database pulled post
              </a>
              <author class="text-sm text-gray-500 dark:text-gray-300">
                Name of author{" "}
              </author>
              <span class="text-sm text-gray-500 dark:text-gray-300">
                On: 20 October 2019
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
