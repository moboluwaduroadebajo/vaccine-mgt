import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface TabsProps {
  tabs: { label: string; url: string }[];
}

const MenuTab = ({ tabs }: TabsProps) => {
  const router = useRouter();
  const { tab } = router.query;

  const activeTab = tab || tabs[0].url;
  return (
    <div className="font-poppins font-light border-b-2 border-[#cce5cc] text-[#575757] ">
      <ul className="flex items-center justify-center h-[60px]">
        {tabs.map((tab) => (
          <Link
            key={tab.url}
            href={{
              pathname: router.pathname,
              query: { ...router.query, tab: tab.url },
            }}
            className={clsx({
              "h-full text-center w-1/2 flex justify-center cursor-pointer items-center hover:border-b hover:text-[#1F8E1F] hover:bg-[#f6fbf6]":
                true,
              "border-b text-[#1F8E1F] bg-[#f6fbf6]": tab.url === activeTab,
            })}>
            <li>{tab.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MenuTab;
