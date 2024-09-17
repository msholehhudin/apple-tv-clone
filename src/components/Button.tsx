import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Button = ({ children, size = "md", className }: Props) => {
  const btnSize = {
    sm: "text-xs px-2 py-1", //12px
    md: "text-sm px-5 py-3", //14x
    lg: "text-base px-8 py-4", //17px
  };
  return (
    <button
      className={twMerge(
        "rounded-full bg-white px-3 py-2 text-textBlack",
        btnSize[size],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
