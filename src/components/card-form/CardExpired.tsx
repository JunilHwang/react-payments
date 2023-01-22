import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { Input, InputBox, InputInvalidMessage } from "../atoms";
import { ICard } from "../../domain";
import { useCardExpired } from "./hooks";

interface IProps {
  changeCardState: (newCardState: Partial<ICard>) => void;
  focusNext: () => void;
}

const MAX_LENGTH = 2;
const CardExpired = forwardRef(
  (
    { changeCardState, focusNext }: IProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { $expirationMonth, $expirationYear, invalidProps } = useCardExpired(
      changeCardState,
      focusNext
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => $expirationMonth.current!);

    return (
      <>
        <InputBox className="w-50">
          <Input
            ref={$expirationMonth}
            placeholder="MM"
            minLength={MAX_LENGTH}
            maxLength={MAX_LENGTH}
            pattern="[0-9]{2}"
            required
          />
          /
          <Input
            ref={$expirationYear}
            placeholder="YY"
            minLength={MAX_LENGTH}
            maxLength={MAX_LENGTH}
            pattern="[0-9]{2}"
            required
          />
        </InputBox>
        <InputInvalidMessage {...invalidProps} />
      </>
    );
  }
);

CardExpired.displayName = "CardExpired";

export default CardExpired;
