import axios from "axios";
import { useEffect, useState, Fragment, useRef, useContext } from "react";
import { Dialog, Transition, Combobox } from "@headlessui/react";
import { UserTokenContext } from "../../App";
import {
  CheckIcon,
  ChevronUpDownIcon,
  PlusIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
const API_URL = "http://localhost:9000/api/";

function Groups() {
  const { authLevel, username } = useContext(UserTokenContext);
  const [allGroups, setAllGroups] = useState("");
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [groupName, setgroupName] = useState("");
  const [selected, setSelected] = useState("select user");
  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const onChangeGroupName = (e) => {
    const text = e.target.value;
    setgroupName(text);
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

  const cancelButtonRef = useRef(null);
  const deleteGroup = async (id) => {
    try {
      await axios.delete(API_URL + "deleteGroup/" + id);
      window.location.reload();
      // setSelected(users[0].username);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteUser = async (groupID, userID) => {
    try {
      await axios.delete(
        API_URL + "removeUserFromGroup/" + groupID + "/" + userID
      );
      window.location.reload();
      // setSelected(users[0].username);
    } catch (error) {
      console.error(error);
    }
  };
  const getAllGroups = async () => {
    try {
      const response = await axios.get(API_URL + "getGroup");
      setAllGroups(response.data.data);
      // console.log(allGroups);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const getUserGroups = async () => {
    try {
      const response = await axios.get(
        API_URL + "getUserGroup/" + JSON.parse(localStorage.getItem("user")).id
      );
      setAllGroups(response.data.groups);
      console.log(allGroups);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const addGroup = async (groupName) => {
    try {
      axios.post(API_URL + "addGroup", { groupName: groupName });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const addUser = async (groupid, userid, username, email) => {
    try {
      axios.put(API_URL + "addUser/" + groupid, {
        _id: userid,
        username: username,
        email: email,
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  const getAllUser = async () => {
    try {
      const response = await axios.get(API_URL + "userInfo");
      setUsers(response.data.data);

      // setSelected(users[0].username);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getAllGroups();
    getAllUser();
    {
      authLevel === "admin" ? getAllGroups() : getUserGroups();
    }

    // console.log(allGroups);
    // console.log(users[0].username);
  }, []);
  if (loading) {
    return (
      <div className="">
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div className="py-2 h-screen mx-auto max-w-7xl">
      <div className="grid grid-flow-row">
        <div className="grid grid-flow-col items-center px-2">
          <h1 className="">Groups Page</h1>
          {authLevel === "admin" ? (
            <div className="place-self-end flex flex-row gap-2">
              <input
                id="text"
                name="text"
                type="text"
                placeholder="Group Name"
                onChange={onChangeGroupName}
                className=" block appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <button
                onClick={() => {
                  addGroup(groupName);
                }}
                className="bg-blue-400 rounded-lg p-2 group hover:bg-blue-700 hover:text-white"
              >
                <PlusIcon
                  className="h-5 w-5 text-black group-hover:text-white"
                  aria-hidden="true"
                />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="grid grid-flow-row gap-2 p-2">
          {/* filteredUsers.map((user) => ( */}
          {allGroups.length === 0 ? (
            <div>
              <p>No Groups Found!</p>
            </div>
          ) : (
            allGroups.map((group) => (
              <div key={group._id} className="rounded-lg hover:shadow-2xl">
                <div className="grid grid-flow-col items-center bg-red-400 p-2 rounded-t-md">
                  <div className="flex  flex-row gap-2">
                    <p className="text-white text-lg font-medium">
                      {group.groupName}
                    </p>
                  </div>
                  <div className="flex place-self-end flex-row gap-2">
                    {authLevel === "admin" ? (
                      <button
                        onClick={() => {
                          setOpen(true);
                          setSelectedGroup(group._id);
                        }}
                        className="place-self-end bg-blue-400 rounded-lg p-2 group mr-2 hover:bg-blue-700 hover:text-white"
                      >
                        <UserPlusIcon
                          className="h-5 w-5 text-black group-hover:text-white"
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <></>
                    )}
                    {authLevel === "admin" ? (
                      <button
                        className="bg-rose-500 rounded-lg p-2 group mr-2 hover:bg-red-500 hover:text-white"
                        onClick={() => {
                          deleteGroup(group._id);
                        }}
                      >
                        <TrashIcon
                          className="h-5 w-5 text-black group-hover:text-white"
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-5 grid-flow-row py-4 bg-white rounded-b-md ">
                  <div className="col-span-5 p-2 font-bold">Group Members:</div>
                  {group.userList.map((user, index) => (
                    <div className="flex flex-row gap-1 p-2">
                      <p
                        key={group._id + user.username + index}
                        className="px-2 text-medium"
                      >
                        {user.username}
                      </p>
                      {authLevel === "admin" ? (
                        <button
                          onClick={() => {
                            deleteUser(group._id, user._id);
                          }}
                          className="border border-red-500 rounded-md hover:bg-red-500"
                        >
                          <TrashIcon
                            className="h-5 w-5 text-red-400 hover:text-white"
                            aria-hidden="true"
                          />
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
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
                        addUser(
                          selectedGroup,
                          selected._id,
                          selected.username,
                          selected.email
                        );
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

export default Groups;
