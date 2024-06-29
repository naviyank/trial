import Image from 'next/image'
import Icon from './Icon';
const menuItems = [
    {
      name: 'Products',
      href: '#',
    },
    {
      name: 'Blogs',
      href: '#',
    },
    {
      name: 'Locations',
      href: '#',
    }
];
const Header: React.FC = () => {
    return (
        <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
        <nav
          className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="#"
              aria-label="Brand"
            >
              <Image src={'/dc.png'} width={128} height={48} alt='dc logo' />
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 hover:border-gray-600 font-medium text-gray-300 hover:text-white shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-600 transition-all text-sm"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <Icon iconName='circle-menu' width={16} height={16} color='currentColor' className="hs-collapse-open:hidden"/>
                <Icon iconName='circle-x' width={16} height={16} color='currentColor' className="hs-collapse-open:block hidden"/>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              {menuItems.map((item, index) => (
                <a
                key={index}
                className="font-medium text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
                href={item.href}
                aria-current="page"
              >
                {item.name}
              </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
  