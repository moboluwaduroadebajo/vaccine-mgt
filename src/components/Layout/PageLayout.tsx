import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-[#F0F7F0] h-screen w-screen overflow-hidden flex">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <div className="px-4">{children}</div>
      </main>
    </div>
  );
};

export default PageLayout;
