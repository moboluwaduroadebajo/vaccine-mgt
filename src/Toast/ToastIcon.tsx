import { Icons } from "@/components/icons";
import { ToastState } from "./interface";

interface IToastIconProps {
  type: ToastState;
}

export const ToastIcon = ({ type }: IToastIconProps) => {
  if (type === "error") {
    return <Icons name="error" height={25} width={25} />;
  }
  if (type === "warning") {
    return <Icons name="warning" fill="#EE9C2F" height={25} width={25} />;
  }
  if (type === "success") {
    return <Icons name="success" height={25} width={25} />;
  }
  if (type === "info") {
    return <Icons name="info" fill="#008FB2" height={25} width={25} />;
  }
  return <div />;
};
