import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const homeHref = `${import.meta.env.BASE_URL}#/`;
  const logoSrc = `${import.meta.env.BASE_URL}images/logo.png`;

  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-center border-b border-gray-100 bg-[#FDFDFD]">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <a href={homeHref} className="flex items-center">
          <img
            src={logoSrc}
            alt="Hubyai"
            className="h-8 w-auto"
          />
        </a>

        {/* Download button */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 rounded-lg border border-[#1570EF] bg-[#1570EF] px-[18px] py-[10px] text-base font-semibold leading-6 text-white shadow-sm transition-colors hover:bg-[#1264d3]"
          >
            Uygulamayı indir
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="white"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M14.5 10.5C14.5 13.814 11.814 16.5 8.5 16.5C5.186 16.5 2.5 13.814 2.5 10.5C2.5 7.186 5.186 4.5 8.5 4.5"
                    stroke="#1570EF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.5 7.5L11.5 7.5M11.5 7.5L13.5 5.5M11.5 7.5L13.5 9.5"
                    stroke="#1570EF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Google Play
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M13 2.5H7C5.067 2.5 3.5 4.067 3.5 6V14C3.5 15.933 5.067 17.5 7 17.5H13C14.933 17.5 16.5 15.933 16.5 14V6C16.5 4.067 14.933 2.5 13 2.5Z"
                    stroke="#1570EF"
                    strokeWidth="1.5"
                  />
                  <circle cx="10" cy="14" r="1" fill="#1570EF" />
                </svg>
                App Store
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
