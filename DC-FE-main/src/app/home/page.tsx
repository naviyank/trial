"use client";
import Image from "next/image";
import AppBar from "./components/AppBar";
import Icon from "../components/website/Icon";


const Home: React.FC = () => {
  return (
    <div className="bg-backgroundImage text-white min-h-screen">
      <AppBar>
        <div className="flex">
          <div className="hidden sm:block grow">
            <label htmlFor="icon" className="sr-only">
              Search
            </label>
            <div className="relative min-w-72 md:min-w-80">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4 text-gray-400">
                <Icon iconName="search" width={16} height={16} color="currentColor" />
              </div>
              <input
                type="text"
                id="icon"
                name="icon"
                className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </AppBar>
      <div className="p-8">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Reports generated
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle text-gray-500">
                  <Icon iconName="question-circle" width={16} height={16} color="currentColor"/>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                    role="tooltip"
                  >
                    The number of reports generated via platform
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                1,345
              </h3>
              <span className="flex items-center gap-x-1 text-green-600">
                <svg
                  className="inline-block size-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Threats Identified
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <Icon iconName="question-circle" width={16} height={16} color="currentColor"/>

                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                    role="tooltip"
                  >
                    The number of threats identified via platform
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                127,222
              </h3>
              <span className="flex items-center gap-x-1 text-green-600">
                <svg
                  className="inline-block size-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">5%</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Threats Mitigated
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <Icon iconName="question-circle" width={16} height={16} color="currentColor"/>

                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                    role="tooltip"
                  >
                    The number of threats mitigated via platform
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                1,345
              </h3>
              <span className="flex items-center gap-x-1 text-green-600">
                <svg
                  className="inline-block size-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      { /* <!-- Table Section --> */}
<div className="max-w-[85rem] py-10 lg:py-14 mx-auto">
  { /* <!-- Card --> */}
  <div className="flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          { /* <!-- Header --> */}
          <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Users
              </h2>
              <p className="text-sm text-gray-600">
                Add users, edit and more.
              </p>
            </div>

            <div>
              <div className="inline-flex gap-x-2">
                <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  View all
                </a>

                <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  Add user
                </a>
              </div>
            </div>
          </div>
          { /* <!-- End Header --> */}

          { /* <!-- Table --> */}
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="ps-6 py-3 text-start">
                  <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                    <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-main" />
                    <span className="sr-only">Checkbox</span>
                  </label>
                </th>

                <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                      Name
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                      Position
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                      Status
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                      Flagged Actions
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                      Created
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-end"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="size-px whitespace-nowrap">
                  <div className="ps-6 py-3">
                    <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                      <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-1" />
                      <span className="sr-only">Checkbox</span>
                    </label>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                    <div className="flex items-center gap-x-3">
                      <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                      <div className="grow">
                        <span className="block text-sm font-semibold text-gray-800">Christina Bersh</span>
                        <span className="block text-sm text-gray-500">christina@site.com</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="h-px w-72 whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="block text-sm font-semibold text-gray-800">Director</span>
                    <span className="block text-sm text-gray-500">Human resources</span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                      <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      Active
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <div className="flex items-center gap-x-3">
                      <span className="text-xs text-gray-500">1/5</span>
                      <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="flex flex-col justify-center overflow-hidden bg-gray-800 w-1/4" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="text-sm text-gray-500">28 Dec, 12:12</span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-1.5">
                    <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="#">
                      Edit
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="size-px whitespace-nowrap">
                  <div className="ps-6 py-3">
                    <label htmlFor="hs-at-with-checkboxes-2" className="flex">
                      <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-2" />
                      <span className="sr-only">Checkbox</span>
                    </label>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                    <div className="flex items-center gap-x-3">
                      <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                      <div className="grow">
                        <span className="block text-sm font-semibold text-gray-800">David Harrison</span>
                        <span className="block text-sm text-gray-500">david@site.com</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="h-px w-72 whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="block text-sm font-semibold text-gray-800">Seller</span>
                    <span className="block text-sm text-gray-500">Branding products</span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                      <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                      Warning
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <div className="flex items-center gap-x-3">
                      <span className="text-xs text-gray-500">3/5</span>
                      <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="flex flex-col justify-center overflow-hidden bg-gray-800 w-5/6" role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="text-sm text-gray-500">20 Dec, 09:27</span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-1.5">
                    <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="#">
                      Edit
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          { /* <!-- End Table --> */}

          { /* <!-- Footer --> */}
          <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">12</span> results
              </p>
            </div>

            <div>
              <div className="inline-flex gap-x-2">
                <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  Prev
                </button>

                <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  Next
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
          { /* <!-- End Footer --> */}
        </div>
      </div>
    </div>
  </div>
  { /* <!-- End Card --> */}
</div>
{ /* <!-- End Table Section --> */}
      </div>
      
    </div>
  );
};

export default Home;
