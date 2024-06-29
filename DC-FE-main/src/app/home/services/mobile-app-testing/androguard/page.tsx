"use client";
import { useRouter } from "next/navigation";
import AppBar from "../../../components/AppBar";
import Icon from "@/app/components/website/Icon";
import { useState } from "react";
const SqlMap: React.FC = () => {
  const [userFile, setUserFile] = useState<File | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!userFile) {
      alert('Please select a file first!');
      return;
    }
    const formData = new FormData();
    formData.append('file', userFile);
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully!');
      } else {
        console.error('File upload failed!');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }

  }
  return (
    <div className="bg-backgroundImage text-white min-h-screen">
      <AppBar>
        <div className="flex gap-4 ">
          <button onClick={() => router.back()}>
            <Icon
              iconName="arrow-left"
              width={24}
              height={24}
              color="currentColor"
            />
          </button>
          <h1 className="text-xl font-bold">Androguard</h1>
        </div>
      </AppBar>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col py-4 px-6 bg-white border shadow-sm rounded-lg drop-shadow-md">
          <h3 className="text-lg text-gray-600 font-bold">Generate Report</h3>
          <div className="mt-4 flex justify-between gap-8">
            <div className="max-w-sm">
              <form>
                <label className="block">
                  <span className="sr-only">Choose File</span>
                  <input
                    type="file"
                    onChange={(e:any) =>  setUserFile(e.target.files[0])}
                    className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-600 file:text-white hover:file:bg-cyan-700 file:disabled:opacity-50 file:disabled:pointer-events-none"
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
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
                        Job ran for
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Created On
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Created By
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
                          <Icon
                            iconName="download"
                            width={24}
                            height={24}
                            color="currentColor"
                          />
                        </button>
                        <button
                          type="button"
                          className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <Icon
                            iconName="more-vertical"
                            width={24}
                            height={24}
                            color="currentColor"
                          />
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
                          <Icon
                            iconName="download"
                            width={24}
                            height={24}
                            color="currentColor"
                          />
                        </button>
                        <button
                          type="button"
                          className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <Icon
                            iconName="more-vertical"
                            width={24}
                            height={24}
                            color="currentColor"
                          />
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
                          <Icon
                            iconName="download"
                            width={24}
                            height={24}
                            color="currentColor"
                          />
                        </button>
                        <button
                          type="button"
                          className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <Icon
                            iconName="more-vertical"
                            width={24}
                            height={24}
                            color="currentColor"
                          />
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
                          <Icon
                            iconName="download"
                            width={24}
                            height={24}
                            color="currentColor"
                          />
                        </button>
                        <button
                          type="button"
                          className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <Icon
                            iconName="more-vertical"
                            width={24}
                            height={24}
                            color="currentColor"
                          />
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
                          <Icon
                            iconName="download"
                            width={24}
                            height={24}
                            color="currentColor"
                          />
                        </button>
                        <button
                          type="button"
                          className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <Icon
                            iconName="more-vertical"
                            width={24}
                            height={24}
                            color="currentColor"
                          />
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
                          <Icon
                            iconName="download"
                            width={24}
                            height={24}
                            color="currentColor"
                          />
                        </button>
                        <button
                          type="button"
                          className="mx-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <Icon
                            iconName="more-vertical"
                            width={24}
                            height={24}
                            color="currentColor"
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SqlMap;
