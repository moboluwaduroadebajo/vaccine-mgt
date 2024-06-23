import { Icons } from "@/components/icons";
import { FC } from "react";
import { fillColor, ToastState } from "./interface";
import { ToastIcon } from "./ToastIcon";

interface IAlertProps {
  type: ToastState;
  message: string;
  closeToast?: () => void;
}

export const Alert = ({ closeToast, type, message }: IAlertProps) => (
  <div className="p-4 flex items-center alert bg-[#ffffff]">
    <div>
      <ToastIcon type={type} />
    </div>
    <p className="text-primary-900 small mr-auto ml-4 font-medium">{message}</p>
    <button onClick={closeToast} type="button" className="ml-4">
      <Icons name="cancel" fill={fillColor[type]} height={16} width={16} />
    </button>
  </div>
);
