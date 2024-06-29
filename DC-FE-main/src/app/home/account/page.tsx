"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOut } from "@/lib/firebase/firebase";
import AppBar from "../components/AppBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AccountPage: React.FC = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <AppBar>
        <h1 className="text-lg font-semibold text-gray-800">
          Account Settings
        </h1>
      </AppBar>
      <div className="p-8">
        <div className="w-full flex justify-between items-center bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5">
          <div className="flex items-center gap-4">
            <Image
              width={128}
              height={128}
              className="inline-block size-[62px] rounded-full"
              src={user?.photoURL || "https://placehold.co/200x200"}
              alt="Image Description"
            />
            <p className="text-md font-semibold text-gray-800">
              {user?.displayName}
            </p>
          </div>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            onClick={() => {
              signOut();
              router.push("/");
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
