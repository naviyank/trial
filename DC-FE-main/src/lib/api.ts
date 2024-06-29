import { API_BASE_URL, API_JOBS_URL } from "./urls";

// this file contains all the api fetch calls made in the project (not related to nextjs api calls)

const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`${API_BASE_URL}/api/upload`, {
        method: 'POST',
        body: formData
    });
    return response.json();
}

const scheduleJob = async (jobType: string, jobData: any) => {
    const body = {
        name: jobType,
        schedule: 'in 1 minute',
        data: jobData
    }
    const response = await fetch(`${API_JOBS_URL}/schedule`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return response.json();

}

const getJobs = async (jobType: string) => {
    const response = await fetch(`${API_JOBS_URL}/list/${jobType}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
    return response.json();
}

export { uploadFile, getJobs, scheduleJob }