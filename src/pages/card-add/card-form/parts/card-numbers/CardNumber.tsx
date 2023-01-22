import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { Input } from "../../../../../components/atoms";
import { useCardNumber } from "./hooks";

interface IProps {
  focusNext: () => void;
  type?: string;
  onInput: () => void;
}

const CardNumber = forwardRef(
  (
    { focusNext, type = "text", onInput }: IProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { $cardNumber, invalid, handleNumberInput } = useCardNumber({
      focusNext,
      onInput,
    });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => $cardNumber.current!);

    return (
      <Input
        ref={$cardNumber}
        type={type}
        invalid={invalid}
        required
        onInput={handleNumberInput}
      />
    );
  }
);

CardNumber.displayName = "CardNumber";

export default CardNumber;