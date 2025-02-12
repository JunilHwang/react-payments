import { ForwardedRef, forwardRef } from "react";
import { Input, InputBox } from "../../../../../components/atoms";
import { InputInvalidMessage } from "../../../../../components";
import { useCardOwner } from "./hooks";
import CardOwnerLength from "./CardOwnerLength";

const MIN_LENGTH = 1;
const MAX_LENGTH = 30;

interface IProps {
  invalidMessage?: string;
}

const CardOwner = forwardRef(
  ({ invalidMessage }: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { owner, ownerLength, handleInputOwner, invalid } = useCardOwner();

    return (
      <>
        <InputBox className="relative">
          <CardOwnerLength ownerLength={ownerLength} maxLength={MAX_LENGTH} />
          <Input
            ref={ref}
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            invalid={invalid}
            minLength={MIN_LENGTH}
            maxLength={MAX_LENGTH}
            onInput={handleInputOwner}
            defaultValue={owner}
            required
          />
        </InputBox>
        <InputInvalidMessage>{invalidMessage}</InputInvalidMessage>
      </>
    );
  }
);

CardOwner.displayName = "CardOwner";

export default CardOwner;
