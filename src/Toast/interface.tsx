export type ToastState = "info" | "success" | "warning" | "error";

export interface IToastType {
  info: string;
  success: string;
  warning: string;
  error: string;
}

export const fillColor: IToastType = {
  warning: "#EE9C2F",
  info: "#008FB2",
  error: "#FF3B3B",
  success: "#009969",
};

export const textColor: IToastType = {
  warning: "text-warning-900",
  info: "text-info-900",
  error: "text-error-500",
  success: "text-success-900",
};
