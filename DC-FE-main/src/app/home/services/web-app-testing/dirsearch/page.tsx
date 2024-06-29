"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppBar from "../../../components/AppBar";
import Icon from "@/app/components/website/Icon";
import JobTable from "../../components/JobTable";
import { scheduleJob } from "@/lib/api";
import axios from 'axios';

const Dirsearch: React.FC = () => {
    const [url, setUrl] = useState<string>(""); 
    const [file, setFile] = useState<File | null>(null);
    const [jobType, setJobType] = useState<string>("dirsearch");
    const [message, setMessage] = useState<string>("");
    const router = useRouter();

    const handleSubmit = () => {
        scheduleJob("dirsearch", { input: url }).then((res) => {
            console.log(res);
        })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleFileUpload = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!file) {
            setMessage('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('jobType', jobType);

        try {
            const response = await axios.post(`http://localhost:3005/uploads`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('File upload failed. Please try again.');
        }
    };

    return (
        <div className="bg-backgroundImage min-h-screen">
            <AppBar>
                <div className="flex gap-4">
                    <button onClick={() => router.back()}>
                        <Icon iconName="arrow-left" width={24} height={24} color="currentColor"/>
                    </button>
                    <h1 className="text-xl font-bold">Dirsearch</h1>
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
                            className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
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
                    <form onSubmit={handleFileUpload} className="mt-4">
                        <div className="mt-4 flex flex-col gap-4">
                            <label className="block">
                                <span className="text-gray-700">Upload File</span>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="mt-1 block w-full text-sm text-gray-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-blue-100"
                                />
                            </label>
                            <button
                                type="submit"
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                            >
                                Upload File
                            </button>
                        </div>
                    </form>
                    {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
                </div>
                <JobTable jobType="dirsearch" />
            </div>
        </div>
    );
};

export default Dirsearch;