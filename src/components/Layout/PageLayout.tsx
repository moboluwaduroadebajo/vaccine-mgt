import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full">
      <Sidebar />
      <main className="ml-[122px]">
        <Header />
        <div className="pl-9 pr-16 h-full pb-10">{children}</div>
      </main>
    </div>
  );
};

export default PageLayout;
