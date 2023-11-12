import { FC, KeyboardEventHandler } from "react";

type TextInputProps = {
  className?: string | undefined;
  name?: string | undefined;
  onChange?: (e: any) => void;
  onKeyDown?: KeyboardEventHandler<T> | undefined;
  type?: "email" | "number" | "password" | "search" | "text" | undefined;
  value?: string | number | readonly string[] | undefined;
};

export const TextInput: FC<TextInputProps> = (props) => {
  const { onChange, value, name, className, type, onKeyDown } = props;

  return (
    <input
      onKeyDown={onKeyDown}
      onChange={onChange}
      value={value}
      name={name}
      className={className}
      type={type}
    />
  );
};
