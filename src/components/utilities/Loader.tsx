import React from "react";
import { Icons } from "../icons";

type Props = {
  className?: string;
};

export default function Loader({ className }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Icons name="loading-indicator" className={className} />
    </div>
  );
}
