import { ReactNode } from "react";

type containerProps = {
  children: ReactNode;
};


const Container = ({ children }: containerProps) => {
  return <div className="max-w-[1420px] mx-auto py-20">{children}</div>;

}

export default Container;
