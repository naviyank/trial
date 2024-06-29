import Image from "next/image";
import AppBar from "../../components/AppBar";
const SourceCodeReview: React.FC = () => {
  return (
    <div className="bg-backgroundImage text-white min-h-screen">
      <AppBar>
        <h1 className="text-xl font-bold">Source Code Review</h1>
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
                APK Analysis
              </span>
              <h3 className="text-xl font-semibold text-gray-800">Androguard</h3>
              <p className="mt-3 text-gray-500">
                A tool that allows you to analyze an APK file and extract information.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View sample
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View API
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}

          
          {/* <!--  End Card --> */}
        </div>
        {/* <!--  End Grid --> */}
      </div>
      {/* <!--  End Card Blog --> */}
    </div>
  );
};

export default SourceCodeReview;
