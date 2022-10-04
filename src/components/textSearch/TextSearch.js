import { useEffect, useState, Fragment, useRef, useContext } from "react";
import { Dialog, Transition, Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { UserTokenContext } from "../../App.js";
const API_URL = "http://localhost:9000/api/";
function Text() {
  const auth = useContext(UserTokenContext);
  const [selected, setSelected] = useState("select user");
  const [query, setQuery] = useState("");
  const [textQuery, setTextQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [getText, setGetText] = useState("");
  const [text, setText] = useState("");
  const [users, setUsers] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const cancelButtonRef = useRef(null);
  const onChangeText = (e) => {
    const text = e.target.value;
    setText(text);
    setTextQuery(text);
  };

  const filteredUsers =
    query === ""
      ? users
      : users.filter((person) =>
          person.username
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const filteredText =
    textQuery === ""
      ? getText
      : getText.filter((text) =>
          text.text
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(textQuery.toLowerCase().replace(/\s+/g, ""))
        );

  const addUser = async (textid, userid, username) => {
    try {
      await axios.put(API_URL + "shareWithUser/" + textid, {
        _id: userid,
        username: username,
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  const deleteText = async (id) => {
    try {
      await axios.delete(API_URL + "deleteText/" + id);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  const addNewPost = async () => {
    try {
      const newTextJson = {
        text: text,
        id: selected._id,
        username: selected.username,
      };
      await axios.post(API_URL + "addText", newTextJson);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const getUserTexts = async () => {
    try {
      const response = axios.get(
        API_URL + "findUserTexts/" + "632bcf83ef3bfe02742070cb"
      );
      setGetText(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllText = async () => {
    // const result = await getLevel();
    try {
      var response;

      response = await axios.get(API_URL + "getAllText");

      setGetText(response.data.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  const getAllUser = async () => {
    try {
      const response = await axios.get(API_URL + "userInfo");
      setUsers(response.data.data);

      // setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUser();
    {
      auth === "admin" ? getAllUser() : getUserTexts();
    }
    getAllText();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 bg-white">
        <input type="text" placeholder="Search" onChange={onChangeText} />
        {/* Post card */}
        <div className="grid grid-flow-row border-2 border-blue-400 rounded-md">
          {filteredText.length === 0 && textQuery !== "" ? (
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
              Nothing found.
            </div>
          ) : (
            filteredText.map((data) => (
              <div key={data._id}>
                <div className="grid grid-flow-col">
                  <h1>Posted By</h1>
                  <p>Username here</p>
                  <div>
                    <button
                      onClick={() => {
                        setOpen(true);
                        setSelectedText(data._id);
                      }}
                    >
                      AddUser
                    </button>
                    {auth === "admin" ? (
                      <button
                        onClick={() => {
                          deleteText(data._id);
                        }}
                      >
                        Delete Text
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <p>{data.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="bg-red-300">
        <div>
          <h1>Text input</h1>
          <input type="text" placeholder="Search" onChange={onChangeText} />
        </div>
        <div className="w-72">
          <h1>Share with User</h1>
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-visible rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(users) => users.username}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredUsers.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredUsers.map((user) => (
                      <Combobox.Option
                        key={user._id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-teal-600 text-white" : "text-gray-900"
                          }`
                        }
                        value={user}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {user.username}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
        <div>
          <button
            className="bg-blue-400"
            onClick={() => {
              addNewPost();
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-autp rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Add New User
                      </Dialog.Title>
                      <div className="flex items-center justify-center">
                        <div className=" w-72">
                          <Combobox value={selected} onChange={setSelected}>
                            <div className="relative mt-1">
                              <div className="relative w-full cursor-default overflow-visible rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                <Combobox.Input
                                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                  displayValue={(users) => users.username}
                                  onChange={(event) =>
                                    setQuery(event.target.value)
                                  }
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                  <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </Combobox.Button>
                              </div>
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                afterLeave={() => setQuery("")}
                              >
                                <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {filteredUsers.length === 0 &&
                                  query !== "" ? (
                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                      Nothing found.
                                    </div>
                                  ) : (
                                    filteredUsers.map((user) => (
                                      <Combobox.Option
                                        key={user._id}
                                        className={({ active }) =>
                                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                              ? "bg-teal-600 text-white"
                                              : "text-gray-900"
                                          }`
                                        }
                                        value={user}
                                      >
                                        {({ selected, active }) => (
                                          <>
                                            <span
                                              className={`block truncate ${
                                                selected
                                                  ? "font-medium"
                                                  : "font-normal"
                                              }`}
                                            >
                                              {user.username}
                                            </span>
                                            {selected ? (
                                              <span
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                  active
                                                    ? "text-white"
                                                    : "text-teal-600"
                                                }`}
                                              >
                                                <CheckIcon
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Combobox.Option>
                                    ))
                                  )}
                                </Combobox.Options>
                              </Transition>
                            </div>
                          </Combobox>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                      onClick={() => {
                        setOpen(false);
                        console.log(selected);
                        addUser(selectedText, selected._id, selected.username);
                      }}
                    >
                      Add User
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default Text;
