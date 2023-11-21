import { FC } from "react";

type ButtonProps = {
  className?: string | undefined;
  type?: "submit" | "button" | "reset" | undefined;
  id?: string;
  children: any;
  disabled?: boolean | undefined;
  onClick?: (e: any) => void;
  onSubmit?: () => void;
};

export const Button: FC<ButtonProps> = (props) => {
  const { disabled, className, type, id, children, onClick, onSubmit } = props;

  return (
    <button
      onSubmit={onSubmit}
      disabled={disabled}
      onClick={onClick}
      className={className}
      type={type}
      id={id}
    >
      {children}
    </button>
  );
};
