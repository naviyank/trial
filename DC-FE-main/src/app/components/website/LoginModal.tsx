"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Icon from "./Icon";
import { loginWithEmailAndPassword, signUpWithEmailAndPassword } from "@/lib/firebase/firebase";


const LoginModal: React.FC = () => {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  return (
    <div
      id="hs-basic-modal"
      className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none [--overlay-backdrop:static]"
      data-hs-overlay-keyboard="false"
    >
      <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
          <div className="p-4 overflow-y-auto">
            <div className="w-full flex justify-end">
              <button
                type="button"
                className="text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-overlay="#hs-basic-modal"
              >
                <span className="sr-only">Close</span>
                <Icon
                  iconName="circle-x"
                  width={24}
                  height={24}
                  color="currentColor"
                />
              </button>
            </div>

            <div className="p-4">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800">
                  Sign in to your account
                </h1>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <Icon
                    iconName="google"
                    width={24}
                    height={24}
                    color="currentColor"
                  />
                  Sign in with Google
                </button>

                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
                  Or
                </div>

                <form>
                  <div className="grid gap-y-4">
                    {isSignup && <div>
                      <label htmlFor="email" className="block text-sm mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm hover:border-cyan-400 focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none"
                          required
                          aria-describedby="name-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg
                            className="size-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="name-error"
                      >
                        Name cannot be less than 2 characters
                      </p>
                    </div>}
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm hover:border-cyan-400 focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none"
                          required
                          aria-describedby="email-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg
                            className="size-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="password"
                          className="block text-sm mb-2"
                        >
                          Password
                        </label>
                        {!isSignup && <Link
                          className="text-sm text-cyan-600 decoration-2 hover:underline font-medium"
                          href="../examples/html/recover-account.html"
                        >
                          Forgot password?
                        </Link>}
                      </div>
                      <div className="relative">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm hover:border-cyan-400 focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none"
                          required
                          aria-describedby="password-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg
                            className="size-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="password-error"
                      >
                        8+ characters required
                      </p>
                    </div>
                    {isSignup && <div>
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="confirm-password"
                          className="block text-sm mb-2"
                        >
                          Confirm Password
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="password"
                          id="confirm-password"
                          name="confirm-password"
                          value={confirmPass}
                          onChange={(e) => setConfirmPass(e.target.value)}
                          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm hover:border-cyan-400 focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none"
                          required
                          aria-describedby="confirm-password-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg
                            className="size-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="confirm-password-error"
                      >
                        8+ characters required
                      </p>
                    </div>}
                    {isSignup ? <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-cyan-600 text-white hover:bg-cyan-700 disabled:opacity-50 disabled:pointer-events-none"
                      onClick={() => {
                        signUpWithEmailAndPassword(name, email, password).then(() => {
                          router.push('/home');
                        });
                      }}
                    >
                      Sign up
                    </button> :  <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-cyan-600 text-white hover:bg-cyan-700 disabled:opacity-50 disabled:pointer-events-none"
                      onClick={() => {
                        loginWithEmailAndPassword(email, password);
                        router.push('/home');
                      }}
                    >
                      Sign in
                    </button>}
                    
                    <button
                      type="button"
                      className="text-center text-cyan-600 decoration-blue-600 hover:opacity-80"
                      onClick={() => setIsSignup(!isSignup)}
                    >
                      {!isSignup ? "Dont have an account? Sign up" : "Already have an account? Sign in"}
                    </button>
                    <Link
                      className="text-xs text-center text-cyan-600 underline underline-offset-2 decoration-blue-600 hover:opacity-80"
                      href="/home"
                    >
                      Skip sign in
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
