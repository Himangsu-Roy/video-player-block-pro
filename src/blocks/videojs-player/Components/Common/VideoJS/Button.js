import { forwardRef } from "react";

export const SEEK_TIME = 10;

export const Button = forwardRef(function Button({ className, ...props }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className={["media-button", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
});
