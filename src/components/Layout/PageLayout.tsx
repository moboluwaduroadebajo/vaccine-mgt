import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Breadcrumb = {
  name: string;
  href?: string;
};

type LayoutProps = {
  children: ReactNode;
  breadcrumbs: Breadcrumb[];
};

const PageLayout = ({ children, breadcrumbs }: LayoutProps) => {
  return (
    <div className="h-full">
      <Sidebar />
      <main className="md:ml-[122px]">
        <Header breadcrumbs={breadcrumbs} />
        <div className="pl-9 large:pr-16 pr-9 h-full pb-10">{children}</div>
      </main>
    </div>
  );
};

export default PageLayout;
