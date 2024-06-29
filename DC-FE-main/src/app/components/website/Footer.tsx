const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* <!-- Grid --> */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none text-xl text-white font-semibold"
            href="#"
            aria-label="Deepcytes"
          >
            Deepcytes
          </a>
          <p className="mt-3 text-xs sm:text-sm text-neutral-50">
            © 2024 Deepcytes.
          </p>
        </div>
        {/* <!-- End Col --> */}

        <div>
          <h4 className="text-xs font-semibold text-cyan-500 uppercase">
            Product
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Pricing
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Changelog
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Docs
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Download
              </a>
            </p>
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div>
          <h4 className="text-xs font-semibold text-cyan-500 uppercase">
            Company
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                About us
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Blog
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Careers
              </a>{" "}
              <span className="inline text-blue-600">— We&apos;re hiring</span>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Customers
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Newsroom
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Sitemap
              </a>
            </p>
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div>
          <h4 className="text-xs font-semibold text-cyan-500 uppercase">
            Resources
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Community
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Help & Support
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                eBook
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                What&apos;s New
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Status
              </a>
            </p>
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div>
          <h4 className="text-xs font-semibold text-cyan-500 uppercase">
            Developers
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Api
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Status
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                GitHub
              </a>{" "}
              <span className="inline text-blue-600">— New</span>
            </p>
          </div>

          <h4 className="mt-7 text-xs font-semibold text-cyan-500 uppercase">
            Industries
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Financial Services
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-50 hover:text-neutral-300"
                href="#"
              >
                Education
              </a>
            </p>
          </div>
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </footer>
  );
};

export default Footer;
