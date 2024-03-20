import React from "react";

interface DashboardlayoutProps {
  children: React.ReactNode;
}

const Dashboardlayout: React.FC<DashboardlayoutProps> = (props) => {
  return (
    <div>
      <nav className="bg-black flex justify-between items-center text-white py-4 px-5">
        <h3>Logo</h3>
        <ul className="flex space-x-6 items-center gap-10">
          <li>Home </li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="h-screen bg-black w-[15vw] text-white text-center text-xl">
          <ul className="pt-5 flex flex-col gap-5 px-3">
            <li>Dashborad</li>
            <li>Credits</li>
            <li>Payments</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="p-4">{props.children}</div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
