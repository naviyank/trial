"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppBar from "../../../components/AppBar";
import Icon from "@/app/components/website/Icon";
import JobTable from "../../components/JobTable";
import { scheduleJob } from "@/lib/api";

const SqlMap: React.FC = () => {
    const [url, setUrl] = useState<string>(""); // [1
    const router = useRouter();
    const handleSubmit = () => {
        scheduleJob("sqlmap", { input: url }).then((res) => {
            console.log(res);
        })
    }
  return (
    <div className="bg-backgroundImage min-h-screen">
      <AppBar>
        <div className="flex gap-4 ">

        <button onClick={() => router.back()}>
            <Icon iconName="arrow-left" width={24} height={24} color="currentColor"/>
        </button>
        <h1 className="text-xl font-bold">SQL Map</h1>
        </div>
      </AppBar>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col py-4 px-6 bg-white border shadow-sm rounded-lg drop-shadow-md">
          <h3 className="text-lg text-gray-600 font-bold">Generate Report</h3>
          <div className="mt-4 flex justify-between gap-8">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className=" py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Enter Target URL"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Submit
            </button>
          </div>
        </div>
        <JobTable jobType="sqlmap" />
      </div>
    </div>
  );
};

export default SqlMap;
