import React, { useState } from "react";

const NewNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-6 fixed-top py-2 bg-white shadow-md" style={{ fontFamily: 'sans-serif' }}>
      {/* Left: Email */}
      <div className="flex items-center gap-2 text-blue-900 font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#1e40af" strokeWidth="2" className="mr-1"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
        <a href="mailto:info@siteworx.in" className="hover:underline" style={{color:'#1e40af'}}>info@siteworx.in</a>
      </div>
      {/* Right: Client Area Dropdown */}
      {/* <div className="relative">
        <button
          className="flex items-center gap-1 px-3 py-1 rounded hover:bg-blue-100 transition-colors focus:outline-none border border-blue-100 text-blue-900 font-semibold"
          onClick={() => setDropdownOpen(v => !v)}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          Client Area
          <svg className={`ml-1 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#1e40af" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        {dropdownOpen && (
          <div className="relative   right-0 mt-2 w-40 bg-white rounded shadow-lg border border-blue-100  animate-fadeIn">
            <a href="/login"  className="block px-4 py-2  text-[#1e40af] hover:bg-blue-50">Login</a>
            <a href="/signup" className="block px-4 py-2  text-[#1e40af] hover:bg-blue-50">Sign Up</a>
          </div>
        )}
      </div> */}
    </nav>
  );
};

export default NewNavbar;