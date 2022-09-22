import AboriginalFlag from "../assets/aboriginal.png";
import TorresStraitFlag from "../assets/torres.png";
import AboriginalHuman from "../assets/aboriginalCool.jpg";

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
      name: "name of author",
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
];

export default function blogSection() {
  return (
    <div className="  px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute ">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Research Results{" "}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            The most popular academic research
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
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
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
