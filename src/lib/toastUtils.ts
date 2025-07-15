// utils/toastUtils.ts
import { toast } from "sonner";

export function showSuccessToast(message: string) {
  toast(message, {
    duration: 3000,
    className: "toast-success",
    icon: "✅",
  });
}

export function showErrorToast(message: string) {
  toast(message, {
    duration: 3000,
    className: "toast-error",
    icon: "❌",
  });
}

export function showWarningToast(message: string) {
  toast(message, {
    duration: 3000,
    className: "toast-warning",
    icon: "⚠️",
  });
}
