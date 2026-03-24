import * as React from "react";

const Button = React.forwardRef(function Button(
  {
    className = "",
    disabled,
    children,
    style,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium",
        "ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
        className,
      ].join(" ")}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
