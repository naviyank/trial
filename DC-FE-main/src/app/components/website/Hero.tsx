"use client"
import Image from "next/image";
import Icon from "./Icon";
import LoginModal from "./LoginModal";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="grow max-w-[85rem] mx-auto p-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20">
        <div>
          <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight">
            The New Standard in{" "}
            <span className="text-cyan-400">Cyber Trade Craft</span>
          </h1>
          <p className="mt-3 text-lg text-white">
            AI-Enabled Cyber Intelligence company focusing on Security
            Orchestration to combat Cyber Bullying, Ransomwares, and Breaches
            through cutting edge Products, Investigations, Training and
            Forensics.
          </p>

          {/* <!-- Buttons -> */}
          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-overlay="#hs-basic-modal"
            >
              Login
              <Icon
                iconName="chevron-right"
                width={16}
                height={16}
                color="currentColor"
              />
            </button>
          </div>
          {/* <!-- End Buttons -> */}
        </div>
        {/* <!-- End Col -> */}

        <div className="relative ms-4">
          <Image
            className="w-full rounded-md brightness-125 contrast-50"
            width={400}
            height={400}
            src={"/dc_home.webp"}
            alt="Image Description"
          />
        </div>
        {/* <!-- End Col -> */}
      </div>
      <LoginModal />
    </div>
  );
};

export default Hero;
