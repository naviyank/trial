import Image from "next/image";
import AppBar from "../../components/AppBar";

const WebAppTesting: React.FC = () => {
  return (
    <div className="bg-backgroundImage text-white min-h-screen">
      <AppBar>
        <h1 className="text-xl font-bold">Web App Testing</h1>
      </AppBar>
      {/* <!--  Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!--  Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!--  Card --> */}
          <div className="group flex flex-col h-full bg-white border border-cyan-400 shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-cyan-900 rounded-t-xl">
              <Image src={'/dc.png'} width={400} height={300} alt="logo"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                SQL Injection
              </span>
              <h3 className="text-xl font-semibold text-gray-800">SQLMap</h3>
              <p className="mt-3 text-gray-500">
                A tool that automates the process of detecting and exploiting SQL injection flaws.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View Docs
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="/home/services/web-app-testing/sqlmap"
              >
                Generate Report
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}

          {/* <!--  Card --> */}
          <div className="group flex flex-col h-full bg-white border border-cyan-400 shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-cyan-900 rounded-t-xl">
              <Image src={'/dc.png'} width={400} height={300} alt="logo"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                Web Traffic Analysis
              </span>
              <h3 className="text-xl font-semibold text-gray-800">Whatweb</h3>
              <p className="mt-3 text-gray-500">
                A tool that automates the process of detecting and analysing website traffic.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View Docs
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Generate Report
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}

          {/* <!--  Card for Nikto --> */}
          <div className="group flex flex-col h-full bg-white border border-cyan-400 shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-cyan-900 rounded-t-xl">
              <Image src={'/dc.png'} width={400} height={300} alt="logo"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                Web Server Scanning
              </span>
              <h3 className="text-xl font-semibold text-gray-800">Nikto</h3>
              <p className="mt-3 text-gray-500">
                A tool that automates the process of scanning web servers for vulnerabilities.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View Docs
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="/home/services/web-app-testing/nikto"
              >
                Generate Report
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}
          
          {/* <!--  Card for Sherlock --> */}
          <div className="group flex flex-col h-full bg-white border border-cyan-400 shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-cyan-900 rounded-t-xl">
              <Image src={'/dc.png'} width={400} height={300} alt="logo"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                Reconnaissance
              </span>
              <h3 className="text-xl font-semibold text-gray-800">Sherlock</h3>
              <p className="mt-3 text-gray-500">
                A tool that automates the process of finding usernames across many social networks.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View Docs
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="/home/services/web-app-testing/sherlock"
              >
                Generate Report
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}

           {/* <!--  Card for Dirsearch --> */}
           <div className="group flex flex-col h-full bg-white border border-cyan-400 shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-cyan-900 rounded-t-xl">
              <Image src={'/dc.png'} width={400} height={300} alt="logo"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                Web Server Scanning
              </span>
              <h3 className="text-xl font-semibold text-gray-800">Dirsearch</h3>
              <p className="mt-3 text-gray-500">
                A tool that automates the process of brute-forcing web paths.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View Docs
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="/home/services/web-app-testing/dirsearch"
              >
                Generate Report
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}
          
        </div>
        {/* <!--  End Grid --> */}
      </div>
      {/* <!--  End Card Blog --> */}
    </div>
  );
};

export default WebAppTesting;
