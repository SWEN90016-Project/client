import blogSection from "./englishDynamic/blogSection";
import AboriginalFlag from "./assets/aboriginal.png";
import AboriginalHuman from "./assets/aboriginalCool.jpg";
import TorresStraitFlag from "./assets/torres.png";
import AboriginalArt from "./assets/aboriginalArt.jpeg";
import BlueAboriginalArt from "./assets/aboriginal-art-symbols-star.gif";

const posts = [
  {
    title: "Title of database pulled post",
    href: "#",
    category: { name: "Article", href: "#" },
    description: "This is a short abstract of post ",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: AboriginalFlag,
    readingTime: "6 min",
    author: {
      name: "Name of author",
      href: "#",
      imageUrl: AboriginalFlag,
    },
  },
  {
    title: "Title of database pulled post",
    href: "#",
    category: { name: "Video", href: "#" },
    description: "This is a short abstract of post",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: TorresStraitFlag,
    readingTime: "4 min",
    author: {
      name: "Name of author",
      href: "#",
      imageUrl: TorresStraitFlag,
    },
  },
  {
    title: "Title of database pulled post",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description: "This is a short abstract of post",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: AboriginalHuman,
    readingTime: "11 min",
    author: {
      name: "Name of author",
      href: "#",
      imageUrl: AboriginalHuman,
    },
  },
  {
    title: "Title of database pulled post",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description: "This is a short abstract of post",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: AboriginalArt,
    readingTime: "11 min",
    author: {
      name: "Name of author",
      href: "#",
      imageUrl: AboriginalArt,
    },
  },
];

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
              src={BlueAboriginalArt}
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
              src={AboriginalFlag}
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
              src={AboriginalFlag}
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
