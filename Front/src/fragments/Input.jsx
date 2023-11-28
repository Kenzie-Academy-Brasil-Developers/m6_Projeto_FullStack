import { forwardRef } from "react";

export const Input = forwardRef(({ type, label, ...rest }, ref) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input type={type} ref={ref} {...rest} />
    </>
  );
});
