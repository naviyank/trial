"use client";
import Link from "next/link";
import Icon from "@/app/components/website/Icon";
import { usePathname } from "next/navigation";
import Image from "next/image";
const AppSidebar: React.FC = () => {
  const pathname = usePathname();
  const sideBarItems = [
    {
      title: "Home",
      icon: "home",
      href: "/home",
      type: "default",
      subMenu: [],
    },
    {
      title: "Services",
      icon: "case",
      href: "",
      type: "sub-menu",
      subMenu: [{
        title: "Web App Testing",
        icon: "browser",
        href: "/home/services/web-app-testing",
        type: "default",
      },
      {
        title: "Mobile App Testing",
        icon: "mobile",
        href: "/home/services/mobile-app-testing",
        type: "default",
      },
      {
        title: "Source Code Review",
        icon: "code",
        href: "/home/services/source-code-review",
        type: "default",
      },
      {
        title: "Forensic Analysis",
        icon: "terminal",
        href: "/home/services/forensic-analysis",
        type: "default",
      },]
    },
    {
      title: "My Account",
      icon: "user",
      href: "/home/account",
      type: "default",
      subMenu: [],
    },
  ];
  const renderDefaultMenuItems = (item: any) => {
    return <Link
    className={`"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-md rounded-lg hover:bg-gray-100" ${pathname === item.href ? "bg-gray-100 text-neutral-700" : "text-white"}`}
    href={item.href}
  >
    <Icon
      iconName={item.icon}
      width={16}
      height={16}
      color="currentColor"
    />
    {item.title}
  </Link>
  }
  const renderSubMenuItems = (itemsArray: Array<any>) => {
    return itemsArray.map((item) => (
      <li key={item.title}>
        <Link
          className={`"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-md rounded-lg hover:bg-gray-100" ${pathname === item.href ? "bg-gray-100 text-neutral-700" : "text-white"}`}
          href={item.href}
        >
          <Icon
            iconName={item.icon}
            width={16}
            height={16}
            color="currentColor"
          />
          {item.title}
        </Link>
      </li>
    ))
  }
  return (
    <div>
      <div className="sticky top-0 inset-x-0 z-20 bg-black border-y px-4 sm:px-6 md:px-8 lg:hidden bg-gray-50">
        <div className="flex justify-between items-center py-2">
          {/* <!-- Breadcrumb --> */}
          <Link
            href="/"
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80 flex-none text-lg font-semibold"
            aria-label="Home"
          >
            <Image src="/dc.png" width={128} height={48} alt="dc-logo"/>
          </Link>
          {/* <!-- End Breadcrumb --> */}

          {/* <!-- Sidebar --> */}
          <button
            type="button"
            className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Sidebar"
          >
            <Icon
              iconName="menu"
              width={16}
              height={16}
              color="currentColor"
              className="flex-shrink-0 size-4"
            />
            <span className="sr-only">Sidebar</span>
          </button>
          {/* <!-- End Sidebar --> */}
        </div>
      </div>
      <div
        id="application-sidebar"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] hidden fixed inset-y-0 start-0 z-[60] border-e border-gray-700 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 p-4 bg-black min-h-screen"
      >
        <div className="py-2">
          {/* <!-- Logo --> */}
          <Link
            href="/"
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80 flex-none text-lg font-semibold"
            aria-label="Home"
          >
            <Image src="/dc.png" width={128} height={48} alt="dc-logo"/>
          </Link>
          {/* <!-- End Logo --> */}
        </div>
        <nav
          className="hs-accordion-group w-full h-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            {sideBarItems.map((item) => {
              return item.type === 'sub-menu' ? <li key={item.title} className="hs-accordion" id={`${item.icon}-accordion`}>
                <button
                  type="button"
                  className="hs-accordion-toggle w-full text-start text-md flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-cyan-600 hs-accordion-active:hover:bg-white text-white rounded-lg hover:bg-gray-100 hover:text-neutral-700"
                >
                  <Icon
                    iconName={item.icon}
                    width={16}
                    height={16}
                    color="currentColor"
                  />
                  {item.title}
                  <Icon
                    iconName="chevron-top"
                    width={16}
                    height={16}
                    color="currentColor"
                    className="hs-accordion-active:block ms-auto hidden size-4"
                  />
                  <Icon
                    iconName="chevron-bottom"
                    width={16}
                    height={16}
                    color="currentColor"
                    className="hs-accordion-active:hidden ms-auto block size-4"
                  />
                </button>
                <div id={`${item.icon}-accordion-child`} className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                <ul className="hs-accordion-group ps-3 pt-2 space-y-1.5" data-hs-accordion-always-open>
                  {renderSubMenuItems(item.subMenu)}
                </ul>
                </div>
                
              </li> : (
              <li key={item.title}>
                {renderDefaultMenuItems(item)}
              </li>
            )})}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AppSidebar;
