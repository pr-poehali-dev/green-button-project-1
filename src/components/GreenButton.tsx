
import React from 'react';
import { cn } from "@/lib/utils";

interface GreenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const GreenButton = React.forwardRef<HTMLButtonElement, GreenButtonProps>(
  ({ children, className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "rounded-md font-medium transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
          variant === 'default' 
            ? "bg-green-500 text-white hover:bg-green-600 active:bg-green-700" 
            : "border-2 border-green-500 text-green-500 hover:bg-green-50 active:bg-green-100",
          size === 'sm' ? "text-sm px-3 py-1.5" : 
          size === 'md' ? "text-base px-4 py-2" : 
          "text-lg px-6 py-3",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GreenButton.displayName = "GreenButton";

export default GreenButton;
