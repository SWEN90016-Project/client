import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const solutions = [
  {
    name: "English Language",
    description: "Static page",
    to: "/Homepage/EnglishStatic",
  },
  {
    name: "Indigenous Dhudhuroa Langauge",
    description: "[Restircted]",
    to: "/Homepage/Indigenous",
  },
  {
    name: "Dynamic English Language",
    description: "Dynamic page",
    to: "/Homepage/EnglishDynamic",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavDropdown() {
  return (
    <Popover className="relative z-100">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open
                ? "text-gray-900"
                : "text-base font-[550] hover:border-black border border-transparent rounded-lg px-2",
              "group inline-flex items-center text-base font-[550] hover:border-black border border-transparent rounded-lg px-2 hover:text-gray-900 "
            )}
          >
            <span>Language Pages</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-base font-[550]" : "text-black",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-0"
            enterTo="opacity-100 translate-y-1"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-1"
            leaveTo="opacity-0 translate-y-0"
          >
            <Popover.Panel className="absolute left-40 z-100 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative z-100 grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <p className="text-base font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
