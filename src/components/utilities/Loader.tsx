import React from "react";
import { Icons } from "../icons";

type Props = {};

export default function Loader({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Icons name="loading-indicator" />
    </div>
  );
}
