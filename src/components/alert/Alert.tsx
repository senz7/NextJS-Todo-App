import { FC } from "react";

type AlertProps = {
  children: React.ReactNode;
};

export const Alert: FC<AlertProps> = (props) => {
  const { children } = props;

  return <div className="p-2 rounded bg-red-400">{children}</div>;
};
