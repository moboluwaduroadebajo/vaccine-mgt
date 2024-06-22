import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-[#F0F7F0] h-screen w-screen overflow-hidden">
      <Sidebar />
      <main className="ml-[142px]">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
