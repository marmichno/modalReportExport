// styled
import {
  StyledInputContainer,
  StyledLabelWrapper,
  StyledInputWrapper,
  StyledInput,
} from '../../commonStyled/StyledInputs';
// react-hook-form
import { useFormContext } from 'react-hook-form';

export const EverydayAt = () => {
  const { register } = useFormContext();

  return (
    <StyledInputContainer>
      <StyledLabelWrapper>Everyday at</StyledLabelWrapper>
      <StyledInputWrapper>
        <StyledInput
          data-testid="everyDayAtInput1"
          type="time"
          width="30%"
          {...register('repeat.time')}
        />
      </StyledInputWrapper>
    </StyledInputContainer>
  );
};
