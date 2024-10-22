import React, { useState } from "react";
import LOGO from "../../assets/LogoWhite.png";
import { Link } from "react-scroll";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  // Popover,
  // PopoverButton,
  //PopoverGroup,
  // PopoverPanel,
} from "@headlessui/react";
import {
  // ArrowPathIcon,
  Bars3Icon,
  // ChartPieIcon,
  // CursorArrowRaysIcon,
  // FingerPrintIcon,
  // SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      <nav class="dark:bg-primary-dark bg-gradient-to-r from-zinc-950 to-transparent border-b-[#032536] border-b-2">
        <div class="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-6 px-2 lg:px-32 lg:p-4  ">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src={LOGO} class="h-28 lg:h-44 -my-10" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue-light"></span> */}
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-8 h-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed  inset-y-0 right-0 z-10 w-1/2 overflow-y-auto bg-gradient-to-r from-[#05161f] to-[#012233] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5"></a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-blue-light"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-10 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className=" py-6">
                    <Link
                      className="-mx-3 block text-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-light hover:bg-[#032536] cursor-pointer"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      to="hero"
                    >
                      Atendimento
                    </Link>
                    <hr className="border-[#ffffff13] mb-12" />
                    <Link
                      className="-mx-3 block text-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-light hover:bg-[#032536] cursor-pointer"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      to="servicos"
                    >
                      Serviços
                    </Link>
                    <hr className="border-[#ffffff13] mb-12" />
                    <Link
                      className="-mx-3 block text-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-light hover:bg-[#032536] cursor-pointer"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      to="contato"
                    >
                      Contato
                    </Link>
                    <hr className="border-[#ffffff13] mb-12" />
                    <Link
                      className="-mx-3 block text-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-light hover:bg-[#032536] cursor-pointer"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      to="posts"
                    >
                      Posts
                    </Link>
                    <hr className="border-[#ffffff13] mb-12" />
                    <Link
                      className="-mx-3 block text-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-light hover:bg-[#032536] cursor-pointer"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      to="sobre"
                    >
                      Sobre
                    </Link>
                    <hr className="border-[#ffffff13] mb-12" />{" "}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
          <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col gap-12 font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#sobre"
                  className="block text-xl py-2 px-3 md:p-0 text-blue-light bg-blue-light rounded md:bg-transparent md:text-blue-light md:dark:hover:text-primary-blue dark:bg-blue-light md:dark:bg-transparent"
                  aria-current="page"
                >
                  Sobre
                </a>
              </li>

              <li>
                <a
                  href="#servicos"
                  className="block text-xl py-2 px-3 md:p-0 text-blue-light rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-light dark:text-blue-light md:dark:hover:text-primary-blue dark:hover:bg-gray-700 dark:hover:text-blue-light md:dark:hover:bg-transparent"
                >
                  Serviços
                </a>
              </li>

              <li>
                <a
                  href="#posts"
                  className="block text-xl py-2 px-3 md:p-0 text-blue-light rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-light dark:text-blue-light md:dark:hover:text-primary-blue dark:hover:bg-gray-700 dark:hover:text-blue-light md:dark:hover:bg-transparent"
                >
                  Posts
                </a>
              </li>

              <li>
                <a
                  href="#contato"
                  className="block text-xl py-2 px-3 md:p-0 text-blue-light rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-light dark:text-blue-light md:dark:hover:text-primary-blue dark:hover:bg-gray-700 dark:hover:text-blue-light md:dark:hover:bg-transparent"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
