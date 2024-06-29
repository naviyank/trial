"use client"

import { useSelectedLayoutSegment } from "next/navigation";

const toProperCase = (str: string) => {
  if(!str) return 'Welcome'
  return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
    return match.toUpperCase();
  });
};

const routeMap: Record<string,string> = {
  'home': 'Dashboard',
  'usage': 'Usage',
  'docs': 'Docs',
  'account': 'Account',
  'new': 'New Dashboard'
}

const AppBar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full flex items-center ms-auto justify-between sm:gap-x-3 sm:order-3 border-b-2 border-gray-700 py-4 px-8 drop-shadow-md sticky top-0 z-[20] bg-black text-white">
        {children}
    </div>
  );
};

export default AppBar;
