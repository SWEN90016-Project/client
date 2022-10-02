import axios from "axios";
import { useEffect, useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { CheckIcon } from "@heroicons/react/outline";
const API_URL = "http://localhost:9000/api/";

function Groups() {
  const [allGroups, setAllGroups] = useState("");
  const [userGroups, setUserGroups] = useState("");
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);
  const getAllGroups = async () => {
    try {
      const response = await axios.get(API_URL + "getGroup");
      setAllGroups(response.data);
      console.log(allGroups);
    } catch (error) {
      console.error(error);
    }
  };
  const getUserGroups = async (id) => {
    try {
      const response = await axios.get(API_URL + "getUserGroup/" + id);
      setUserGroups(response);
    } catch (error) {
      console.error(error);
    }
  };
  const addGroup = async (groupName) => {
    try {
      axios.post(API_URL + "addGroup", { groupName: groupName });
    } catch (error) {
      console.error(error);
    }
  };

  const addUser = async (id) => {
    try {
      axios.put(API_URL + "addUser/" + id, {
        _id: "632bcf83ef3bfe02742070cb",
        username: "newtest2",
        email: "kk@jj.com",
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllGroups();
    console.log(allGroups);
  }, []);
  return (
    <div className="">
      <p>test</p>
      <button
        onClick={() => {
          addGroup("testingput");
        }}
      >
        butoon for testing
      </button>
      <button
        onClick={() => {
          addUser();
        }}
      >
        second butoon for testing
      </button>
      <div className="grid grid-flow-row">
        <div className="grid grid-cols-6">
          <h1 className="">Groups</h1>
          <div className="col-end-7 col-span-2 flex flex-row">
            <input
              id="text"
              name="text"
              type="text"
              placeholder="Text"
              className=" block appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            <button className="w-12">new group</button>
          </div>
        </div>
        <div className="grid grid-flow-row bg-white rounded-lg">
          <div className="grid grid-flow-col">
            <p>GroupName</p>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="place-self-end"
            >
              add User
            </button>
          </div>

          <div className="grid grid-cols-5 grid-flow-row">
            <p>Username</p>
            <p>Username</p>
            <p>Username</p>
            <p>Username</p>
            <p>Username</p>
            <p>Username</p>
            <p>Username</p>
          </div>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      {/* <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      /> */}
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Payment successful
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Eius aliquam laudantium explicabo pariatur iste
                          dolorem animi vitae error totam. At sapiente aliquam
                          accusamus facere veritatis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Deactivate
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
