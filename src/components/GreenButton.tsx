import React from "react";
import { cn } from "@/lib/utils";

interface GreenButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

const GreenButton = React.forwardRef<HTMLButtonElement, GreenButtonProps>(
  (
    { children, className, variant = "default", size = "md", ...props },
    ref,
  ) => {
    // Use red color for large buttons, green for others
    const buttonColor = size === "lg" ? "red" : "green";

    return (
      <button
        ref={ref}
        className={cn(
          "rounded-md font-medium transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "default"
            ? `bg-${buttonColor}-500 text-white hover:bg-${buttonColor}-600 active:bg-${buttonColor}-700 focus:ring-${buttonColor}-500`
            : `border-2 border-${buttonColor}-500 text-${buttonColor}-500 hover:bg-${buttonColor}-50 active:bg-${buttonColor}-100 focus:ring-${buttonColor}-500`,
          size === "sm"
            ? "text-sm px-3 py-1.5"
            : size === "md"
              ? "text-base px-4 py-2"
              : "text-lg px-6 py-3",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

GreenButton.displayName = "GreenButton";

export default GreenButton;
