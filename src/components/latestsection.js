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
  {
    title: "Title of database pulled post",
    href: "#",
    category: { name: "Article", href: "#" },
    description: "This is a short abstract of post",
    date: "November 12, 2020",
    datetime: "2020-11-12",
    imageUrl: BlueAboriginalArt,
    readingTime: "3 min",
    author: {
      name: "Name of author",
      href: "#",
      imageUrl: BlueAboriginalArt,
    },
  },
  {
    title: "Title of database pulled post",
    href: "#",
    category: { name: "Article", href: "#" },
    description: "This is a short abstract of post",
    date: "December 12, 2021",
    datetime: "2021-12-12",
    imageUrl: AboriginalHuman,
    readingTime: "3 min",
    author: {
      name: "Name of author",
      href: "#",
      imageUrl: AboriginalHuman,
    },
  },
];

export default function lastestblogs() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to the Online Language Research Tool{" "}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            The most popular academic research
          </p>
        </div>
      </div>
      <div class="container px-6 py-10 mx-auto">
        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {posts.map((post) => (
            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src={post.imageUrl}
                alt=""
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <p className="text-sm font-medium text-indigo-600">
                  <a href={post.category.href} className="hover:underline">
                    {post.category.name}
                  </a>
                </p>
                <a href={post.href} className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </a>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href={post.author.href} className="hover:underline">
                      {post.author.name}
                    </a>
                  </p>

                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
