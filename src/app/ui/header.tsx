"use client";
import { useState } from "react";

export default function Header() {
  const [subproduct, setSubProduct] = useState(false);
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  return (
    <header className="bg-white h-15vh border-b flex items-center justify-between border-navborderColor">
      <nav
        className="mx-auto w-full flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <p className="font-bold">Task</p>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMenuHidden(isMenuHidden ? false : true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative [&:hover>div]:block">
            <button
              type="button"
              className="flex agmenu items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              aria-expanded="false"
            >
              Product
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className=" hidden mt-3 absolute -left-8 top-full z-10 w-screen max-w-md overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-gray-900">
                      Analytics
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">
                      Get a better understanding of your traffic
                    </p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-gray-900">
                      Engagement
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">
                      Speak directly to your customers
                    </p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-gray-900">
                      Security
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">
                      Your customers’ data will be safe and secure
                    </p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-gray-900">
                      Integrations
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">
                      Connect with third-party tools
                    </p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-gray-900">
                      Automations
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">
                      Build strategic funnels that will convert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log out
          </a>
        </div>
      </nav>

      {isMenuHidden && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <p className="font-bold">Task</p>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setIsMenuHidden(isMenuHidden ? false : true)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                      onClick={() => setSubProduct(subproduct ? false : true)}
                    >
                      Product
                      <svg
                        className="h-5 w-5 flex-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {subproduct && (
                      <div className="mt-2 space-y-2" id="disclosure-1">
                        <a
                          href="#"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Analytics
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Engagement
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Security
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Integrations
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Automations
                        </a>
                      </div>
                    )}
                  </div>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
