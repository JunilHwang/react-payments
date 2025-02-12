import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
} from "react";

export default function Form({
  children,
  ...props
}: PropsWithChildren<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
>) {
  return (
    <form className="form" {...props}>
      {children}
    </form>
  );
}
