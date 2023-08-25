import React from 'react';

function Layout() {
  return (
    <div className="flex w-full h-screen bg-[#1E1E26] p-5 justify-between">
      {/* Left Drawer */}
      <div className="w-1/5 bg-[#22222B] bg-opacity-90 backdrop-blur rounded p-5">
        {/* Content for the left drawer */}
      </div>

      {/* Gap */}
      <div className="w-1/8"></div>

      {/* Main Content Area */}
      <div className="w-3/4 bg-[#22222B] bg-opacity-90 backdrop-blur rounded p-5 border-2 border-[#2C2E3E]">
        {/* Content for the main area */}
      </div>
    </div>
  );
}

export default Layout;
