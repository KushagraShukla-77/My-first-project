import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Left */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <h1 className="text-4xl font-bold text-purple-600">zepto</h1>

          {/* Location */}
          <div>
            <p className="font-semibold text-gray-900">
              ⚡ Delivery in minutes*
            </p>

            <div className="flex cursor-pointer items-center text-sm text-gray-600">
              <span>Select Location</span>

              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mx-8 flex-1">
          <div className="flex items-center rounded-xl bg-gray-100 px-4 py-3">
            {/* Search Icon */}
            <svg
              className="h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.3-4.3"></path>
            </svg>

            <input
              type="text"
              placeholder='Search for "chocolate box"'
              className="ml-3 w-full bg-transparent outline-none placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-8">
          {/* Login */}
          <div className="flex cursor-pointer flex-col items-center">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 5h14c0-3-3-5-7-5z"
              />
            </svg>

            <span className="text-sm">Login</span>
          </div>

          {/* Cart */}
          <div className="flex cursor-pointer flex-col items-center">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l2 12h10l2-8H7"
              />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>

            <span className="text-sm">Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;