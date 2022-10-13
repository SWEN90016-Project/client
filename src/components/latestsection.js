import blogSection from "./englishDynamic/blogSection";
import AboriginalFlag from "./assets/aboriginal.png";
import AboriginalHuman from "./assets/aboriginalCool.jpg";
import Retroflexes from "./assets/retroflexes.jpeg";
import AboriginalArt from "./assets/Aboriginal_school.jpeg";
import BlueAboriginalArt from "./assets/aboriginalArtOG.webp";
import TorresFlag from "./assets/torres.png";

const posts = [
  {
    title: "Retroflexes: The sounds of Australian Indigenous languages",
    href: "https://www.youtube.com/watch?v=UumXjntJjbI&ab_channel=ArtsUnimelb",
    category: {
      name: "Video",
      href: "https://www.youtube.com/watch?v=UumXjntJjbI&ab_channel=ArtsUnimelb",
    },
    description:
      "This video series explores the different sounds that can be found in some in Aboriginal Australian languages.  \n\n",
    date: "Mar 25, 2019",
    datetime: "2019-03-25",
    imageUrl: Retroflexes,
    readingTime: "4 min",
    author: {
      name: "Arts Unimelb",
      href: "https://www.youtube.com/watch?v=UumXjntJjbI&ab_channel=ArtsUnimelb",
      imageUrl: Retroflexes,
    },
  },

  {
    title: "An Introductory Guide to Understanding Aboriginal Art",
    href: "https://japingkaaboriginalart.com/articles/understanding-aboriginal-art/",
    category: {
      name: "Article",
      href: "https://japingkaaboriginalart.com/articles/understanding-aboriginal-art/",
    },
    description:
      "A unique view into the culture and values of Aboriginal people",
    date: "February 12, 2014",
    datetime: "2014-02-12",
    imageUrl: BlueAboriginalArt,
    readingTime: "2 min",
    author: {
      name: "Japingka Gallery",
      href: "https://japingkaaboriginalart.com/articles/understanding-aboriginal-art/",
      imageUrl: BlueAboriginalArt,
    },
  },
  {
    title:
      "The Dhudhuroa language of northeastern Victoria: a description based on historical sources",
    href: "https://press-files.anu.edu.au/downloads/press/p73361/pdf/book.pdf#page=185",
    category: {
      name: "Article",
      href: "https://press-files.anu.edu.au/downloads/press/p73361/pdf/book.pdf#page=185",
    },
    description:
      "Historical description of the evolution of Dhudhuroa language and culture. \n",
    date: "2002",
    datetime: "2021-12-12",
    imageUrl: AboriginalHuman,
    readingTime: "12 min",
    author: {
      name: "Barry J Blake and Julie Reid",
      name2: "Julie Reid",
      href: "https://press-files.anu.edu.au/downloads/press/p73361/pdf/book.pdf#page=185",
      imageUrl: AboriginalHuman,
    },
  },
  {
    title:
      "We are on the brink of losing Indigenous languages in Australia – could schools save them?",
    href: "https://theconversation.com/we-are-on-the-brink-of-losing-indigenous-languages-in-australia-could-schools-save-them-184736",
    category: { name: "Article", href: "#" },
    description:
      "Of the world’s 7,000 languages, it is estimated 50% to 90% will no longer be spoken in the next 50 to 100 years. The majority under threat are languages spoken by Indigenous peoples around the world: one is lost every two weeks.",
    date: "Jul 05, 2022",
    datetime: "2022-07-05",
    imageUrl: AboriginalFlag,
    readingTime: "6 min",
    author: {
      name: "Lisa Lim",
      href: "https://theconversation.com/we-are-on-the-brink-of-losing-indigenous-languages-in-australia-could-schools-save-them-184736",
      imageUrl: AboriginalFlag,
    },
  },
  {
    title:
      "Is early immersion effective for Aboriginal language acquisition? A case study from an Anishinaabemowin kindergarten",
    href: "https://www.tandfonline.com/doi/pdf/10.1080/13670050.2017.1281217",
    category: {
      name: "Case Study",
      href: "https://www.tandfonline.com/doi/pdf/10.1080/13670050.2017.1281217",
    },
    description:
      "People around the world are in dire circumstances with respect to language maintenance and cultural continuation. However, Indigenous communities are also taking back increasing control of the education of their children.",
    date: "Jan 06, 2017",
    datetime: "2017-01-06",
    imageUrl: TorresFlag,
    readingTime: "11 min",
    author: {
      name: "Lindsey A Morcom and Stephanie Roy",
      href: "https://www.tandfonline.com/doi/pdf/10.1080/13670050.2017.1281217",
      imageUrl: AboriginalHuman,
    },
  },
  {
    title:
      "Case study — School programs and Kaurna language reclamation in Adelaide Plains, South Australia",
    href: "https://medium.com/global-lessons-indigenous-languages-and-multilingu/school-programs-and-kaurna-language-reclamation-in-adelaide-plains-south-australia-56fa21d372c6",
    category: {
      name: "Case Study",
      href: "https://medium.com/global-lessons-indigenous-languages-and-multilingu/school-programs-and-kaurna-language-reclamation-in-adelaide-plains-south-australia-56fa21d372c6",
    },
    description:
      "Informed by Rob Amery and Kaurna Warra Pintyandi for Global Lessons: Indigenous languages and multilingualism in school programs",
    date: "May 25, 2018",
    datetime: "2018-05-25",
    imageUrl: AboriginalArt,
    readingTime: "6 min",
    author: {
      name: "First Languages Australia",
      href: "https://medium.com/global-lessons-indigenous-languages-and-multilingu/school-programs-and-kaurna-language-reclamation-in-adelaide-plains-south-australia-56fa21d372c6",
      imageUrl: AboriginalArt,
    },
  },
];

export default function lastestblogs() {
  return (
    <div className="">
      <div className=" mx-auto max-w-7xl pt-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to the Online Language Research Tool{" "}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            The most popular academic research
          </p>
        </div>
      </div>
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.category.href}
              className="bg-red-300 bg-opacity-20 backdrop-blur-lg drop-shadow-lg border border-red-400 rounded-lg hover:bg-white"
            >
              <img
                className="object-cover w-full h-56 rounded-tl-lg lg:w-64"
                src={post.imageUrl}
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <p className="text-sm font-medium text-indigo-600">
                  <a href={post.category.href} className="hover:underline">
                    {post.category.name}
                  </a>
                </p>
                <a href={post.href} className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base break-words text-gray-500">
                    {post.description}
                  </p>
                </a>

                <div className="ml">
                  <br></br>
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
