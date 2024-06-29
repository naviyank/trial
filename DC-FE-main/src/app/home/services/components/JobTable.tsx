"use client"
import { useEffect, useState } from "react";
import Icon from "@/app/components/website/Icon"
import { getJobs } from "@/lib/api";

interface JobTableProps {
    jobType: string;
}

const JobTable: React.FC<JobTableProps> = ({ jobType = '' }) => {
    const [jobList, setJobList] = useState([]);
    useEffect(() => {
        getJobs(jobType).then((jobs) => {
            setJobList(jobs);
        });
    }, [jobType])
    // const jobList = await getJobs('sqlmap');

const handleOnClick= async (type="", id="")=>{
    const res = await fetch(`http://localhost:3005/download/${jobType}/${id}`)
    .then(resp => resp.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      // the filename you want
      a.download = `${id}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      alert("your file has downloaded!")});
    console.log(res);
}

    return (
        <div className="mt-8 flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 bg-white rounded-md">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Job Id
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Last Run at
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Last Finished at
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {jobList.map((job: any) => (
                                    <tr key={job._id} className="hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                            {job._id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            {job.lastRunAt}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            {job.lastFinishedAt}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                            <button
                                                type="button"
                                                className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                                onClick={()=>handleOnClick(job.jobType, job._id)}
                                            >
                                                {/* <a
                                                href={`http://localhost:3000/download/${job.jobType}/${job._id}`}
                                                className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800"
                                                download
                                            >
                                                
                                            </a> */}
                                               <Icon iconName="download" width={24} height={24} color="currentColor" />
                                            </button>
                                            <button
                                                type="button"
                                                className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                            >
                                                <Icon iconName="more-vertical" width={24} height={24} color="currentColor" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {/* <tr className="hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                        0ab12c3d
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        45 seconds
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Jan 15, 2024
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Jim Green
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                        <button
                                            type="button"
                                            className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <Icon iconName="download" width={24} height={24} color="currentColor" />
                                        </button>
                                        <button
                                            type="button"
                                            className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <Icon iconName="more-vertical" width={24} height={24} color="currentColor" />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                        0ab12c3d
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        45 seconds
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Jan 15, 2024
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Jim Green
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                        <button
                                            type="button"
                                            className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <Icon iconName="download" width={24} height={24} color="currentColor" />
                                        </button>
                                        <button
                                            type="button"
                                            className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <Icon iconName="more-vertical" width={24} height={24} color="currentColor" />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                        0ab12c3d
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        45 seconds
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Jan 15, 2024
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Jim Green
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                        <button
                                            type="button"
                                            className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <Icon iconName="download" width={24} height={24} color="currentColor" />
                                        </button>
                                        <button
                                            type="button"
                                            className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <Icon iconName="more-vertical" width={24} height={24} color="currentColor" />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                        0ab12c3d
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        45 seconds
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Jan 15, 2024
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Jim Green
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                        <button
                                            type="button"
                                            className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <Icon iconName="download" width={24} height={24} color="currentColor" />
                                        </button>
                                        <button
                                            type="button"
                                            className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <Icon iconName="more-vertical" width={24} height={24} color="currentColor" />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                        0ab12c3d
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        45 seconds
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Jan 15, 2024
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Jim Green
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                        <button
                                            type="button"
                                            className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <Icon iconName="download" width={24} height={24} color="currentColor" />
                                        </button>
                                        <button
                                            type="button"
                                            className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <Icon iconName="more-vertical" width={24} height={24} color="currentColor" />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                        0ab12c3d
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        45 seconds
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Jan 15, 2024
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Jim Green
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                        <button
                                            type="button"
                                            className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <Icon iconName="download" width={24} height={24} color="currentColor" />
                                        </button>
                                        <button
                                            type="button"
                                            className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <Icon iconName="more-vertical" width={24} height={24} color="currentColor" />
                                        </button>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobTable;